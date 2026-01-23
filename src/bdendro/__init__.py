"""Bokeh helpers for visualizing a dendrogram."""

import contextlib
import importlib.metadata

from ._axes import set_axes
from ._renderers import dendrogram_renderer
from ._transform import subtree_cmap

__all__ = ["dendrogram_renderer", "set_axes", "subtree_cmap"]

with contextlib.suppress(importlib.metadata.PackageNotFoundError):
    __version__ = importlib.metadata.version(__package__)
