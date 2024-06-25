import { writeFileSync } from "fs";

export const JSONToFile = (obj: any, filename: string) =>
  writeFileSync(`${filename}.json`, JSON.stringify(obj, null, 2));

// JSONToFile({ test: 'is passed' }, 'testJsonFile');
// writes the object to 'testJsonFile.json'
