/**
 * 二分探索 / Binary search
 *
 * @param array - 順序付き配列 / Sorted array of objects
 * @param obj - 配列中のインデックスを探索するオブジェクト / Object to find an appropriate index
 * @param accessor - オブジェクトの数値表現を返す関数 / Accessor function that returns numeric representation of the object
 * @returns オブジェクトを挿入すべき位置のインデックス / An appropriate index value in the sorted array to insert the object
 * @public
 */
export function sortedIndex<T>(
  array: T[],
  obj: T | number,
  accessor?: (obj: T) => number
): number {
  const value = !accessor || typeof obj === "number" ? obj : accessor(obj);
  let low = 0,
    high = array.length;
  while (low < high) {
    const mid = (low + high) >>> 1;
    if (accessor(array[mid]) < value) low = mid + 1;
    else high = mid;
  }
  return low;
}
