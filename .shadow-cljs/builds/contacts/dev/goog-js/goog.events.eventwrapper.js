["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/events/eventwrapper.js"],"~:js","goog.provide(\"goog.events.EventWrapper\");\ngoog.requireType(\"goog.events.EventHandler\");\ngoog.requireType(\"goog.events.ListenableType\");\ngoog.events.EventWrapper = function() {\n};\ngoog.events.EventWrapper.prototype.listen = function(src, listener, opt_capt, opt_scope, opt_eventHandler) {\n};\ngoog.events.EventWrapper.prototype.unlisten = function(src, listener, opt_capt, opt_scope, opt_eventHandler) {\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Definition of the goog.events.EventWrapper interface.\n */\n\ngoog.provide('goog.events.EventWrapper');\n\ngoog.requireType('goog.events.EventHandler');\ngoog.requireType('goog.events.ListenableType');\n\n\n\n/**\n * Interface for event wrappers.\n * @interface\n */\ngoog.events.EventWrapper = function() {};\n\n\n/**\n * Adds an event listener using the wrapper on a DOM Node or an object that has\n * implemented {@link goog.events.EventTarget}. A listener can only be added\n * once to an object.\n *\n * @param {goog.events.ListenableType} src The node to listen to events on.\n * @param {function(?):?|{handleEvent:function(?):?}|null} listener Callback\n *     method, or an object with a handleEvent function.\n * @param {boolean=} opt_capt Whether to fire in capture phase (defaults to\n *     false).\n * @param {Object=} opt_scope Element in whose scope to call the listener.\n * @param {goog.events.EventHandler=} opt_eventHandler Event handler to add\n *     listener to.\n */\ngoog.events.EventWrapper.prototype.listen = function(\n    src, listener, opt_capt, opt_scope, opt_eventHandler) {};\n\n\n/**\n * Removes an event listener added using goog.events.EventWrapper.listen.\n *\n * @param {goog.events.ListenableType} src The node to remove listener from.\n * @param {function(?):?|{handleEvent:function(?):?}|null} listener Callback\n *     method, or an object with a handleEvent function.\n * @param {boolean=} opt_capt Whether to fire in capture phase (defaults to\n *     false).\n * @param {Object=} opt_scope Element in whose scope to call the listener.\n * @param {goog.events.EventHandler=} opt_eventHandler Event handler to remove\n *     listener from.\n */\ngoog.events.EventWrapper.prototype.unlisten = function(\n    src, listener, opt_capt, opt_scope, opt_eventHandler) {};\n","~:compiled-at",1626454882156,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.events.eventwrapper.js\",\n\"lineCount\":10,\n\"mappings\":\"AAUAA,IAAKC,CAAAA,OAAL,CAAa,0BAAb,CAAA;AAEAD,IAAKE,CAAAA,WAAL,CAAiB,0BAAjB,CAAA;AACAF,IAAKE,CAAAA,WAAL,CAAiB,4BAAjB,CAAA;AAQAF,IAAKG,CAAAA,MAAOC,CAAAA,YAAZ,GAA2BC,QAAQ,EAAG;CAAtC;AAiBAL,IAAKG,CAAAA,MAAOC,CAAAA,YAAaE,CAAAA,SAAUC,CAAAA,MAAnC,GAA4CC,QAAQ,CAChDC,GADgD,EAC3CC,QAD2C,EACjCC,QADiC,EACvBC,SADuB,EACZC,gBADY,CACM;CAD1D;AAgBAb,IAAKG,CAAAA,MAAOC,CAAAA,YAAaE,CAAAA,SAAUQ,CAAAA,QAAnC,GAA8CC,QAAQ,CAClDN,GADkD,EAC7CC,QAD6C,EACnCC,QADmC,EACzBC,SADyB,EACdC,gBADc,CACI;CAD1D;;\",\n\"sources\":[\"goog/events/eventwrapper.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Definition of the goog.events.EventWrapper interface.\\n */\\n\\ngoog.provide('goog.events.EventWrapper');\\n\\ngoog.requireType('goog.events.EventHandler');\\ngoog.requireType('goog.events.ListenableType');\\n\\n\\n\\n/**\\n * Interface for event wrappers.\\n * @interface\\n */\\ngoog.events.EventWrapper = function() {};\\n\\n\\n/**\\n * Adds an event listener using the wrapper on a DOM Node or an object that has\\n * implemented {@link goog.events.EventTarget}. A listener can only be added\\n * once to an object.\\n *\\n * @param {goog.events.ListenableType} src The node to listen to events on.\\n * @param {function(?):?|{handleEvent:function(?):?}|null} listener Callback\\n *     method, or an object with a handleEvent function.\\n * @param {boolean=} opt_capt Whether to fire in capture phase (defaults to\\n *     false).\\n * @param {Object=} opt_scope Element in whose scope to call the listener.\\n * @param {goog.events.EventHandler=} opt_eventHandler Event handler to add\\n *     listener to.\\n */\\ngoog.events.EventWrapper.prototype.listen = function(\\n    src, listener, opt_capt, opt_scope, opt_eventHandler) {};\\n\\n\\n/**\\n * Removes an event listener added using goog.events.EventWrapper.listen.\\n *\\n * @param {goog.events.ListenableType} src The node to remove listener from.\\n * @param {function(?):?|{handleEvent:function(?):?}|null} listener Callback\\n *     method, or an object with a handleEvent function.\\n * @param {boolean=} opt_capt Whether to fire in capture phase (defaults to\\n *     false).\\n * @param {Object=} opt_scope Element in whose scope to call the listener.\\n * @param {goog.events.EventHandler=} opt_eventHandler Event handler to remove\\n *     listener from.\\n */\\ngoog.events.EventWrapper.prototype.unlisten = function(\\n    src, listener, opt_capt, opt_scope, opt_eventHandler) {};\\n\"],\n\"names\":[\"goog\",\"provide\",\"requireType\",\"events\",\"EventWrapper\",\"goog.events.EventWrapper\",\"prototype\",\"listen\",\"goog.events.EventWrapper.prototype.listen\",\"src\",\"listener\",\"opt_capt\",\"opt_scope\",\"opt_eventHandler\",\"unlisten\",\"goog.events.EventWrapper.prototype.unlisten\"]\n}\n"]