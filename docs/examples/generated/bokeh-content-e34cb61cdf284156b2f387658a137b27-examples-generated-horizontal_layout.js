(function() {
  const fn = function() {
    'use strict';
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
    const element = document.getElementById("cdae33ef-91cf-4a8e-959d-10ff0b7012e6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cdae33ef-91cf-4a8e-959d-10ff0b7012e6' but no matching script tag was found.")
        }
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-3.8.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-3.8.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-3.8.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-3.8.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-3.8.2.min.js"];
      const css_urls = [];
    
      const inline_js = [    function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                  const docs_json = '{"a8efd529-04ab-4b65-8e02-16adc5362c51":{"version":"3.8.2","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p1266","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p1267"}}},"roots":[{"type":"object","name":"Figure","id":"p1292","attributes":{"width":300,"height":300,"x_range":{"type":"object","name":"Range1d","id":"p1328","attributes":{"end":3.478505426185218}},"y_range":{"type":"object","name":"Range1d","id":"p1327","attributes":{"start":-0.5,"end":5.5}},"x_scale":{"type":"object","name":"LinearScale","id":"p1301"},"y_scale":{"type":"object","name":"LinearScale","id":"p1302"},"title":{"type":"object","name":"Title","id":"p1299"},"renderers":[{"type":"object","name":"GraphRenderer","id":"p1269","attributes":{"layout_provider":{"type":"object","name":"StaticLayoutProvider","id":"p1268","attributes":{"graph_layout":{"type":"map","entries":[[0,[0.0,4.0]],[1,[0.0,5.0]],[2,[0.0,3.0]],[3,[0.0,2.0]],[4,[0.0,0.0]],[5,[0.0,1.0]],[6,[1.0,4.5]],[7,[2.0,3.75]],[8,[2.23606797749979,0.5]],[9,[2.8284271247461903,2.875]],[10,[3.1622776601683795,1.6875]]]}}},"node_renderer":{"type":"object","name":"GlyphRenderer","id":"p1274","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1286","attributes":{"selected":{"type":"object","name":"Selection","id":"p1287","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1288"},"data":{"type":"map","entries":[["index",[0,1,2,3,4,5,6,7,8,9,10]],["height",[0.0,0.0,0.0,0.0,0.0,0.0,1.0,2.0,2.23606797749979,2.8284271247461903,3.1622776601683795]],["subtree",["","","","","","","","","","",""]]]}}},"view":{"type":"object","name":"CDSView","id":"p1275","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1276"}}},"glyph":{"type":"object","name":"Scatter","id":"p1270"}}},"edge_renderer":{"type":"object","name":"GlyphRenderer","id":"p1281","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1289","attributes":{"selected":{"type":"object","name":"Selection","id":"p1290","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1291"},"data":{"type":"map","entries":[["start",[10,10,9,9,8,8,7,7,6,6]],["end",[8,9,3,7,4,5,2,6,0,1]],["xs",[[3.1622776601683795,3.1622776601683795,2.23606797749979],[3.1622776601683795,3.1622776601683795,2.8284271247461903],[2.8284271247461903,2.8284271247461903,0.0],[2.8284271247461903,2.8284271247461903,2.0],[2.23606797749979,2.23606797749979,0.0],[2.23606797749979,2.23606797749979,0.0],[2.0,2.0,0.0],[2.0,2.0,1.0],[1.0,1.0,0.0],[1.0,1.0,0.0]]],["ys",[[1.6875,0.5,0.5],[1.6875,2.875,2.875],[2.875,2.0,2.0],[2.875,3.75,3.75],[0.5,0.0,0.0],[0.5,1.0,1.0],[3.75,3.0,3.0],[3.75,4.5,4.5],[4.5,4.0,4.0],[4.5,5.0,5.0]]],["subtree",["","","","","","","","","",""]]]}}},"view":{"type":"object","name":"CDSView","id":"p1282","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1283"}}},"glyph":{"type":"object","name":"MultiLine","id":"p1277"}}},"selection_policy":{"type":"object","name":"NodesOnly","id":"p1284"},"inspection_policy":{"type":"object","name":"NodesOnly","id":"p1285"}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1300","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p1313"},{"type":"object","name":"WheelZoomTool","id":"p1314","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p1315","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p1316","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p1322","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p1321","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"SaveTool","id":"p1323"},{"type":"object","name":"ResetTool","id":"p1324"},{"type":"object","name":"HelpTool","id":"p1325"}]}},"left":[{"type":"object","name":"LinearAxis","id":"p1308","attributes":{"ticker":{"type":"object","name":"FixedTicker","id":"p1326","attributes":{"ticks":[4.0,5.0,3.0,2.0,0.0,1.0],"minor_ticks":[]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1310"},"major_label_overrides":{"type":"map","entries":[[4.0,"0"],[5.0,"1"],[3.0,"2"],[2.0,"3"],[0.0,"4"],[1.0,"5"]]},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1311"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p1303","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1304","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1305"},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1306"}}}],"center":[{"type":"object","name":"Grid","id":"p1307","attributes":{"axis":{"id":"p1303"}}},{"type":"object","name":"Grid","id":"p1312","attributes":{"visible":false,"dimension":1,"axis":{"id":"p1308"}}}]}}]}}';
                  const render_items = [{"docid":"a8efd529-04ab-4b65-8e02-16adc5362c51","roots":{"p1292":"cdae33ef-91cf-4a8e-959d-10ff0b7012e6"},"root_ids":["p1292"]}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
    function(Bokeh) {
        }
      ];
    
      function run_inline_js() {
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();