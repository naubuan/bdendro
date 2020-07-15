import bokeh.io
import bokeh.plotting
import scipy.cluster.hierarchy
import bdendro


# prepare data points
X = [(0, 0), (0, 1), (2, 0), (2, 3), (4, 6), (5, 4)]

# clustering
Z = scipy.cluster.hierarchy.linkage(X)

# make a renderer
dendrogram = bdendro.dendrogram_renderer(Z)

# make a figure
figure = bokeh.plotting.Figure(plot_width=300, plot_height=300)
bdendro.set_axes(figure, dendrogram)
figure.xgrid.visible = False
figure.renderers.append(dendrogram)

# show a figure
bokeh.io.show(figure)
