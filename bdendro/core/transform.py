import itertools

import bokeh.transform
import numpy


__all__ = ["subtree_cmap"]


def subtree_cmap(dendrogram, palette, default_color=None, skip_single=True):
    """Make a mapping from a subtree label to a color.

    Parameters
    ----------
    dendrogram : bokeh.models.renderer.GraphRenderer
        Renderer returned by `bdendro.dendrogram_renderer` function.
    palette : list[str]
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
    cmap : dict
        Mapping from a subtree label to a color.
    """
    if default_color is None:
        default_color, *palette = palette

    field_name = "subtree"

    factors, nums = numpy.unique(
        dendrogram.node_renderer.data_source.data[field_name],
        return_counts=True)
    if skip_single:
        factors = factors[1 < nums]
    factors = factors[factors != ""]
    factors = sorted(factors, key=lambda item: int(item))

    palette = list(itertools.islice(itertools.cycle(palette), len(factors)))
    cmap = bokeh.transform.factor_cmap(field_name, palette, factors,
                                       nan_color=default_color)

    return cmap
