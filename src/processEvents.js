"use strict";
exports.__esModule = true;
var fs = require("fs");
var utils_1 = require("./utils");
var INPUT_FILE_PATH = './data/input.json';
var OUTPUT_FILE_PATH = './data/output.json';
var processInputFile = function () {
    try {
        var inputData_1 = JSON.parse(fs.readFileSync(INPUT_FILE_PATH, 'utf-8'));
        var outputData = inputData_1.e.map(function (ec) {
            var urlData = (0, utils_1.processJson)(inputData_1.u);
            return {
                timestamp: inputData_1.ts,
                url_object: {
                    domain: urlData.domain,
                    path: urlData.path,
                    query_object: urlData.queryObject,
                    hash: urlData.hash
                },
                ec: ec
            };
        });
        fs.writeFileSync(OUTPUT_FILE_PATH, JSON.stringify(outputData, null, 2));
        console.log("Output data has been saved to ".concat(OUTPUT_FILE_PATH, "."));
    }
    catch (error) {
        console.error('An error occurred while processing the input file:', error);
    }
};
processInputFile();
