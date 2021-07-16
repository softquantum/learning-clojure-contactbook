["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/events/listener.js"],"~:js","goog.provide(\"goog.events.Listener\");\ngoog.require(\"goog.events.ListenableKey\");\ngoog.requireType(\"goog.events.Listenable\");\ngoog.events.Listener = function(listener, proxy, src, type, capture, opt_handler) {\n  if (goog.events.Listener.ENABLE_MONITORING) {\n    this.creationStack = (new Error).stack;\n  }\n  this.listener = listener;\n  this.proxy = proxy;\n  this.src = src;\n  this.type = type;\n  this.capture = !!capture;\n  this.handler = opt_handler;\n  this.key = goog.events.ListenableKey.reserveKey();\n  this.callOnce = false;\n  this.removed = false;\n};\ngoog.events.Listener.ENABLE_MONITORING = goog.define(\"goog.events.Listener.ENABLE_MONITORING\", false);\ngoog.events.Listener.prototype.creationStack;\ngoog.events.Listener.prototype.markAsRemoved = function() {\n  this.removed = true;\n  this.listener = null;\n  this.proxy = null;\n  this.src = null;\n  this.handler = null;\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Listener object.\n * @see ../demos/events.html\n */\n\ngoog.provide('goog.events.Listener');\n\ngoog.require('goog.events.ListenableKey');\ngoog.requireType('goog.events.Listenable');\n\n\n\n/**\n * Simple class that stores information about a listener\n * @param {function(?):?} listener Callback function.\n * @param {Function} proxy Wrapper for the listener that patches the event.\n * @param {EventTarget|goog.events.Listenable} src Source object for\n *     the event.\n * @param {string} type Event type.\n * @param {boolean} capture Whether in capture or bubble phase.\n * @param {Object=} opt_handler Object in whose context to execute the callback.\n * @implements {goog.events.ListenableKey}\n * @constructor\n */\ngoog.events.Listener = function(\n    listener, proxy, src, type, capture, opt_handler) {\n  'use strict';\n  if (goog.events.Listener.ENABLE_MONITORING) {\n    this.creationStack = new Error().stack;\n  }\n\n  /** @override */\n  this.listener = listener;\n\n  /**\n   * A wrapper over the original listener. This is used solely to\n   * handle native browser events (it is used to simulate the capture\n   * phase and to patch the event object).\n   * @type {Function}\n   */\n  this.proxy = proxy;\n\n  /**\n   * Object or node that callback is listening to\n   * @type {EventTarget|goog.events.Listenable}\n   */\n  this.src = src;\n\n  /**\n   * The event type.\n   * @const {string}\n   */\n  this.type = type;\n\n  /**\n   * Whether the listener is being called in the capture or bubble phase\n   * @const {boolean}\n   */\n  this.capture = !!capture;\n\n  /**\n   * Optional object whose context to execute the listener in\n   * @type {Object|undefined}\n   */\n  this.handler = opt_handler;\n\n  /**\n   * The key of the listener.\n   * @const {number}\n   * @override\n   */\n  this.key = goog.events.ListenableKey.reserveKey();\n\n  /**\n   * Whether to remove the listener after it has been called.\n   * @type {boolean}\n   */\n  this.callOnce = false;\n\n  /**\n   * Whether the listener has been removed.\n   * @type {boolean}\n   */\n  this.removed = false;\n};\n\n\n/**\n * @define {boolean} Whether to enable the monitoring of the\n *     goog.events.Listener instances. Switching on the monitoring is only\n *     recommended for debugging because it has a significant impact on\n *     performance and memory usage. If switched off, the monitoring code\n *     compiles down to 0 bytes.\n */\ngoog.events.Listener.ENABLE_MONITORING =\n    goog.define('goog.events.Listener.ENABLE_MONITORING', false);\n\n\n/**\n * If monitoring the goog.events.Listener instances is enabled, stores the\n * creation stack trace of the Disposable instance.\n * @type {string}\n */\ngoog.events.Listener.prototype.creationStack;\n\n\n/**\n * Marks this listener as removed. This also remove references held by\n * this listener object (such as listener and event source).\n */\ngoog.events.Listener.prototype.markAsRemoved = function() {\n  'use strict';\n  this.removed = true;\n  this.listener = null;\n  this.proxy = null;\n  this.src = null;\n  this.handler = null;\n};\n","~:compiled-at",1626454882139,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.events.listener.js\",\n\"lineCount\":27,\n\"mappings\":\"AAWAA,IAAKC,CAAAA,OAAL,CAAa,sBAAb,CAAA;AAEAD,IAAKE,CAAAA,OAAL,CAAa,2BAAb,CAAA;AACAF,IAAKG,CAAAA,WAAL,CAAiB,wBAAjB,CAAA;AAgBAH,IAAKI,CAAAA,MAAOC,CAAAA,QAAZ,GAAuBC,QAAQ,CAC3BC,QAD2B,EACjBC,KADiB,EACVC,GADU,EACLC,IADK,EACCC,OADD,EACUC,WADV,CACuB;AAEpD,MAAIZ,IAAKI,CAAAA,MAAOC,CAAAA,QAASQ,CAAAA,iBAAzB;AACE,QAAKC,CAAAA,aAAL,GAAiCC,CAAZ,IAAIC,KAAQD,EAAAA,KAAjC;AADF;AAKA,MAAKR,CAAAA,QAAL,GAAgBA,QAAhB;AAQA,MAAKC,CAAAA,KAAL,GAAaA,KAAb;AAMA,MAAKC,CAAAA,GAAL,GAAWA,GAAX;AAMA,MAAKC,CAAAA,IAAL,GAAYA,IAAZ;AAMA,MAAKC,CAAAA,OAAL,GAAe,CAAC,CAACA,OAAjB;AAMA,MAAKM,CAAAA,OAAL,GAAeL,WAAf;AAOA,MAAKM,CAAAA,GAAL,GAAWlB,IAAKI,CAAAA,MAAOe,CAAAA,aAAcC,CAAAA,UAA1B,EAAX;AAMA,MAAKC,CAAAA,QAAL,GAAgB,KAAhB;AAMA,MAAKC,CAAAA,OAAL,GAAe,KAAf;AA1DoD,CADtD;AAsEAtB,IAAKI,CAAAA,MAAOC,CAAAA,QAASQ,CAAAA,iBAArB,GACIb,IAAKuB,CAAAA,MAAL,CAAY,wCAAZ,EAAsD,KAAtD,CADJ;AASAvB,IAAKI,CAAAA,MAAOC,CAAAA,QAASmB,CAAAA,SAAUV,CAAAA,aAA/B;AAOAd,IAAKI,CAAAA,MAAOC,CAAAA,QAASmB,CAAAA,SAAUC,CAAAA,aAA/B,GAA+CC,QAAQ,EAAG;AAExD,MAAKJ,CAAAA,OAAL,GAAe,IAAf;AACA,MAAKf,CAAAA,QAAL,GAAgB,IAAhB;AACA,MAAKC,CAAAA,KAAL,GAAa,IAAb;AACA,MAAKC,CAAAA,GAAL,GAAW,IAAX;AACA,MAAKQ,CAAAA,OAAL,GAAe,IAAf;AANwD,CAA1D;;\",\n\"sources\":[\"goog/events/listener.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Listener object.\\n * @see ../demos/events.html\\n */\\n\\ngoog.provide('goog.events.Listener');\\n\\ngoog.require('goog.events.ListenableKey');\\ngoog.requireType('goog.events.Listenable');\\n\\n\\n\\n/**\\n * Simple class that stores information about a listener\\n * @param {function(?):?} listener Callback function.\\n * @param {Function} proxy Wrapper for the listener that patches the event.\\n * @param {EventTarget|goog.events.Listenable} src Source object for\\n *     the event.\\n * @param {string} type Event type.\\n * @param {boolean} capture Whether in capture or bubble phase.\\n * @param {Object=} opt_handler Object in whose context to execute the callback.\\n * @implements {goog.events.ListenableKey}\\n * @constructor\\n */\\ngoog.events.Listener = function(\\n    listener, proxy, src, type, capture, opt_handler) {\\n  'use strict';\\n  if (goog.events.Listener.ENABLE_MONITORING) {\\n    this.creationStack = new Error().stack;\\n  }\\n\\n  /** @override */\\n  this.listener = listener;\\n\\n  /**\\n   * A wrapper over the original listener. This is used solely to\\n   * handle native browser events (it is used to simulate the capture\\n   * phase and to patch the event object).\\n   * @type {Function}\\n   */\\n  this.proxy = proxy;\\n\\n  /**\\n   * Object or node that callback is listening to\\n   * @type {EventTarget|goog.events.Listenable}\\n   */\\n  this.src = src;\\n\\n  /**\\n   * The event type.\\n   * @const {string}\\n   */\\n  this.type = type;\\n\\n  /**\\n   * Whether the listener is being called in the capture or bubble phase\\n   * @const {boolean}\\n   */\\n  this.capture = !!capture;\\n\\n  /**\\n   * Optional object whose context to execute the listener in\\n   * @type {Object|undefined}\\n   */\\n  this.handler = opt_handler;\\n\\n  /**\\n   * The key of the listener.\\n   * @const {number}\\n   * @override\\n   */\\n  this.key = goog.events.ListenableKey.reserveKey();\\n\\n  /**\\n   * Whether to remove the listener after it has been called.\\n   * @type {boolean}\\n   */\\n  this.callOnce = false;\\n\\n  /**\\n   * Whether the listener has been removed.\\n   * @type {boolean}\\n   */\\n  this.removed = false;\\n};\\n\\n\\n/**\\n * @define {boolean} Whether to enable the monitoring of the\\n *     goog.events.Listener instances. Switching on the monitoring is only\\n *     recommended for debugging because it has a significant impact on\\n *     performance and memory usage. If switched off, the monitoring code\\n *     compiles down to 0 bytes.\\n */\\ngoog.events.Listener.ENABLE_MONITORING =\\n    goog.define('goog.events.Listener.ENABLE_MONITORING', false);\\n\\n\\n/**\\n * If monitoring the goog.events.Listener instances is enabled, stores the\\n * creation stack trace of the Disposable instance.\\n * @type {string}\\n */\\ngoog.events.Listener.prototype.creationStack;\\n\\n\\n/**\\n * Marks this listener as removed. This also remove references held by\\n * this listener object (such as listener and event source).\\n */\\ngoog.events.Listener.prototype.markAsRemoved = function() {\\n  'use strict';\\n  this.removed = true;\\n  this.listener = null;\\n  this.proxy = null;\\n  this.src = null;\\n  this.handler = null;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"requireType\",\"events\",\"Listener\",\"goog.events.Listener\",\"listener\",\"proxy\",\"src\",\"type\",\"capture\",\"opt_handler\",\"ENABLE_MONITORING\",\"creationStack\",\"stack\",\"Error\",\"handler\",\"key\",\"ListenableKey\",\"reserveKey\",\"callOnce\",\"removed\",\"define\",\"prototype\",\"markAsRemoved\",\"goog.events.Listener.prototype.markAsRemoved\"]\n}\n"]