SPHINXBUILD := sphinx-build
SOURCE_DIR := .
BUILD_DIR := _build

AUTOGEN_DIR := api
NON_AUTOGEN_SOURCESS := $(AUTOGEN_DIR)/bdendro.rst

PYTHON := python
EXAMPLES_SCRIPT := examples/generate.py
EXAMPLES_GENERATED_DIR := examples/generated

.PHONY: \
    help \
    examples \
    html \
    autogen-clean \
    examples-clean \
    mostlyclean \
    clean

help:
	@echo "Usage: make target"
	@echo
	@echo "Targets:"
	@sed -n "s/^\([^. ]*\):.*$$/  \1/p" Makefile

examples:
	@$(PYTHON) $(EXAMPLES_SCRIPT)

html: examples
	@$(SPHINXBUILD) -M html $(SOURCE_DIR) $(BUILD_DIR)

autogen-clean:
	@echo "Removing automatically generated sources under '$(AUTOGEN_DIR)'..."
	@rm -f $(filter-out $(NON_AUTOGEN_SOURCESS),$(wildcard $(AUTOGEN_DIR)/*))

examples-clean:
	@echo "Removing everything under '$(EXAMPLES_GENERATED_DIR)'..."
	@rm -f -r $(EXAMPLES_GENERATED_DIR)

mostlyclean: autogen-clean
	@$(SPHINXBUILD) -M clean $(SOURCE_DIR) $(BUILD_DIR)

clean: mostlyclean examples-clean
