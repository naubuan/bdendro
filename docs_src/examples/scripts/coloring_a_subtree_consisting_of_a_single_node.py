import bokeh.io
import bokeh.palettes
import bokeh.plotting
import scipy.cluster.hierarchy
import bdendro


# prepare data points
X = [(0, 0), (0, 1), (2, 0), (2, 3), (4, 6), (5, 4)]

# clustering
Z = scipy.cluster.hierarchy.linkage(X)

# make a renderer
threshold = 2.5
dendrogram = bdendro.dendrogram_renderer(Z, threshold=threshold)

# color subtrees
cmap = bdendro.subtree_cmap(dendrogram, bokeh.palettes.Category10[10],
                            skip_single=False)
dendrogram.node_renderer.glyph.size = 10  # for easy viewing
dendrogram.node_renderer.glyph.line_color = cmap
dendrogram.node_renderer.glyph.fill_color = cmap
dendrogram.edge_renderer.glyph.line_color = cmap

# make a figure
figure = bokeh.plotting.Figure(plot_width=300, plot_height=300)
bdendro.set_axes(figure, dendrogram)
figure.xgrid.visible = False
figure.renderers.append(dendrogram)
figure.add_layout(bokeh.models.Span(dimension="width", location=threshold,
                                    line_dash="dotted"))

# show a figure
bokeh.io.show(figure)
