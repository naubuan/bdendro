import bokeh.models
import numpy
import scipy.cluster.hierarchy


__all__ = ["dendrogram_renderer"]


def dendrogram_renderer(Z, threshold=None, vertical=True):
    """Make a renderer of a dendrogram.

    Parameters
    ----------
    Z : (N - 1, 4) numpy.ndarray
        Linkage matrix returned by `scipy.cluster.hierarchy.linkage` function.
        ``N`` is the number of leaves.
    threshold : float or None, optional
        Height for cutting a dendrogram in subtrees. If ``None``, a dendrogram
        is not cut.
    vertical : bool, optional
        If ``True``, the height direction of a dendrogram is the y direction.
        If ``False``, it is the x direction.

    Returns
    -------
    graph : bokeh.models.renderers.GraphRenderer
        Renderer of a dendrogram

    Notes
    -----
    Information about subtrees is contained in
    ``graph.node_renderer.data_source.data['subtree']`` and
    ``graph.edge_renderer.data_source.data['subtree']``. They are `list`\ s of
    labels of subtrees to which nodes/edges belong. The label of the ``i``\ th
    subtree is ``str(i)``. If a node/edge does not belong to any subtrees, the
    corresponding item is an empty string.
    """
    if threshold is None:
        threshold = -numpy.inf

    n_leaves = len(Z) + 1

    node_bs, node_hs = _get_node_coords(Z)

    node_subtrees = _get_subtrees(Z, node_hs[n_leaves:], threshold)
    node_subtrees = [str(subtree) if subtree is not None else ""
                     for subtree in node_subtrees]

    edge_starts = []
    edge_ends = []
    edge_bs = []
    edge_hs = []
    edge_subtrees = []
    for node, (node_b, node_h, children, subtree) in list(
            enumerate(zip(node_bs[n_leaves:], node_hs[n_leaves:],
                          Z[:, [0, 1]].astype(int), node_subtrees[n_leaves:]),
                      start=n_leaves))[::-1]:
        for child in children:
            child_b = node_bs[child]
            child_h = node_hs[child]
            bs = [node_b, child_b, child_b]
            hs = [node_h, node_h, child_h]
            edge_starts.append(node)
            edge_ends.append(child)
            edge_bs.append(bs)
            edge_hs.append(hs)
            edge_subtrees.append(subtree)

    if vertical:
        node_xs, node_ys = node_bs, node_hs
        edge_xs, edge_ys = edge_bs, edge_hs
    else:
        node_xs, node_ys = node_hs, node_bs
        edge_xs, edge_ys = edge_hs, edge_bs

    node_data = {"index": list(range(len(node_hs))),
                 "height": node_hs.tolist(), "subtree": node_subtrees}
    edge_data = {"start": edge_starts, "end": edge_ends, "xs": edge_xs,
                 "ys": edge_ys, "subtree": edge_subtrees}

    layout_provider = bokeh.models.StaticLayoutProvider(
        graph_layout=dict(enumerate(zip(node_xs, node_ys))))

    graph = bokeh.models.GraphRenderer()
    graph.node_renderer.data_source.data = node_data
    graph.edge_renderer.data_source.data = edge_data
    graph.layout_provider = layout_provider

    return graph


def _get_node_coords(Z):
    """Calculate coordinates of nodes.

    Parameters
    ----------
    Z : (N - 1, 4) numpy.ndarray
        Linkage matrix returned by `scipy.cluster.hierarchy.linkage` function.
        ``N`` is the number of leaves.

    Returns
    -------
    bs : (2*N - 1,) numpy.ndarray
        Coordinates in the breadth direction of a tree.
    hs : (2*N - 1,) numpy.ndarray
        Coordinates in the height direction of a tree.
    """
    n_leaves = len(Z) + 1
    n_nodes = 2*len(Z) + 1

    bs = numpy.empty(n_nodes, dtype=float)
    hs = numpy.empty(n_nodes, dtype=float)

    leaf_ordering = scipy.cluster.hierarchy.leaves_list(Z)
    bs[:n_leaves] = leaf_ordering.argsort()
    hs[:n_leaves] = 0.

    for node, children in enumerate(Z[:, [0, 1]].astype(int), start=n_leaves):
        bs[node] = bs[children].mean()
    hs[n_leaves:] = Z[:, 2]

    return bs, hs


def _get_subtrees(Z, hs, threshold):
    """Return subtrees to which nodes belong.

    Parameters
    ----------
    Z : (N - 1, 4) numpy.ndarray
        Linkage matrix returned by `scipy.cluster.hierarchy.linkage` function.
        ``N`` is the number of leaves.
    hs : (N - 1,) list[float]
        Heights of non-leaf nodes.
    threshold : float
        Height for cutting a dendrogram in subtrees.

    Returns
    -------
    subtrees : (2*N - 1,) list[int or None]
        Indices of subtrees to which nodes belong. ``None`` means that the
        corresponding node does not belong any subtree.
    """
    n_leaves = len(Z) + 1
    n_nodes = 2*len(Z) + 1

    subtrees = [None] * n_nodes
    n_subtrees = 0
    if hs[-1] <= threshold:
        subtrees[-1] = n_subtrees
        n_subtrees += 1
    for node, children in list(
            enumerate(Z[:, [0, 1]].astype(int), start=n_leaves))[::-1]:
        if subtrees[node] is None:
            for child in children:
                h = hs[child - n_leaves] if n_leaves <= child else 0.
                if h <= threshold:
                    subtrees[child] = n_subtrees
                    n_subtrees += 1
        else:
            for child in children:
                subtrees[child] = subtrees[node]

    return subtrees
