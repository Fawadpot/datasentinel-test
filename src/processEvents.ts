import * as fs from 'fs';
import { processJson } from './utils';

const INPUT_FILE_PATH = './data/input.json';
const OUTPUT_FILE_PATH = './data/output.json';

const processInputFile = () => {
  try {
    const inputData = JSON.parse(fs.readFileSync(INPUT_FILE_PATH, 'utf-8'));

    const outputData = inputData.e.map((ec) => {
      const urlData = processJson(inputData.u);
      return {
        timestamp: inputData.ts,
        url_object: {
          domain: urlData.domain,
          path: urlData.path,
          query_object: urlData.queryObject,
          hash: urlData.hash,
        },
        ec,
      };
    });

    fs.writeFileSync(OUTPUT_FILE_PATH, JSON.stringify(outputData, null, 2));

    console.log(`Output data has been saved to ${OUTPUT_FILE_PATH}.`);
  } catch (error) {
    console.error('An error occurred while processing the input file:', error);
  }
};

processInputFile();
