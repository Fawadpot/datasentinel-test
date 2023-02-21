"use strict";
exports.__esModule = true;
exports.processJson = void 0;
function processJson(data) {
    var timestamp = data.ts;
    var url = new URL(data.u);
    var domain = url.hostname;
    var path = url.pathname;
    var query = url.searchParams;
    var queryObject = {};
    query.forEach(function (value, key) {
        queryObject[key] = value;
    });
    var hash = url.hash;
    var result = data.e.map(function (item) {
        return {
            timestamp: timestamp,
            url_object: {
                domain: domain,
                path: path,
                query_object: queryObject,
                hash: hash
            },
            ec: item
        };
    });
    return result;
}
exports.processJson = processJson;
