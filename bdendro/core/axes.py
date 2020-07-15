import bokeh.models


__all__ = ["set_axes"]


def set_axes(figure, dendrogram, labels=None, vertical=True):
    """Set x and y axes to be appropriate for a dendrogram.

    Parameters
    ----------
    figure : bokeh.models.plots.Plot
        Figure whose axes are set.
    dendrogram : bokeh.models.renderer.GraphRenderer
        Renderer returned by `bdendro.dendrogram_renderer` function.
    labels : list[str] or None, optional
        Labels of leaves. If ``None``, indices of leaves are used.
    vertical : bool, optional
        If ``True``, the height direction of a dendrogram is the y direction.
        If ``False``, it is the x direction.
    """
    n_nodes = len(dendrogram.layout_provider.graph_layout)
    n_leaves = (n_nodes + 1) // 2

    if labels is None:
        labels = [str(leaf) for leaf in range(n_leaves)]

    if n_leaves:
        node_coords = [dendrogram.layout_provider.graph_layout[node]
                       for node in range(n_nodes)]
        node_xs, node_ys = zip(*node_coords)
        leaf_xs, leaf_ys = zip(*node_coords[:n_leaves])
    else:
        node_xs, node_ys = [], []
        leaf_xs, leaf_ys = [], [], []

    if vertical:
        node_hs = node_ys
        leaf_bs = leaf_xs
    else:
        node_hs = node_xs
        leaf_bs = leaf_ys

    baxis_ticker = bokeh.models.FixedTicker(ticks=leaf_bs)

    ticks = [str(b) if not float(b).is_integer() else str(int(b))
             for b in leaf_bs]
    label_mapping = {tick: labels[leaf] for leaf, tick in enumerate(ticks)}

    if 2 <= n_leaves:
        min_b = min(leaf_bs)
        max_b = max(leaf_bs)
        db = (max_b - min_b) / (n_leaves - 1)
        start = min_b - 0.5*db
        end = max_b + 0.5*db
    else:
        start = -0.5
        end = 0.5
    b_range = bokeh.models.Range1d(start, end)

    end = 1.1 * max(node_hs) if 2 <= n_leaves else 1.
    h_range = bokeh.models.Range1d(0., end)

    if vertical:
        figure.xaxis.ticker = baxis_ticker
        figure.xaxis.major_label_overrides = label_mapping
        figure.x_range = b_range
        figure.y_range = h_range
    else:
        figure.yaxis.ticker = baxis_ticker
        figure.yaxis.major_label_overrides = label_mapping
        figure.y_range = b_range
        figure.x_range = h_range
