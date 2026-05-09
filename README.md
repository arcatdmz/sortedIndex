### sortedindex

[![test](https://github.com/arcatdmz/sortedIndex/actions/workflows/test.yml/badge.svg)](https://github.com/arcatdmz/sortedIndex/actions/workflows/test.yml)
[![npm version](https://img.shields.io/npm/v/sortedindex)](https://www.npmjs.com/package/sortedindex)
[![license](https://img.shields.io/npm/l/sortedindex)](LICENSE)

**sortedindex** is a tiny TypeScript package that uses binary search to find the leftmost insertion index in a sorted array.

**sortedindex** は、二分探索でソート済み配列に対する左端の挿入位置を返す小さな TypeScript パッケージです。

- GitHub repository: https://github.com/arcatdmz/sortedIndex
- npm package: https://www.npmjs.com/package/sortedindex
- API document: https://arcatdmz.github.io/sortedIndex

### Usage / 使い方

```sh
npm install sortedindex
```

```typescript
import { sortedIndex } from "sortedindex";

const i1 = sortedIndex([1, 2, 4, 5], 3); // 2
const i2 = sortedIndex([1, 2, 2, 2, 3], 2); // 1
const i3 = sortedIndex(["a", "b", "d", "e"], "c", (o) => o.charCodeAt(0)); // 2
const i4 = sortedIndex([{ score: 10 }, { score: 20 }, { score: 40 }], 25, (o) => o.score); // 2
```

### Development / 開発

```sh
npm test
npm run build
```

### Credits / 開発者

- [Jun Kato](https://junkato.jp)

---

Copyright (c) 2021-2026 Jun Kato
