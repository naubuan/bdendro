import setuptools


name = "bdendro"

variables = {}
with open("{}/version.py".format(name), mode="r") as f:
    exec(f.read(), variables)
version = variables["__version__"]

setuptools.setup(
    name=name,
    version=version,
    packages=setuptools.find_packages(),
    python_requires=">= 3.6",
    install_requires=["bokeh >= 1.1.0",
                      "numpy >= 1.10.1",
                      "scipy >= 1.0.0"],
    extra_requires={"doc": ["bokeh >= 2.0.0",
                            "selenium",
                            "Sphinx >= 2.0.0",
                            "sphinxcontrib-fulltoc >= 1.2.0"]},
    description="Bokeh helpers for visualizing a dendrogram.",
    author="naubuan",
    url="https://github.com/naubuan/bdendro",
    classifiers=["License :: OSI Approved :: Apache Software License",
                 "Programming Language :: Python :: 3.6",
                 "Programming Language :: Python :: 3.7",
                 "Programming Language :: Python :: 3.8",
                 "Topic :: Scientific/Engineearing :: Visualization"])
