["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/labs/useragent/engine.js"],"~:js","goog.provide(\"goog.labs.userAgent.engine\");\ngoog.require(\"goog.array\");\ngoog.require(\"goog.labs.userAgent.util\");\ngoog.require(\"goog.string\");\ngoog.labs.userAgent.engine.isPresto = function() {\n  return goog.labs.userAgent.util.matchUserAgent(\"Presto\");\n};\ngoog.labs.userAgent.engine.isTrident = function() {\n  return goog.labs.userAgent.util.matchUserAgent(\"Trident\") || goog.labs.userAgent.util.matchUserAgent(\"MSIE\");\n};\ngoog.labs.userAgent.engine.isEdge = function() {\n  return goog.labs.userAgent.util.matchUserAgent(\"Edge\");\n};\ngoog.labs.userAgent.engine.isWebKit = function() {\n  return goog.labs.userAgent.util.matchUserAgentIgnoreCase(\"WebKit\") && !goog.labs.userAgent.engine.isEdge();\n};\ngoog.labs.userAgent.engine.isGecko = function() {\n  return goog.labs.userAgent.util.matchUserAgent(\"Gecko\") && !goog.labs.userAgent.engine.isWebKit() && !goog.labs.userAgent.engine.isTrident() && !goog.labs.userAgent.engine.isEdge();\n};\ngoog.labs.userAgent.engine.getVersion = function() {\n  var userAgentString = goog.labs.userAgent.util.getUserAgent();\n  if (userAgentString) {\n    var tuples = goog.labs.userAgent.util.extractVersionTuples(userAgentString);\n    var engineTuple = goog.labs.userAgent.engine.getEngineTuple_(tuples);\n    if (engineTuple) {\n      if (engineTuple[0] == \"Gecko\") {\n        return goog.labs.userAgent.engine.getVersionForKey_(tuples, \"Firefox\");\n      }\n      return engineTuple[1];\n    }\n    var browserTuple = tuples[0];\n    var info;\n    if (browserTuple && (info = browserTuple[2])) {\n      var match = /Trident\\/([^\\s;]+)/.exec(info);\n      if (match) {\n        return match[1];\n      }\n    }\n  }\n  return \"\";\n};\ngoog.labs.userAgent.engine.getEngineTuple_ = function(tuples) {\n  if (!goog.labs.userAgent.engine.isEdge()) {\n    return tuples[1];\n  }\n  for (var i = 0; i < tuples.length; i++) {\n    var tuple = tuples[i];\n    if (tuple[0] == \"Edge\") {\n      return tuple;\n    }\n  }\n};\ngoog.labs.userAgent.engine.isVersionOrHigher = function(version) {\n  return goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(), version) >= 0;\n};\ngoog.labs.userAgent.engine.getVersionForKey_ = function(tuples, key) {\n  var pair = goog.array.find(tuples, function(pair) {\n    return key == pair[0];\n  });\n  return pair && pair[1] || \"\";\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Closure user agent detection.\n * @see http://en.wikipedia.org/wiki/User_agent\n * For more information on browser brand, platform, or device see the other\n * sub-namespaces in goog.labs.userAgent (browser, platform, and device).\n */\n\ngoog.provide('goog.labs.userAgent.engine');\n\ngoog.require('goog.array');\ngoog.require('goog.labs.userAgent.util');\ngoog.require('goog.string');\n\n\n/**\n * @return {boolean} Whether the rendering engine is Presto.\n */\ngoog.labs.userAgent.engine.isPresto = function() {\n  'use strict';\n  return goog.labs.userAgent.util.matchUserAgent('Presto');\n};\n\n\n/**\n * @return {boolean} Whether the rendering engine is Trident.\n */\ngoog.labs.userAgent.engine.isTrident = function() {\n  'use strict';\n  // IE only started including the Trident token in IE8.\n  return goog.labs.userAgent.util.matchUserAgent('Trident') ||\n      goog.labs.userAgent.util.matchUserAgent('MSIE');\n};\n\n\n/**\n * @return {boolean} Whether the rendering engine is EdgeHTML.\n */\ngoog.labs.userAgent.engine.isEdge = function() {\n  'use strict';\n  return goog.labs.userAgent.util.matchUserAgent('Edge');\n};\n\n\n/**\n * @return {boolean} Whether the rendering engine is WebKit. This will return\n * true for Chrome, Blink-based Opera (15+), Edge Chromium and Safari.\n */\ngoog.labs.userAgent.engine.isWebKit = function() {\n  'use strict';\n  return goog.labs.userAgent.util.matchUserAgentIgnoreCase('WebKit') &&\n      !goog.labs.userAgent.engine.isEdge();\n};\n\n\n/**\n * @return {boolean} Whether the rendering engine is Gecko.\n */\ngoog.labs.userAgent.engine.isGecko = function() {\n  'use strict';\n  return goog.labs.userAgent.util.matchUserAgent('Gecko') &&\n      !goog.labs.userAgent.engine.isWebKit() &&\n      !goog.labs.userAgent.engine.isTrident() &&\n      !goog.labs.userAgent.engine.isEdge();\n};\n\n\n/**\n * @return {string} The rendering engine's version or empty string if version\n *     can't be determined.\n */\ngoog.labs.userAgent.engine.getVersion = function() {\n  'use strict';\n  var userAgentString = goog.labs.userAgent.util.getUserAgent();\n  if (userAgentString) {\n    var tuples = goog.labs.userAgent.util.extractVersionTuples(userAgentString);\n\n    var engineTuple = goog.labs.userAgent.engine.getEngineTuple_(tuples);\n    if (engineTuple) {\n      // In Gecko, the version string is either in the browser info or the\n      // Firefox version.  See Gecko user agent string reference:\n      // http://goo.gl/mULqa\n      if (engineTuple[0] == 'Gecko') {\n        return goog.labs.userAgent.engine.getVersionForKey_(tuples, 'Firefox');\n      }\n\n      return engineTuple[1];\n    }\n\n    // MSIE has only one version identifier, and the Trident version is\n    // specified in the parenthetical. IE Edge is covered in the engine tuple\n    // detection.\n    var browserTuple = tuples[0];\n    var info;\n    if (browserTuple && (info = browserTuple[2])) {\n      var match = /Trident\\/([^\\s;]+)/.exec(info);\n      if (match) {\n        return match[1];\n      }\n    }\n  }\n  return '';\n};\n\n\n/**\n * @param {!Array<!Array<string>>} tuples Extracted version tuples.\n * @return {!Array<string>|undefined} The engine tuple or undefined if not\n *     found.\n * @private\n */\ngoog.labs.userAgent.engine.getEngineTuple_ = function(tuples) {\n  'use strict';\n  if (!goog.labs.userAgent.engine.isEdge()) {\n    return tuples[1];\n  }\n  for (var i = 0; i < tuples.length; i++) {\n    var tuple = tuples[i];\n    if (tuple[0] == 'Edge') {\n      return tuple;\n    }\n  }\n};\n\n\n/**\n * @param {string|number} version The version to check.\n * @return {boolean} Whether the rendering engine version is higher or the same\n *     as the given version.\n */\ngoog.labs.userAgent.engine.isVersionOrHigher = function(version) {\n  'use strict';\n  return goog.string.compareVersions(\n             goog.labs.userAgent.engine.getVersion(), version) >= 0;\n};\n\n\n/**\n * @param {!Array<!Array<string>>} tuples Version tuples.\n * @param {string} key The key to look for.\n * @return {string} The version string of the given key, if present.\n *     Otherwise, the empty string.\n * @private\n */\ngoog.labs.userAgent.engine.getVersionForKey_ = function(tuples, key) {\n  'use strict';\n  // TODO(nnaze): Move to util if useful elsewhere.\n\n  var pair = goog.array.find(tuples, function(pair) {\n    'use strict';\n    return key == pair[0];\n  });\n\n  return pair && pair[1] || '';\n};\n","~:compiled-at",1626460665075,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.labs.useragent.engine.js\",\n\"lineCount\":62,\n\"mappings\":\"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\",\n\"sources\":[\"goog/labs/useragent/engine.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Closure user agent detection.\\n * @see http://en.wikipedia.org/wiki/User_agent\\n * For more information on browser brand, platform, or device see the other\\n * sub-namespaces in goog.labs.userAgent (browser, platform, and device).\\n */\\n\\ngoog.provide('goog.labs.userAgent.engine');\\n\\ngoog.require('goog.array');\\ngoog.require('goog.labs.userAgent.util');\\ngoog.require('goog.string');\\n\\n\\n/**\\n * @return {boolean} Whether the rendering engine is Presto.\\n */\\ngoog.labs.userAgent.engine.isPresto = function() {\\n  'use strict';\\n  return goog.labs.userAgent.util.matchUserAgent('Presto');\\n};\\n\\n\\n/**\\n * @return {boolean} Whether the rendering engine is Trident.\\n */\\ngoog.labs.userAgent.engine.isTrident = function() {\\n  'use strict';\\n  // IE only started including the Trident token in IE8.\\n  return goog.labs.userAgent.util.matchUserAgent('Trident') ||\\n      goog.labs.userAgent.util.matchUserAgent('MSIE');\\n};\\n\\n\\n/**\\n * @return {boolean} Whether the rendering engine is EdgeHTML.\\n */\\ngoog.labs.userAgent.engine.isEdge = function() {\\n  'use strict';\\n  return goog.labs.userAgent.util.matchUserAgent('Edge');\\n};\\n\\n\\n/**\\n * @return {boolean} Whether the rendering engine is WebKit. This will return\\n * true for Chrome, Blink-based Opera (15+), Edge Chromium and Safari.\\n */\\ngoog.labs.userAgent.engine.isWebKit = function() {\\n  'use strict';\\n  return goog.labs.userAgent.util.matchUserAgentIgnoreCase('WebKit') &&\\n      !goog.labs.userAgent.engine.isEdge();\\n};\\n\\n\\n/**\\n * @return {boolean} Whether the rendering engine is Gecko.\\n */\\ngoog.labs.userAgent.engine.isGecko = function() {\\n  'use strict';\\n  return goog.labs.userAgent.util.matchUserAgent('Gecko') &&\\n      !goog.labs.userAgent.engine.isWebKit() &&\\n      !goog.labs.userAgent.engine.isTrident() &&\\n      !goog.labs.userAgent.engine.isEdge();\\n};\\n\\n\\n/**\\n * @return {string} The rendering engine's version or empty string if version\\n *     can't be determined.\\n */\\ngoog.labs.userAgent.engine.getVersion = function() {\\n  'use strict';\\n  var userAgentString = goog.labs.userAgent.util.getUserAgent();\\n  if (userAgentString) {\\n    var tuples = goog.labs.userAgent.util.extractVersionTuples(userAgentString);\\n\\n    var engineTuple = goog.labs.userAgent.engine.getEngineTuple_(tuples);\\n    if (engineTuple) {\\n      // In Gecko, the version string is either in the browser info or the\\n      // Firefox version.  See Gecko user agent string reference:\\n      // http://goo.gl/mULqa\\n      if (engineTuple[0] == 'Gecko') {\\n        return goog.labs.userAgent.engine.getVersionForKey_(tuples, 'Firefox');\\n      }\\n\\n      return engineTuple[1];\\n    }\\n\\n    // MSIE has only one version identifier, and the Trident version is\\n    // specified in the parenthetical. IE Edge is covered in the engine tuple\\n    // detection.\\n    var browserTuple = tuples[0];\\n    var info;\\n    if (browserTuple && (info = browserTuple[2])) {\\n      var match = /Trident\\\\/([^\\\\s;]+)/.exec(info);\\n      if (match) {\\n        return match[1];\\n      }\\n    }\\n  }\\n  return '';\\n};\\n\\n\\n/**\\n * @param {!Array<!Array<string>>} tuples Extracted version tuples.\\n * @return {!Array<string>|undefined} The engine tuple or undefined if not\\n *     found.\\n * @private\\n */\\ngoog.labs.userAgent.engine.getEngineTuple_ = function(tuples) {\\n  'use strict';\\n  if (!goog.labs.userAgent.engine.isEdge()) {\\n    return tuples[1];\\n  }\\n  for (var i = 0; i < tuples.length; i++) {\\n    var tuple = tuples[i];\\n    if (tuple[0] == 'Edge') {\\n      return tuple;\\n    }\\n  }\\n};\\n\\n\\n/**\\n * @param {string|number} version The version to check.\\n * @return {boolean} Whether the rendering engine version is higher or the same\\n *     as the given version.\\n */\\ngoog.labs.userAgent.engine.isVersionOrHigher = function(version) {\\n  'use strict';\\n  return goog.string.compareVersions(\\n             goog.labs.userAgent.engine.getVersion(), version) >= 0;\\n};\\n\\n\\n/**\\n * @param {!Array<!Array<string>>} tuples Version tuples.\\n * @param {string} key The key to look for.\\n * @return {string} The version string of the given key, if present.\\n *     Otherwise, the empty string.\\n * @private\\n */\\ngoog.labs.userAgent.engine.getVersionForKey_ = function(tuples, key) {\\n  'use strict';\\n  // TODO(nnaze): Move to util if useful elsewhere.\\n\\n  var pair = goog.array.find(tuples, function(pair) {\\n    'use strict';\\n    return key == pair[0];\\n  });\\n\\n  return pair && pair[1] || '';\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"labs\",\"userAgent\",\"engine\",\"isPresto\",\"goog.labs.userAgent.engine.isPresto\",\"util\",\"matchUserAgent\",\"isTrident\",\"goog.labs.userAgent.engine.isTrident\",\"isEdge\",\"goog.labs.userAgent.engine.isEdge\",\"isWebKit\",\"goog.labs.userAgent.engine.isWebKit\",\"matchUserAgentIgnoreCase\",\"isGecko\",\"goog.labs.userAgent.engine.isGecko\",\"getVersion\",\"goog.labs.userAgent.engine.getVersion\",\"userAgentString\",\"getUserAgent\",\"tuples\",\"extractVersionTuples\",\"engineTuple\",\"getEngineTuple_\",\"getVersionForKey_\",\"browserTuple\",\"info\",\"match\",\"exec\",\"goog.labs.userAgent.engine.getEngineTuple_\",\"i\",\"length\",\"tuple\",\"isVersionOrHigher\",\"goog.labs.userAgent.engine.isVersionOrHigher\",\"version\",\"string\",\"compareVersions\",\"goog.labs.userAgent.engine.getVersionForKey_\",\"key\",\"pair\",\"array\",\"find\"]\n}\n"]