(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("83698e09-96b4-411c-88fb-a8a74a047e32");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '83698e09-96b4-411c-88fb-a8a74a047e32' but no matching script tag was found.")
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
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js": "kLr4fYcqcSpbuI95brIH3vnnYCquzzSxHPU6XGQCIkQRGJwhg0StNbj1eegrHs12", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js": "xIGPmVtaOm+z0BqfSOMn4lOR6ciex448GIKG4eE61LsAvmGj48XcMQZtKcE/UXZe", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js": "Dc9u1wF/0zApGIWoBbH77iWEHtdmkuYWG839Uzmv8y8yBLXebjO9ZnERsde5Ln/P", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js": "cT9JaBz7GiRXdENrJLZNSC6eMNF3nh3fa5fTF51Svp+ukxPdwcU5kGXGPBgDCa2j"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{&quot;1264abce-1a1d-43d1-a652-48b42522fb86&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;ticks&quot;:[4.0,5.0,3.0,2.0,0.0,1.0]},&quot;id&quot;:&quot;1578&quot;,&quot;type&quot;:&quot;FixedTicker&quot;},{&quot;attributes&quot;:{&quot;end&quot;:5.5,&quot;start&quot;:-0.5},&quot;id&quot;:&quot;1579&quot;,&quot;type&quot;:&quot;Range1d&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;1519&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;1518&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;1521&quot;}},&quot;id&quot;:&quot;1520&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;fill_color&quot;:{&quot;field&quot;:&quot;subtree&quot;,&quot;transform&quot;:{&quot;id&quot;:&quot;1530&quot;}},&quot;line_color&quot;:{&quot;field&quot;:&quot;subtree&quot;,&quot;transform&quot;:{&quot;id&quot;:&quot;1530&quot;}},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:8}},&quot;id&quot;:&quot;1518&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{&quot;end&quot;:3.478505426185218},&quot;id&quot;:&quot;1580&quot;,&quot;type&quot;:&quot;Range1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1586&quot;,&quot;type&quot;:&quot;NodesOnly&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;height&quot;:[0.0,0.0,0.0,0.0,0.0,0.0,1.0,2.0,2.23606797749979,2.8284271247461903,3.1622776601683795],&quot;index&quot;:[0,1,2,3,4,5,6,7,8,9,10],&quot;subtree&quot;:[&quot;2&quot;,&quot;2&quot;,&quot;2&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;2&quot;,&quot;2&quot;,&quot;0&quot;,&quot;&quot;,&quot;&quot;]},&quot;selected&quot;:{&quot;id&quot;:&quot;1602&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;1601&quot;}},&quot;id&quot;:&quot;1519&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;1523&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;1522&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;1525&quot;}},&quot;id&quot;:&quot;1524&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1595&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;1570&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:{&quot;field&quot;:&quot;subtree&quot;,&quot;transform&quot;:{&quot;id&quot;:&quot;1530&quot;}}},&quot;id&quot;:&quot;1522&quot;,&quot;type&quot;:&quot;MultiLine&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;1564&quot;},{&quot;id&quot;:&quot;1565&quot;},{&quot;id&quot;:&quot;1566&quot;},{&quot;id&quot;:&quot;1567&quot;},{&quot;id&quot;:&quot;1568&quot;},{&quot;id&quot;:&quot;1569&quot;}]},&quot;id&quot;:&quot;1571&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1599&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;1523&quot;}},&quot;id&quot;:&quot;1525&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1597&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1600&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1552&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1601&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1568&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;1556&quot;},&quot;ticker&quot;:null,&quot;visible&quot;:false},&quot;id&quot;:&quot;1559&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1602&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;graph_layout&quot;:{&quot;0&quot;:[4.0,0.0],&quot;1&quot;:[5.0,0.0],&quot;10&quot;:[1.6875,3.1622776601683795],&quot;2&quot;:[3.0,0.0],&quot;3&quot;:[2.0,0.0],&quot;4&quot;:[0.0,0.0],&quot;5&quot;:[1.0,0.0],&quot;6&quot;:[4.5,1.0],&quot;7&quot;:[3.75,2.0],&quot;8&quot;:[0.5,2.23606797749979],&quot;9&quot;:[2.875,2.8284271247461903]}},&quot;id&quot;:&quot;1516&quot;,&quot;type&quot;:&quot;StaticLayoutProvider&quot;},{&quot;attributes&quot;:{&quot;line_dash&quot;:[2,4],&quot;location&quot;:2.5},&quot;id&quot;:&quot;1582&quot;,&quot;type&quot;:&quot;Span&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1585&quot;,&quot;type&quot;:&quot;NodesOnly&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;1570&quot;}},&quot;id&quot;:&quot;1566&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;1595&quot;},&quot;major_label_overrides&quot;:{&quot;0&quot;:&quot;4&quot;,&quot;1&quot;:&quot;5&quot;,&quot;2&quot;:&quot;3&quot;,&quot;3&quot;:&quot;2&quot;,&quot;4&quot;:&quot;0&quot;,&quot;5&quot;:&quot;1&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;1578&quot;}},&quot;id&quot;:&quot;1556&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;end&quot;:[8,9,3,7,4,5,2,6,0,1],&quot;start&quot;:[10,10,9,9,8,8,7,7,6,6],&quot;subtree&quot;:[&quot;&quot;,&quot;&quot;,&quot;&quot;,&quot;&quot;,&quot;0&quot;,&quot;0&quot;,&quot;2&quot;,&quot;2&quot;,&quot;2&quot;,&quot;2&quot;],&quot;xs&quot;:[[1.6875,0.5,0.5],[1.6875,2.875,2.875],[2.875,2.0,2.0],[2.875,3.75,3.75],[0.5,0.0,0.0],[0.5,1.0,1.0],[3.75,3.0,3.0],[3.75,4.5,4.5],[4.5,4.0,4.0],[4.5,5.0,5.0]],&quot;ys&quot;:[[3.1622776601683795,3.1622776601683795,2.23606797749979],[3.1622776601683795,3.1622776601683795,2.8284271247461903],[2.8284271247461903,2.8284271247461903,0.0],[2.8284271247461903,2.8284271247461903,2.0],[2.23606797749979,2.23606797749979,0.0],[2.23606797749979,2.23606797749979,0.0],[2.0,2.0,0.0],[2.0,2.0,1.0],[1.0,1.0,0.0],[1.0,1.0,0.0]]},&quot;selected&quot;:{&quot;id&quot;:&quot;1600&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;1599&quot;}},&quot;id&quot;:&quot;1523&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;1560&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;1563&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1569&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;1556&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;1559&quot;},{&quot;id&quot;:&quot;1563&quot;},{&quot;id&quot;:&quot;1582&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;1560&quot;}],&quot;plot_height&quot;:300,&quot;plot_width&quot;:300,&quot;renderers&quot;:[{&quot;id&quot;:&quot;1517&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;1584&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;1571&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;1579&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;1552&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;1580&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;1554&quot;}},&quot;id&quot;:&quot;1547&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1554&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1561&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;1519&quot;}},&quot;id&quot;:&quot;1521&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1564&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;1584&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;factors&quot;:[&quot;0&quot;,&quot;2&quot;],&quot;palette&quot;:[&quot;#1f77b4&quot;,&quot;#ff7f0e&quot;]},&quot;id&quot;:&quot;1530&quot;,&quot;type&quot;:&quot;CategoricalColorMapper&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1565&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;edge_renderer&quot;:{&quot;id&quot;:&quot;1524&quot;},&quot;inspection_policy&quot;:{&quot;id&quot;:&quot;1585&quot;},&quot;layout_provider&quot;:{&quot;id&quot;:&quot;1516&quot;},&quot;node_renderer&quot;:{&quot;id&quot;:&quot;1520&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;1586&quot;}},&quot;id&quot;:&quot;1517&quot;,&quot;type&quot;:&quot;GraphRenderer&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;1597&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;1561&quot;}},&quot;id&quot;:&quot;1560&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1567&quot;,&quot;type&quot;:&quot;SaveTool&quot;}],&quot;root_ids&quot;:[&quot;1547&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"1264abce-1a1d-43d1-a652-48b42522fb86","root_ids":["1547"],"roots":{"1547":"83698e09-96b4-411c-88fb-a8a74a047e32"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
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
        
        for (var i = 0; i < inline_js.length; i++) {
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