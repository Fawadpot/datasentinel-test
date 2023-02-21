// src/index.js

const fs = require('fs');
const path = require('path');
const { parseUrl } = require('./utils');

const inputDir = path.join(__dirname, '..', 'input');
const outputDir = path.join(__dirname, '..', 'output');

fs.readdir(inputDir, (err, files) => {
  if (err) throw err;

  files.forEach((filename) => {
    if (!filename.endsWith('.json')) {
      console.warn(`Skipping non-JSON file: ${filename}`);
      return;
    }

    const inputFilePath = path.join(inputDir, filename);
    const outputFilePath = path.join(outputDir, `${filename.split('.')[0]}-output.json`);

    fs.readFile(inputFilePath, 'utf8', (err, data) => {
      if (err) throw err;

      const input = JSON.parse(data);
      const output = input.e.map((ec) => {
        return {
          timestamp: input.ts,
          url_object: parseUrl(input.u),
          ec,
        };
      });

      fs.writeFile(outputFilePath, JSON.stringify(output), (err) => {
        if (err) throw err;

        console.log(`Successfully wrote output to file: ${outputFilePath}`);
      });
    });
  });
});
