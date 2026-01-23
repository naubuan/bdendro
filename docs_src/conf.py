from __future__ import annotations

import importlib.metadata
import inspect
import pathlib
import sys

_PROJECT_ROOT = pathlib.Path(__file__).parents[1]
_PACKAGE_NAME = "bdendro"
_PACKAGE_METADATA = importlib.metadata.metadata(_PACKAGE_NAME)

project_root_url = "https://github.com/naubuan/bdendro"

project = "BDendro"
author = _PACKAGE_METADATA["Author"]
project_copyright = f"2020, {author}"
version = release = _PACKAGE_METADATA["Version"]

today_fmt = "%B %d, %Y"

default_role = "obj"

extensions = ["sphinx.ext.autodoc",
              "sphinx.ext.autosummary",
              "sphinx.ext.githubpages",
              "sphinx.ext.intersphinx",
              "sphinx.ext.linkcode",
              "sphinx.ext.napoleon",
              "sphinxcontrib.fulltoc",
              "bokeh.sphinxext.bokeh_plot"]
autodoc_typehints = "none"
autosummary_generate = True
autosummary_generate_overwrite = False
intersphinx_mapping = {
    "python": ("https://docs.python.org/3/", None),
    "numpy": ("https://numpy.org/doc/stable/", None),
    "scipy": ("https://docs.scipy.org/doc/scipy/reference/", None),
    "bokeh": ("https://docs.bokeh.org/en/latest", None)}
napoleon_numpy_docstring = True
napoleon_use_rtype = False
napoleon_use_admonition_for_notes = True

def linkcode_resolve(domain: str, info: dict[str, str]) -> str | None:
    if domain != "py":
        return None
    obj = sys.modules[info["module"]]
    for attr in info["fullname"].split("."):
        obj = getattr(obj, attr)
    path_str = inspect.getsourcefile(obj)
    if path_str is None:
        message = f"failed to get a source file of {info['module']}.{info['fullname']}"
        raise RuntimeError(message)
    path = pathlib.Path(path_str)
    path = path.relative_to(_PROJECT_ROOT)
    lines, start = inspect.getsourcelines(obj)
    end = start + len(lines) - 1
    return f"{project_root_url}/blob/v{release}/{path}#L{start}-L{end}"

templates_path = ["_templates"]

html_theme = "bizstyle"
html_short_title = "Home"
html_copy_source = False
html_static_path = ["_static"]
html_css_files = ["custom.css"]
