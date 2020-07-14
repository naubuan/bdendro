import inspect
import pathlib
import sys


project_root = pathlib.Path(__file__).parents[1]
sys.path.append(str(project_root))

package_name = "bdendro"

variables = {}
with open(project_root / package_name / "version.py", mode="r") as f:
    exec(f.read(), variables)
release = variables["__version__"]

project_root_url = "https://github.com/naubuan/bdendro"

project = "BDendro"
author = "naubuan"
copyright = f"2020, {author}"

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

def linkcode_resolve(domain, info):
    if domain != "py":
        return None
    obj = sys.modules[info["module"]]
    for attr in info["fullname"].split("."):
        obj = getattr(obj, attr)
    path = pathlib.Path(inspect.getsourcefile(obj))
    path = path.relative_to(project_root)
    lines, start = inspect.getsourcelines(obj)
    end = start + len(lines) - 1
    return f"{project_root_url}/blob/v{release}/{path}#L{start}-L{end}"

templates_path = ["_templates"]
exclude_patterns = ["_build"]

html_theme = "bizstyle"
html_short_title = "Home"
html_copy_source = False
html_static_path = ["_static"]
html_css_files = ["custom.css"]
