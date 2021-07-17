["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/string/internal.js"],"~:js","goog.provide(\"goog.string.internal\");\ngoog.string.internal.startsWith = function(str, prefix) {\n  return str.lastIndexOf(prefix, 0) == 0;\n};\ngoog.string.internal.endsWith = function(str, suffix) {\n  const l = str.length - suffix.length;\n  return l >= 0 && str.indexOf(suffix, l) == l;\n};\ngoog.string.internal.caseInsensitiveStartsWith = function(str, prefix) {\n  return goog.string.internal.caseInsensitiveCompare(prefix, str.substr(0, prefix.length)) == 0;\n};\ngoog.string.internal.caseInsensitiveEndsWith = function(str, suffix) {\n  return goog.string.internal.caseInsensitiveCompare(suffix, str.substr(str.length - suffix.length, suffix.length)) == 0;\n};\ngoog.string.internal.caseInsensitiveEquals = function(str1, str2) {\n  return str1.toLowerCase() == str2.toLowerCase();\n};\ngoog.string.internal.isEmptyOrWhitespace = function(str) {\n  return /^[\\s\\xa0]*$/.test(str);\n};\ngoog.string.internal.trim = goog.TRUSTED_SITE && String.prototype.trim ? function(str) {\n  return str.trim();\n} : function(str) {\n  return /^[\\s\\xa0]*([\\s\\S]*?)[\\s\\xa0]*$/.exec(str)[1];\n};\ngoog.string.internal.caseInsensitiveCompare = function(str1, str2) {\n  const test1 = String(str1).toLowerCase();\n  const test2 = String(str2).toLowerCase();\n  if (test1 < test2) {\n    return -1;\n  } else {\n    if (test1 == test2) {\n      return 0;\n    } else {\n      return 1;\n    }\n  }\n};\ngoog.string.internal.newLineToBr = function(str, opt_xml) {\n  return str.replace(/(\\r\\n|\\r|\\n)/g, opt_xml ? \"\\x3cbr /\\x3e\" : \"\\x3cbr\\x3e\");\n};\ngoog.string.internal.htmlEscape = function(str, opt_isLikelyToContainHtmlChars) {\n  if (opt_isLikelyToContainHtmlChars) {\n    str = str.replace(goog.string.internal.AMP_RE_, \"\\x26amp;\").replace(goog.string.internal.LT_RE_, \"\\x26lt;\").replace(goog.string.internal.GT_RE_, \"\\x26gt;\").replace(goog.string.internal.QUOT_RE_, \"\\x26quot;\").replace(goog.string.internal.SINGLE_QUOTE_RE_, \"\\x26#39;\").replace(goog.string.internal.NULL_RE_, \"\\x26#0;\");\n    return str;\n  } else {\n    if (!goog.string.internal.ALL_RE_.test(str)) {\n      return str;\n    }\n    if (str.indexOf(\"\\x26\") != -1) {\n      str = str.replace(goog.string.internal.AMP_RE_, \"\\x26amp;\");\n    }\n    if (str.indexOf(\"\\x3c\") != -1) {\n      str = str.replace(goog.string.internal.LT_RE_, \"\\x26lt;\");\n    }\n    if (str.indexOf(\"\\x3e\") != -1) {\n      str = str.replace(goog.string.internal.GT_RE_, \"\\x26gt;\");\n    }\n    if (str.indexOf('\"') != -1) {\n      str = str.replace(goog.string.internal.QUOT_RE_, \"\\x26quot;\");\n    }\n    if (str.indexOf(\"'\") != -1) {\n      str = str.replace(goog.string.internal.SINGLE_QUOTE_RE_, \"\\x26#39;\");\n    }\n    if (str.indexOf(\"\\x00\") != -1) {\n      str = str.replace(goog.string.internal.NULL_RE_, \"\\x26#0;\");\n    }\n    return str;\n  }\n};\ngoog.string.internal.AMP_RE_ = /&/g;\ngoog.string.internal.LT_RE_ = /</g;\ngoog.string.internal.GT_RE_ = />/g;\ngoog.string.internal.QUOT_RE_ = /\"/g;\ngoog.string.internal.SINGLE_QUOTE_RE_ = /'/g;\ngoog.string.internal.NULL_RE_ = /\\x00/g;\ngoog.string.internal.ALL_RE_ = /[\\x00&<>\"']/;\ngoog.string.internal.whitespaceEscape = function(str, opt_xml) {\n  return goog.string.internal.newLineToBr(str.replace(/  /g, \" \\x26#160;\"), opt_xml);\n};\ngoog.string.internal.contains = function(str, subString) {\n  return str.indexOf(subString) != -1;\n};\ngoog.string.internal.caseInsensitiveContains = function(str, subString) {\n  return goog.string.internal.contains(str.toLowerCase(), subString.toLowerCase());\n};\ngoog.string.internal.compareVersions = function(version1, version2) {\n  let order = 0;\n  const v1Subs = goog.string.internal.trim(String(version1)).split(\".\");\n  const v2Subs = goog.string.internal.trim(String(version2)).split(\".\");\n  const subCount = Math.max(v1Subs.length, v2Subs.length);\n  for (let subIdx = 0; order == 0 && subIdx < subCount; subIdx++) {\n    let v1Sub = v1Subs[subIdx] || \"\";\n    let v2Sub = v2Subs[subIdx] || \"\";\n    do {\n      const v1Comp = /(\\d*)(\\D*)(.*)/.exec(v1Sub) || [\"\", \"\", \"\", \"\"];\n      const v2Comp = /(\\d*)(\\D*)(.*)/.exec(v2Sub) || [\"\", \"\", \"\", \"\"];\n      if (v1Comp[0].length == 0 && v2Comp[0].length == 0) {\n        break;\n      }\n      const v1CompNum = v1Comp[1].length == 0 ? 0 : parseInt(v1Comp[1], 10);\n      const v2CompNum = v2Comp[1].length == 0 ? 0 : parseInt(v2Comp[1], 10);\n      order = goog.string.internal.compareElements_(v1CompNum, v2CompNum) || goog.string.internal.compareElements_(v1Comp[2].length == 0, v2Comp[2].length == 0) || goog.string.internal.compareElements_(v1Comp[2], v2Comp[2]);\n      v1Sub = v1Comp[3];\n      v2Sub = v2Comp[3];\n    } while (order == 0);\n  }\n  return order;\n};\ngoog.string.internal.compareElements_ = function(left, right) {\n  if (left < right) {\n    return -1;\n  } else {\n    if (left > right) {\n      return 1;\n    }\n  }\n  return 0;\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview String functions called from Closure packages that couldn't\n * depend on each other. Outside Closure, use goog.string function which\n * delegate to these.\n */\n\n\ngoog.provide('goog.string.internal');\n\n\n/**\n * Fast prefix-checker.\n * @param {string} str The string to check.\n * @param {string} prefix A string to look for at the start of `str`.\n * @return {boolean} True if `str` begins with `prefix`.\n * @see goog.string.startsWith\n */\ngoog.string.internal.startsWith = function(str, prefix) {\n  'use strict';\n  return str.lastIndexOf(prefix, 0) == 0;\n};\n\n\n/**\n * Fast suffix-checker.\n * @param {string} str The string to check.\n * @param {string} suffix A string to look for at the end of `str`.\n * @return {boolean} True if `str` ends with `suffix`.\n * @see goog.string.endsWith\n */\ngoog.string.internal.endsWith = function(str, suffix) {\n  'use strict';\n  const l = str.length - suffix.length;\n  return l >= 0 && str.indexOf(suffix, l) == l;\n};\n\n\n/**\n * Case-insensitive prefix-checker.\n * @param {string} str The string to check.\n * @param {string} prefix  A string to look for at the end of `str`.\n * @return {boolean} True if `str` begins with `prefix` (ignoring\n *     case).\n * @see goog.string.caseInsensitiveStartsWith\n */\ngoog.string.internal.caseInsensitiveStartsWith = function(str, prefix) {\n  'use strict';\n  return goog.string.internal.caseInsensitiveCompare(\n             prefix, str.substr(0, prefix.length)) == 0;\n};\n\n\n/**\n * Case-insensitive suffix-checker.\n * @param {string} str The string to check.\n * @param {string} suffix A string to look for at the end of `str`.\n * @return {boolean} True if `str` ends with `suffix` (ignoring\n *     case).\n * @see goog.string.caseInsensitiveEndsWith\n */\ngoog.string.internal.caseInsensitiveEndsWith = function(str, suffix) {\n  'use strict';\n  return (\n      goog.string.internal.caseInsensitiveCompare(\n          suffix, str.substr(str.length - suffix.length, suffix.length)) == 0);\n};\n\n\n/**\n * Case-insensitive equality checker.\n * @param {string} str1 First string to check.\n * @param {string} str2 Second string to check.\n * @return {boolean} True if `str1` and `str2` are the same string,\n *     ignoring case.\n * @see goog.string.caseInsensitiveEquals\n */\ngoog.string.internal.caseInsensitiveEquals = function(str1, str2) {\n  'use strict';\n  return str1.toLowerCase() == str2.toLowerCase();\n};\n\n\n/**\n * Checks if a string is empty or contains only whitespaces.\n * @param {string} str The string to check.\n * @return {boolean} Whether `str` is empty or whitespace only.\n * @see goog.string.isEmptyOrWhitespace\n */\ngoog.string.internal.isEmptyOrWhitespace = function(str) {\n  'use strict';\n  // testing length == 0 first is actually slower in all browsers (about the\n  // same in Opera).\n  // Since IE doesn't include non-breaking-space (0xa0) in their \\s character\n  // class (as required by section 7.2 of the ECMAScript spec), we explicitly\n  // include it in the regexp to enforce consistent cross-browser behavior.\n  return /^[\\s\\xa0]*$/.test(str);\n};\n\n\n/**\n * Trims white spaces to the left and right of a string.\n * @param {string} str The string to trim.\n * @return {string} A trimmed copy of `str`.\n */\ngoog.string.internal.trim =\n    (goog.TRUSTED_SITE && String.prototype.trim) ? function(str) {\n      'use strict';\n      return str.trim();\n    } : function(str) {\n      'use strict';\n      // Since IE doesn't include non-breaking-space (0xa0) in their \\s\n      // character class (as required by section 7.2 of the ECMAScript spec),\n      // we explicitly include it in the regexp to enforce consistent\n      // cross-browser behavior.\n      // NOTE: We don't use String#replace because it might have side effects\n      // causing this function to not compile to 0 bytes.\n      return /^[\\s\\xa0]*([\\s\\S]*?)[\\s\\xa0]*$/.exec(str)[1];\n    };\n\n\n/**\n * A string comparator that ignores case.\n * -1 = str1 less than str2\n *  0 = str1 equals str2\n *  1 = str1 greater than str2\n *\n * @param {string} str1 The string to compare.\n * @param {string} str2 The string to compare `str1` to.\n * @return {number} The comparator result, as described above.\n * @see goog.string.caseInsensitiveCompare\n */\ngoog.string.internal.caseInsensitiveCompare = function(str1, str2) {\n  'use strict';\n  const test1 = String(str1).toLowerCase();\n  const test2 = String(str2).toLowerCase();\n\n  if (test1 < test2) {\n    return -1;\n  } else if (test1 == test2) {\n    return 0;\n  } else {\n    return 1;\n  }\n};\n\n\n/**\n * Converts \\n to <br>s or <br />s.\n * @param {string} str The string in which to convert newlines.\n * @param {boolean=} opt_xml Whether to use XML compatible tags.\n * @return {string} A copy of `str` with converted newlines.\n * @see goog.string.newLineToBr\n */\ngoog.string.internal.newLineToBr = function(str, opt_xml) {\n  'use strict';\n  return str.replace(/(\\r\\n|\\r|\\n)/g, opt_xml ? '<br />' : '<br>');\n};\n\n\n/**\n * Escapes double quote '\"' and single quote '\\'' characters in addition to\n * '&', '<', and '>' so that a string can be included in an HTML tag attribute\n * value within double or single quotes.\n * @param {string} str string to be escaped.\n * @param {boolean=} opt_isLikelyToContainHtmlChars\n * @return {string} An escaped copy of `str`.\n * @see goog.string.htmlEscape\n */\ngoog.string.internal.htmlEscape = function(\n    str, opt_isLikelyToContainHtmlChars) {\n  'use strict';\n  if (opt_isLikelyToContainHtmlChars) {\n    str = str.replace(goog.string.internal.AMP_RE_, '&amp;')\n              .replace(goog.string.internal.LT_RE_, '&lt;')\n              .replace(goog.string.internal.GT_RE_, '&gt;')\n              .replace(goog.string.internal.QUOT_RE_, '&quot;')\n              .replace(goog.string.internal.SINGLE_QUOTE_RE_, '&#39;')\n              .replace(goog.string.internal.NULL_RE_, '&#0;');\n    return str;\n\n  } else {\n    // quick test helps in the case when there are no chars to replace, in\n    // worst case this makes barely a difference to the time taken\n    if (!goog.string.internal.ALL_RE_.test(str)) return str;\n\n    // str.indexOf is faster than regex.test in this case\n    if (str.indexOf('&') != -1) {\n      str = str.replace(goog.string.internal.AMP_RE_, '&amp;');\n    }\n    if (str.indexOf('<') != -1) {\n      str = str.replace(goog.string.internal.LT_RE_, '&lt;');\n    }\n    if (str.indexOf('>') != -1) {\n      str = str.replace(goog.string.internal.GT_RE_, '&gt;');\n    }\n    if (str.indexOf('\"') != -1) {\n      str = str.replace(goog.string.internal.QUOT_RE_, '&quot;');\n    }\n    if (str.indexOf('\\'') != -1) {\n      str = str.replace(goog.string.internal.SINGLE_QUOTE_RE_, '&#39;');\n    }\n    if (str.indexOf('\\x00') != -1) {\n      str = str.replace(goog.string.internal.NULL_RE_, '&#0;');\n    }\n    return str;\n  }\n};\n\n\n/**\n * Regular expression that matches an ampersand, for use in escaping.\n * @const {!RegExp}\n * @private\n */\ngoog.string.internal.AMP_RE_ = /&/g;\n\n\n/**\n * Regular expression that matches a less than sign, for use in escaping.\n * @const {!RegExp}\n * @private\n */\ngoog.string.internal.LT_RE_ = /</g;\n\n\n/**\n * Regular expression that matches a greater than sign, for use in escaping.\n * @const {!RegExp}\n * @private\n */\ngoog.string.internal.GT_RE_ = />/g;\n\n\n/**\n * Regular expression that matches a double quote, for use in escaping.\n * @const {!RegExp}\n * @private\n */\ngoog.string.internal.QUOT_RE_ = /\"/g;\n\n\n/**\n * Regular expression that matches a single quote, for use in escaping.\n * @const {!RegExp}\n * @private\n */\ngoog.string.internal.SINGLE_QUOTE_RE_ = /'/g;\n\n\n/**\n * Regular expression that matches null character, for use in escaping.\n * @const {!RegExp}\n * @private\n */\ngoog.string.internal.NULL_RE_ = /\\x00/g;\n\n\n/**\n * Regular expression that matches any character that needs to be escaped.\n * @const {!RegExp}\n * @private\n */\ngoog.string.internal.ALL_RE_ = /[\\x00&<>\"']/;\n\n\n/**\n * Do escaping of whitespace to preserve spatial formatting. We use character\n * entity #160 to make it safer for xml.\n * @param {string} str The string in which to escape whitespace.\n * @param {boolean=} opt_xml Whether to use XML compatible tags.\n * @return {string} An escaped copy of `str`.\n * @see goog.string.whitespaceEscape\n */\ngoog.string.internal.whitespaceEscape = function(str, opt_xml) {\n  'use strict';\n  // This doesn't use goog.string.preserveSpaces for backwards compatibility.\n  return goog.string.internal.newLineToBr(\n      str.replace(/  /g, ' &#160;'), opt_xml);\n};\n\n\n/**\n * Determines whether a string contains a substring.\n * @param {string} str The string to search.\n * @param {string} subString The substring to search for.\n * @return {boolean} Whether `str` contains `subString`.\n * @see goog.string.contains\n */\ngoog.string.internal.contains = function(str, subString) {\n  'use strict';\n  return str.indexOf(subString) != -1;\n};\n\n\n/**\n * Determines whether a string contains a substring, ignoring case.\n * @param {string} str The string to search.\n * @param {string} subString The substring to search for.\n * @return {boolean} Whether `str` contains `subString`.\n * @see goog.string.caseInsensitiveContains\n */\ngoog.string.internal.caseInsensitiveContains = function(str, subString) {\n  'use strict';\n  return goog.string.internal.contains(\n      str.toLowerCase(), subString.toLowerCase());\n};\n\n\n/**\n * Compares two version numbers.\n *\n * @param {string|number} version1 Version of first item.\n * @param {string|number} version2 Version of second item.\n *\n * @return {number}  1 if `version1` is higher.\n *                   0 if arguments are equal.\n *                  -1 if `version2` is higher.\n * @see goog.string.compareVersions\n */\ngoog.string.internal.compareVersions = function(version1, version2) {\n  'use strict';\n  let order = 0;\n  // Trim leading and trailing whitespace and split the versions into\n  // subversions.\n  const v1Subs = goog.string.internal.trim(String(version1)).split('.');\n  const v2Subs = goog.string.internal.trim(String(version2)).split('.');\n  const subCount = Math.max(v1Subs.length, v2Subs.length);\n\n  // Iterate over the subversions, as long as they appear to be equivalent.\n  for (let subIdx = 0; order == 0 && subIdx < subCount; subIdx++) {\n    let v1Sub = v1Subs[subIdx] || '';\n    let v2Sub = v2Subs[subIdx] || '';\n\n    do {\n      // Split the subversions into pairs of numbers and qualifiers (like 'b').\n      // Two different RegExp objects are use to make it clear the code\n      // is side-effect free\n      const v1Comp = /(\\d*)(\\D*)(.*)/.exec(v1Sub) || ['', '', '', ''];\n      const v2Comp = /(\\d*)(\\D*)(.*)/.exec(v2Sub) || ['', '', '', ''];\n      // Break if there are no more matches.\n      if (v1Comp[0].length == 0 && v2Comp[0].length == 0) {\n        break;\n      }\n\n      // Parse the numeric part of the subversion. A missing number is\n      // equivalent to 0.\n      const v1CompNum = v1Comp[1].length == 0 ? 0 : parseInt(v1Comp[1], 10);\n      const v2CompNum = v2Comp[1].length == 0 ? 0 : parseInt(v2Comp[1], 10);\n\n      // Compare the subversion components. The number has the highest\n      // precedence. Next, if the numbers are equal, a subversion without any\n      // qualifier is always higher than a subversion with any qualifier. Next,\n      // the qualifiers are compared as strings.\n      order = goog.string.internal.compareElements_(v1CompNum, v2CompNum) ||\n          goog.string.internal.compareElements_(\n              v1Comp[2].length == 0, v2Comp[2].length == 0) ||\n          goog.string.internal.compareElements_(v1Comp[2], v2Comp[2]);\n      // Stop as soon as an inequality is discovered.\n\n      v1Sub = v1Comp[3];\n      v2Sub = v2Comp[3];\n    } while (order == 0);\n  }\n\n  return order;\n};\n\n\n/**\n * Compares elements of a version number.\n *\n * @param {string|number|boolean} left An element from a version number.\n * @param {string|number|boolean} right An element from a version number.\n *\n * @return {number}  1 if `left` is higher.\n *                   0 if arguments are equal.\n *                  -1 if `right` is higher.\n * @private\n */\ngoog.string.internal.compareElements_ = function(left, right) {\n  'use strict';\n  if (left < right) {\n    return -1;\n  } else if (left > right) {\n    return 1;\n  }\n  return 0;\n};\n","~:compiled-at",1626460743250,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.string.internal.js\",\n\"lineCount\":120,\n\"mappings\":\"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\",\n\"sources\":[\"goog/string/internal.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview String functions called from Closure packages that couldn't\\n * depend on each other. Outside Closure, use goog.string function which\\n * delegate to these.\\n */\\n\\n\\ngoog.provide('goog.string.internal');\\n\\n\\n/**\\n * Fast prefix-checker.\\n * @param {string} str The string to check.\\n * @param {string} prefix A string to look for at the start of `str`.\\n * @return {boolean} True if `str` begins with `prefix`.\\n * @see goog.string.startsWith\\n */\\ngoog.string.internal.startsWith = function(str, prefix) {\\n  'use strict';\\n  return str.lastIndexOf(prefix, 0) == 0;\\n};\\n\\n\\n/**\\n * Fast suffix-checker.\\n * @param {string} str The string to check.\\n * @param {string} suffix A string to look for at the end of `str`.\\n * @return {boolean} True if `str` ends with `suffix`.\\n * @see goog.string.endsWith\\n */\\ngoog.string.internal.endsWith = function(str, suffix) {\\n  'use strict';\\n  const l = str.length - suffix.length;\\n  return l >= 0 && str.indexOf(suffix, l) == l;\\n};\\n\\n\\n/**\\n * Case-insensitive prefix-checker.\\n * @param {string} str The string to check.\\n * @param {string} prefix  A string to look for at the end of `str`.\\n * @return {boolean} True if `str` begins with `prefix` (ignoring\\n *     case).\\n * @see goog.string.caseInsensitiveStartsWith\\n */\\ngoog.string.internal.caseInsensitiveStartsWith = function(str, prefix) {\\n  'use strict';\\n  return goog.string.internal.caseInsensitiveCompare(\\n             prefix, str.substr(0, prefix.length)) == 0;\\n};\\n\\n\\n/**\\n * Case-insensitive suffix-checker.\\n * @param {string} str The string to check.\\n * @param {string} suffix A string to look for at the end of `str`.\\n * @return {boolean} True if `str` ends with `suffix` (ignoring\\n *     case).\\n * @see goog.string.caseInsensitiveEndsWith\\n */\\ngoog.string.internal.caseInsensitiveEndsWith = function(str, suffix) {\\n  'use strict';\\n  return (\\n      goog.string.internal.caseInsensitiveCompare(\\n          suffix, str.substr(str.length - suffix.length, suffix.length)) == 0);\\n};\\n\\n\\n/**\\n * Case-insensitive equality checker.\\n * @param {string} str1 First string to check.\\n * @param {string} str2 Second string to check.\\n * @return {boolean} True if `str1` and `str2` are the same string,\\n *     ignoring case.\\n * @see goog.string.caseInsensitiveEquals\\n */\\ngoog.string.internal.caseInsensitiveEquals = function(str1, str2) {\\n  'use strict';\\n  return str1.toLowerCase() == str2.toLowerCase();\\n};\\n\\n\\n/**\\n * Checks if a string is empty or contains only whitespaces.\\n * @param {string} str The string to check.\\n * @return {boolean} Whether `str` is empty or whitespace only.\\n * @see goog.string.isEmptyOrWhitespace\\n */\\ngoog.string.internal.isEmptyOrWhitespace = function(str) {\\n  'use strict';\\n  // testing length == 0 first is actually slower in all browsers (about the\\n  // same in Opera).\\n  // Since IE doesn't include non-breaking-space (0xa0) in their \\\\s character\\n  // class (as required by section 7.2 of the ECMAScript spec), we explicitly\\n  // include it in the regexp to enforce consistent cross-browser behavior.\\n  return /^[\\\\s\\\\xa0]*$/.test(str);\\n};\\n\\n\\n/**\\n * Trims white spaces to the left and right of a string.\\n * @param {string} str The string to trim.\\n * @return {string} A trimmed copy of `str`.\\n */\\ngoog.string.internal.trim =\\n    (goog.TRUSTED_SITE && String.prototype.trim) ? function(str) {\\n      'use strict';\\n      return str.trim();\\n    } : function(str) {\\n      'use strict';\\n      // Since IE doesn't include non-breaking-space (0xa0) in their \\\\s\\n      // character class (as required by section 7.2 of the ECMAScript spec),\\n      // we explicitly include it in the regexp to enforce consistent\\n      // cross-browser behavior.\\n      // NOTE: We don't use String#replace because it might have side effects\\n      // causing this function to not compile to 0 bytes.\\n      return /^[\\\\s\\\\xa0]*([\\\\s\\\\S]*?)[\\\\s\\\\xa0]*$/.exec(str)[1];\\n    };\\n\\n\\n/**\\n * A string comparator that ignores case.\\n * -1 = str1 less than str2\\n *  0 = str1 equals str2\\n *  1 = str1 greater than str2\\n *\\n * @param {string} str1 The string to compare.\\n * @param {string} str2 The string to compare `str1` to.\\n * @return {number} The comparator result, as described above.\\n * @see goog.string.caseInsensitiveCompare\\n */\\ngoog.string.internal.caseInsensitiveCompare = function(str1, str2) {\\n  'use strict';\\n  const test1 = String(str1).toLowerCase();\\n  const test2 = String(str2).toLowerCase();\\n\\n  if (test1 < test2) {\\n    return -1;\\n  } else if (test1 == test2) {\\n    return 0;\\n  } else {\\n    return 1;\\n  }\\n};\\n\\n\\n/**\\n * Converts \\\\n to <br>s or <br />s.\\n * @param {string} str The string in which to convert newlines.\\n * @param {boolean=} opt_xml Whether to use XML compatible tags.\\n * @return {string} A copy of `str` with converted newlines.\\n * @see goog.string.newLineToBr\\n */\\ngoog.string.internal.newLineToBr = function(str, opt_xml) {\\n  'use strict';\\n  return str.replace(/(\\\\r\\\\n|\\\\r|\\\\n)/g, opt_xml ? '<br />' : '<br>');\\n};\\n\\n\\n/**\\n * Escapes double quote '\\\"' and single quote '\\\\'' characters in addition to\\n * '&', '<', and '>' so that a string can be included in an HTML tag attribute\\n * value within double or single quotes.\\n * @param {string} str string to be escaped.\\n * @param {boolean=} opt_isLikelyToContainHtmlChars\\n * @return {string} An escaped copy of `str`.\\n * @see goog.string.htmlEscape\\n */\\ngoog.string.internal.htmlEscape = function(\\n    str, opt_isLikelyToContainHtmlChars) {\\n  'use strict';\\n  if (opt_isLikelyToContainHtmlChars) {\\n    str = str.replace(goog.string.internal.AMP_RE_, '&amp;')\\n              .replace(goog.string.internal.LT_RE_, '&lt;')\\n              .replace(goog.string.internal.GT_RE_, '&gt;')\\n              .replace(goog.string.internal.QUOT_RE_, '&quot;')\\n              .replace(goog.string.internal.SINGLE_QUOTE_RE_, '&#39;')\\n              .replace(goog.string.internal.NULL_RE_, '&#0;');\\n    return str;\\n\\n  } else {\\n    // quick test helps in the case when there are no chars to replace, in\\n    // worst case this makes barely a difference to the time taken\\n    if (!goog.string.internal.ALL_RE_.test(str)) return str;\\n\\n    // str.indexOf is faster than regex.test in this case\\n    if (str.indexOf('&') != -1) {\\n      str = str.replace(goog.string.internal.AMP_RE_, '&amp;');\\n    }\\n    if (str.indexOf('<') != -1) {\\n      str = str.replace(goog.string.internal.LT_RE_, '&lt;');\\n    }\\n    if (str.indexOf('>') != -1) {\\n      str = str.replace(goog.string.internal.GT_RE_, '&gt;');\\n    }\\n    if (str.indexOf('\\\"') != -1) {\\n      str = str.replace(goog.string.internal.QUOT_RE_, '&quot;');\\n    }\\n    if (str.indexOf('\\\\'') != -1) {\\n      str = str.replace(goog.string.internal.SINGLE_QUOTE_RE_, '&#39;');\\n    }\\n    if (str.indexOf('\\\\x00') != -1) {\\n      str = str.replace(goog.string.internal.NULL_RE_, '&#0;');\\n    }\\n    return str;\\n  }\\n};\\n\\n\\n/**\\n * Regular expression that matches an ampersand, for use in escaping.\\n * @const {!RegExp}\\n * @private\\n */\\ngoog.string.internal.AMP_RE_ = /&/g;\\n\\n\\n/**\\n * Regular expression that matches a less than sign, for use in escaping.\\n * @const {!RegExp}\\n * @private\\n */\\ngoog.string.internal.LT_RE_ = /</g;\\n\\n\\n/**\\n * Regular expression that matches a greater than sign, for use in escaping.\\n * @const {!RegExp}\\n * @private\\n */\\ngoog.string.internal.GT_RE_ = />/g;\\n\\n\\n/**\\n * Regular expression that matches a double quote, for use in escaping.\\n * @const {!RegExp}\\n * @private\\n */\\ngoog.string.internal.QUOT_RE_ = /\\\"/g;\\n\\n\\n/**\\n * Regular expression that matches a single quote, for use in escaping.\\n * @const {!RegExp}\\n * @private\\n */\\ngoog.string.internal.SINGLE_QUOTE_RE_ = /'/g;\\n\\n\\n/**\\n * Regular expression that matches null character, for use in escaping.\\n * @const {!RegExp}\\n * @private\\n */\\ngoog.string.internal.NULL_RE_ = /\\\\x00/g;\\n\\n\\n/**\\n * Regular expression that matches any character that needs to be escaped.\\n * @const {!RegExp}\\n * @private\\n */\\ngoog.string.internal.ALL_RE_ = /[\\\\x00&<>\\\"']/;\\n\\n\\n/**\\n * Do escaping of whitespace to preserve spatial formatting. We use character\\n * entity #160 to make it safer for xml.\\n * @param {string} str The string in which to escape whitespace.\\n * @param {boolean=} opt_xml Whether to use XML compatible tags.\\n * @return {string} An escaped copy of `str`.\\n * @see goog.string.whitespaceEscape\\n */\\ngoog.string.internal.whitespaceEscape = function(str, opt_xml) {\\n  'use strict';\\n  // This doesn't use goog.string.preserveSpaces for backwards compatibility.\\n  return goog.string.internal.newLineToBr(\\n      str.replace(/  /g, ' &#160;'), opt_xml);\\n};\\n\\n\\n/**\\n * Determines whether a string contains a substring.\\n * @param {string} str The string to search.\\n * @param {string} subString The substring to search for.\\n * @return {boolean} Whether `str` contains `subString`.\\n * @see goog.string.contains\\n */\\ngoog.string.internal.contains = function(str, subString) {\\n  'use strict';\\n  return str.indexOf(subString) != -1;\\n};\\n\\n\\n/**\\n * Determines whether a string contains a substring, ignoring case.\\n * @param {string} str The string to search.\\n * @param {string} subString The substring to search for.\\n * @return {boolean} Whether `str` contains `subString`.\\n * @see goog.string.caseInsensitiveContains\\n */\\ngoog.string.internal.caseInsensitiveContains = function(str, subString) {\\n  'use strict';\\n  return goog.string.internal.contains(\\n      str.toLowerCase(), subString.toLowerCase());\\n};\\n\\n\\n/**\\n * Compares two version numbers.\\n *\\n * @param {string|number} version1 Version of first item.\\n * @param {string|number} version2 Version of second item.\\n *\\n * @return {number}  1 if `version1` is higher.\\n *                   0 if arguments are equal.\\n *                  -1 if `version2` is higher.\\n * @see goog.string.compareVersions\\n */\\ngoog.string.internal.compareVersions = function(version1, version2) {\\n  'use strict';\\n  let order = 0;\\n  // Trim leading and trailing whitespace and split the versions into\\n  // subversions.\\n  const v1Subs = goog.string.internal.trim(String(version1)).split('.');\\n  const v2Subs = goog.string.internal.trim(String(version2)).split('.');\\n  const subCount = Math.max(v1Subs.length, v2Subs.length);\\n\\n  // Iterate over the subversions, as long as they appear to be equivalent.\\n  for (let subIdx = 0; order == 0 && subIdx < subCount; subIdx++) {\\n    let v1Sub = v1Subs[subIdx] || '';\\n    let v2Sub = v2Subs[subIdx] || '';\\n\\n    do {\\n      // Split the subversions into pairs of numbers and qualifiers (like 'b').\\n      // Two different RegExp objects are use to make it clear the code\\n      // is side-effect free\\n      const v1Comp = /(\\\\d*)(\\\\D*)(.*)/.exec(v1Sub) || ['', '', '', ''];\\n      const v2Comp = /(\\\\d*)(\\\\D*)(.*)/.exec(v2Sub) || ['', '', '', ''];\\n      // Break if there are no more matches.\\n      if (v1Comp[0].length == 0 && v2Comp[0].length == 0) {\\n        break;\\n      }\\n\\n      // Parse the numeric part of the subversion. A missing number is\\n      // equivalent to 0.\\n      const v1CompNum = v1Comp[1].length == 0 ? 0 : parseInt(v1Comp[1], 10);\\n      const v2CompNum = v2Comp[1].length == 0 ? 0 : parseInt(v2Comp[1], 10);\\n\\n      // Compare the subversion components. The number has the highest\\n      // precedence. Next, if the numbers are equal, a subversion without any\\n      // qualifier is always higher than a subversion with any qualifier. Next,\\n      // the qualifiers are compared as strings.\\n      order = goog.string.internal.compareElements_(v1CompNum, v2CompNum) ||\\n          goog.string.internal.compareElements_(\\n              v1Comp[2].length == 0, v2Comp[2].length == 0) ||\\n          goog.string.internal.compareElements_(v1Comp[2], v2Comp[2]);\\n      // Stop as soon as an inequality is discovered.\\n\\n      v1Sub = v1Comp[3];\\n      v2Sub = v2Comp[3];\\n    } while (order == 0);\\n  }\\n\\n  return order;\\n};\\n\\n\\n/**\\n * Compares elements of a version number.\\n *\\n * @param {string|number|boolean} left An element from a version number.\\n * @param {string|number|boolean} right An element from a version number.\\n *\\n * @return {number}  1 if `left` is higher.\\n *                   0 if arguments are equal.\\n *                  -1 if `right` is higher.\\n * @private\\n */\\ngoog.string.internal.compareElements_ = function(left, right) {\\n  'use strict';\\n  if (left < right) {\\n    return -1;\\n  } else if (left > right) {\\n    return 1;\\n  }\\n  return 0;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"string\",\"internal\",\"startsWith\",\"goog.string.internal.startsWith\",\"str\",\"prefix\",\"lastIndexOf\",\"endsWith\",\"goog.string.internal.endsWith\",\"suffix\",\"l\",\"length\",\"indexOf\",\"caseInsensitiveStartsWith\",\"goog.string.internal.caseInsensitiveStartsWith\",\"caseInsensitiveCompare\",\"substr\",\"caseInsensitiveEndsWith\",\"goog.string.internal.caseInsensitiveEndsWith\",\"caseInsensitiveEquals\",\"goog.string.internal.caseInsensitiveEquals\",\"str1\",\"str2\",\"toLowerCase\",\"isEmptyOrWhitespace\",\"goog.string.internal.isEmptyOrWhitespace\",\"test\",\"trim\",\"TRUSTED_SITE\",\"String\",\"prototype\",\"exec\",\"goog.string.internal.caseInsensitiveCompare\",\"test1\",\"test2\",\"newLineToBr\",\"goog.string.internal.newLineToBr\",\"opt_xml\",\"replace\",\"htmlEscape\",\"goog.string.internal.htmlEscape\",\"opt_isLikelyToContainHtmlChars\",\"AMP_RE_\",\"LT_RE_\",\"GT_RE_\",\"QUOT_RE_\",\"SINGLE_QUOTE_RE_\",\"NULL_RE_\",\"ALL_RE_\",\"whitespaceEscape\",\"goog.string.internal.whitespaceEscape\",\"contains\",\"goog.string.internal.contains\",\"subString\",\"caseInsensitiveContains\",\"goog.string.internal.caseInsensitiveContains\",\"compareVersions\",\"goog.string.internal.compareVersions\",\"version1\",\"version2\",\"order\",\"v1Subs\",\"split\",\"v2Subs\",\"subCount\",\"Math\",\"max\",\"subIdx\",\"v1Sub\",\"v2Sub\",\"v1Comp\",\"v2Comp\",\"v1CompNum\",\"parseInt\",\"v2CompNum\",\"compareElements_\",\"goog.string.internal.compareElements_\",\"left\",\"right\"]\n}\n"]