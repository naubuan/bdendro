from __future__ import annotations

import pathlib
import sys
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from collections.abc import Sequence
    from pathlib import Path


def main() -> int:
    directory = pathlib.Path(__file__).parent

    root = directory.parent
    scripts = [
        directory / "scripts" / base
        for base in ["basic_usage.py",
                     "leaf_labels.py",
                     "coloring_subtrees.py",
                     "default_color.py",
                     "coloring_a_subtree_consisting_of_a_single_node.py",
                     "horizontal_layout.py"]]
    generated = directory / "generated"
    home = generated / "index.rst"

    generated.mkdir(exist_ok=True)

    rests = [generated / f"{script.stem}.rst" for script in scripts]
    images = [generated / f"{script.stem}.png" for script in scripts]
    if not home.exists():
        print(f"generate '{home}'...")  # noqa: T201
        generate_home_rest(home, rests, images)
    for script, rest in zip(scripts, rests, strict=True):
        if not rest.exists():
            print(f"generate '{rest}'...")  # noqa: T201
            generate_rest(rest, script, root)
    for script, image in zip(scripts, images, strict=True):
        if not image.exists():
            print(f"generate '{image}'...")  # noqa: T201
            generate_image(image, script)

    return 0


def generate_home_rest(path: Path, rests: Sequence[Path], images: Sequence[Path]) -> None:
    rests = [rest.relative_to(path.parent) for rest in rests]
    images = [image.relative_to(path.parent) for image in images]

    lines = ["Examples\n",
             "========\n"]
    for rest, image in zip(rests, images, strict=True):
        lines.extend(["\n",
                      f".. figure:: {image}\n",
                      f"   :target: {rest.with_suffix('.html')}\n",
                      "   :figclass: gallery\n",
                      "\n",
                      f"   :doc:`{rest.with_suffix('')}`\n"])
    lines.extend(["\n",
                  "\n",
                  ".. toctree::\n",
                  "   :hidden:\n",
                  "\n"])
    lines.extend(f"   {rest.with_suffix('')}\n" for rest in rests)

    with path.open(mode="w") as f:
        f.writelines(lines)


def generate_rest(path: Path, script: Path, root: Path) -> None:
    script = script.relative_to(root)

    heading = script.stem.replace("_", " ").capitalize()
    lines = [f"{heading}\n",
             "="*len(heading) + "\n",
             "\n",
             f".. bokeh-plot:: {script}\n"]

    with path.open(mode="w") as f:
        f.writelines(lines)


def generate_image(path: Path, script: Path) -> None:
    with script.open(mode="r") as f:
        lines = f.readlines()
    lines[-1:] = [
        "import chromedriver_binary\n",
        f"bokeh.io.export_png(figure, filename='{path}')\n",
    ]

    exec("".join(lines))  # noqa: S102


if __name__ == "__main__":
    sys.exit(main())
