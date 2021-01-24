/**
 * # Tests for sortedindex package
 */

import { sortedIndex } from "../lib/";

describe("sortedIndex tests", () => {
  test("numerical array", () => {
    expect(sortedIndex([1, 2, 4, 5], 0)).toEqual(0);
    expect(sortedIndex([1, 2, 4, 5], 1)).toEqual(0);
    expect(sortedIndex([1, 2, 4, 5], 2)).toEqual(1);
    expect(sortedIndex([1, 2, 4, 5], 3)).toEqual(2);
    expect(sortedIndex([1, 2, 4, 5], 4)).toEqual(2);
    expect(sortedIndex([1, 2, 4, 5], 5)).toEqual(3);
    expect(sortedIndex([1, 2, 4, 5], 6)).toEqual(4);
  });

  test("generic array", () => {
    const accessor = (s: string) => s.charCodeAt(0);
    expect(sortedIndex(["a", "b", "d", "e"], "0", accessor)).toEqual(0);
    expect(sortedIndex(["a", "b", "d", "e"], "a", accessor)).toEqual(0);
    expect(sortedIndex(["a", "b", "d", "e"], "b", accessor)).toEqual(1);
    expect(sortedIndex(["a", "b", "d", "e"], "c", accessor)).toEqual(2);
    expect(sortedIndex(["a", "b", "d", "e"], "d", accessor)).toEqual(2);
    expect(sortedIndex(["a", "b", "d", "e"], "e", accessor)).toEqual(3);
    expect(sortedIndex(["a", "b", "d", "e"], "f", accessor)).toEqual(4);
  });
});
