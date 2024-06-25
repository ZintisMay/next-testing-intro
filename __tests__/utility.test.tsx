import {
  add,
  subtract,
  multiply,
  divide,
  power,
  repeat,
} from "../app/utils/utilities.tsx";

interface Funcs {
  [key: string]: Function;
}

let funcs: Funcs = {
  add,
  subtract,
  multiply,
  divide,
  power,
  repeat,
};

describe("Utility", () => {
  let funcParamsAndSolution: [string, number, number, number][] = [
    ["add", 0, 0, 0],
    ["add", 1, 2, 3],
    ["add", 111, 234, 345],
    ["add", 4, 5, 9],
    ["subtract", 10, 3, 7],
    ["subtract", 5, 21, -16],
    ["subtract", 0, 0, 0],
    ["subtract", 15, 0, 15],
    ["multiply", 0, 0, 0],
    ["multiply", 1, 2, 2],
    ["multiply", 2, 6, 12],
    ["multiply", 1.1, 10, 11],
    ["divide", 0, 0, NaN],
    ["divide", 20, 4, 5],
    ["divide", 121, 11, 11],
    ["divide", 2, 5, 2 / 5],
  ];
  for (let [fName, p1, p2, result] of funcParamsAndSolution) {
    it(`should perform ${fName}, with (${p1}, ${p2}) => ${result}`, () => {
      expect(funcs[fName](p1, p2)).toBe(result);
    });
  }
});
