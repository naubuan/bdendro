from __future__ import annotations

import itertools
from typing import TYPE_CHECKING, cast

import bokeh.transform
import numpy as np

if TYPE_CHECKING:
    from collections.abc import Sequence

    from bokeh.core.property.vectorization import Field
    from bokeh.models import ColumnDataSource
    from bokeh.models.renderers import GraphRenderer

__all__ = ["subtree_cmap"]


def subtree_cmap(
    dendrogram: GraphRenderer,
    palette: Sequence[str],
    default_color: str | None = None,
    skip_single: bool = True,
) -> Field:
    """Make a mapping from a subtree label to a color.

    Parameters
    ----------
    dendrogram : bokeh.models.GraphRenderer
        Renderer returned by `bdendro.dendrogram_renderer` function.
    palette : Sequence[str]
        Colors of subtrees. If ``default_color`` is ``None``, the first item is
        removed and used for it.
    default_color : str or None, optional
        Default color of a tree. If ``None``, the first item of ``palette`` is
        removed and used for this.
    skip_single : bool, optional
        If ``True``, a subtree consisting of a single node is colored with
        ``default_color``.

    Returns
    -------
    cmap : bokeh.core.property.vectorization.Field
        Mapping from a subtree label to a color.
    """
    if default_color is None:
        default_color, *palette = palette

    field_name = "subtree"

    factors, nums = np.unique(
        cast("ColumnDataSource", dendrogram.node_renderer.data_source).data[field_name],
        return_counts=True)
    if skip_single:
        factors = factors[1 < nums]
    factors = factors[factors != ""]
    factors = sorted(factors, key=lambda item: int(item))

    palette = list(itertools.islice(itertools.cycle(palette), len(factors)))

    return bokeh.transform.factor_cmap(field_name, palette, factors, nan_color=default_color)
