from __future__ import annotations

import pathlib
import shutil
from typing import TYPE_CHECKING

import nox

if TYPE_CHECKING:
    from collections.abc import Collection

    from nox import Session

PYPROJECT = nox.project.load_toml()
SUPPORTED_PYTHONS = nox.project.python_versions(PYPROJECT)
DEFAULT_PYTHON = sorted(SUPPORTED_PYTHONS, key=lambda s: s.split("."))[-1]

nox.options.sessions = []
nox.options.default_venv_backend = "uv"
nox.options.error_on_missing_interpreters = True


@nox.session(python=SUPPORTED_PYTHONS)
def lint(session: Session) -> None:
    """Perform linting."""
    _sync_with_uv_lock(session, ["lint"])
    session.run("ruff", "check", *session.posargs)


@nox.session(name="type", python=SUPPORTED_PYTHONS)
def type_(session: Session) -> None:
    """Perform type checking."""
    _sync_with_uv_lock(session, ["dev", "doc", "type"], project=True)
    session.run("mypy", *session.posargs)


@nox.session(python=DEFAULT_PYTHON)
def doc(session: Session) -> None:
    """Build the documentation."""
    doc_src = pathlib.Path("docs_src")

    _sync_with_uv_lock(session, ["doc"], project=True)

    session.run("python", doc_src/"examples"/"generate.py")
    session.run(
        "sphinx-build",
        "--builder=html",
        f"--doctree-dir={doc_src/'.doctrees'}",
        "--fail-on-warning",
        *session.posargs,
        doc_src,
        "docs",
    )


@nox.session(python=False)
def cleandoc(session: Session) -> None:
    """Remove files generated in building the documentation."""
    doc_root = pathlib.Path("docs_src")

    for path in (doc_root/"api").glob("*.rst"):
        if path.name in {"bdendro.rst"}:
            continue
        if path.is_file():
            session.log(f"remove file '{path}'")
            path.unlink()

    for path in [pathlib.Path("docs"), doc_root/"examples"/"generated"]:
        if path.is_dir():
            session.log(f"remove directory '{path}'")
            shutil.rmtree(path)


def _sync_with_uv_lock(session: Session, groups: Collection[str], *, project: bool = False) -> None:
    """Synchronize with the uv.lock file.

    Parameters
    ----------
    session : nox.Session
        Session object.
    groups : collection of str
        Dependency groups to be installed.
    project : bool, optional
        If ``True`` is given, the project's package and dependencies are also installed.
    """
    if not (groups or project):
        return

    options = ["--active", "--frozen", "--reinstall"]
    if project:
        options.extend(f"--group={group}" for group in groups if group != "dev")
        if "dev" not in groups:
            options.append("--no-dev")
    else:
        options.extend(f"--only-group={group}" for group in groups)
    session.run_install("uv", "sync", *options)
