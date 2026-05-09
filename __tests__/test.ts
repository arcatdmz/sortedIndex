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

  test("empty and single-element arrays", () => {
    expect(sortedIndex([], 10)).toEqual(0);
    expect(sortedIndex([3], 2)).toEqual(0);
    expect(sortedIndex([3], 3)).toEqual(0);
    expect(sortedIndex([3], 4)).toEqual(1);
  });

  test("duplicate values are inserted at first matching index", () => {
    expect(sortedIndex([1, 2, 2, 2, 3], 2)).toEqual(1);
    expect(sortedIndex([1, 1, 1], 1)).toEqual(0);
  });

  test("negative and infinite values", () => {
    expect(sortedIndex([-10, -3, 0, 7], -5)).toEqual(1);
    expect(sortedIndex([-10, -3, 0, 7], Infinity)).toEqual(4);
    expect(sortedIndex([-10, -3, 0, 7], -Infinity)).toEqual(0);
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

  test("generic array with duplicated keys", () => {
    const accessor = (o: { score: number }) => o.score;
    const array = [{ score: 1 }, { score: 3 }, { score: 3 }, { score: 5 }];
    expect(sortedIndex(array, { score: 3 }, accessor)).toEqual(1);
  });

  test("generic array accepts direct numeric key with accessor", () => {
    const accessor = (o: { score: number }) => o.score;
    const array = [{ score: 10 }, { score: 20 }, { score: 40 }];
    expect(sortedIndex(array, 25, accessor)).toEqual(2);
  });
});
