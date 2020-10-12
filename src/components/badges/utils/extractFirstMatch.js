"use strict";
/**
 * @packageDocumentation
 * @internal
 */
exports.__esModule = true;
exports.extractFirstMatch = void 0;
function extractFirstMatch(str, extractionRegexes) {
    var extractions = extractionRegexes.map(function (regex) { return regex.exec(str); });
    var regexResult = extractions.filter(isNotNull)[0];
    return regexResult === null || regexResult === void 0 ? void 0 : regexResult.groups;
}
exports.extractFirstMatch = extractFirstMatch;
var isNotNull = function (val) { return val !== null; };
