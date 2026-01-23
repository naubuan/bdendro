from __future__ import annotations

from typing import TYPE_CHECKING, cast

import bokeh.models

if TYPE_CHECKING:
    from collections.abc import Sequence

    from bokeh.models import Plot, StaticLayoutProvider
    from bokeh.models.renderers import GraphRenderer
    from bokeh.models.text import BaseText

__all__ = ["set_axes"]


def set_axes(
    figure: Plot,
    dendrogram: GraphRenderer,
    labels: Sequence[str] | None = None,
    vertical: bool = True,
) -> None:
    """Set x and y axes to be appropriate for a dendrogram.

    Parameters
    ----------
    figure : bokeh.models.plots.Plot
        Figure whose axes are set.
    dendrogram : bokeh.models.GraphRenderer
        Renderer returned by `bdendro.dendrogram_renderer` function.
    labels : Sequence[str] or None, optional
        Labels of leaves. If ``None``, indices of leaves are used.
    vertical : bool, optional
        If ``True``, the height direction of a dendrogram is the y direction.
        If ``False``, it is the x direction.
    """
    n_nodes = len(cast("StaticLayoutProvider", dendrogram.layout_provider).graph_layout)
    n_leaves = (n_nodes + 1) // 2

    if labels is None:
        labels = [str(leaf) for leaf in range(n_leaves)]

    node_xs: tuple[float, ...]
    node_ys: tuple[float, ...]
    leaf_xs: tuple[float, ...]
    leaf_ys: tuple[float, ...]
    if n_leaves:
        node_coords = [cast("StaticLayoutProvider", dendrogram.layout_provider).graph_layout[node]
                       for node in range(n_nodes)]
        node_xs, node_ys = zip(*node_coords, strict=True)
        leaf_xs, leaf_ys = zip(*node_coords[:n_leaves], strict=True)
    else:
        node_xs, node_ys = (), ()
        leaf_xs, leaf_ys = (), ()

    if vertical:
        node_hs = node_ys
        leaf_bs = leaf_xs
    else:
        node_hs = node_xs
        leaf_bs = leaf_ys

    baxis_ticker = bokeh.models.FixedTicker(ticks=leaf_bs)

    label_mapping: dict[float | str, str | BaseText] = {
        tick: labels[leaf]
        for leaf, tick in enumerate(leaf_bs)
    }

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
