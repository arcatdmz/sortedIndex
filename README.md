### sortedindex

[![build](https://github.com/arcatdmz/sortedIndex/workflows/npm-publish/badge.svg)](https://github.com/arcatdmz/sortedIndex/actions?query=workflow%3Anpm-publish)
[![npm version](https://img.shields.io/npm/v/sortedindex)](https://www.npmjs.com/package/sortedindex)

**sortedindex** is a simple npm package that provides a binary search function for a sorted array.

**sortedindex** は二分探索を行う関数が入った npm パッケージです。

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
const i2 = sortedIndex(["a", "b", "d", "e"], "c", (o) => o.charCodeAt(0)); // 2
```

### Credits / 開発者

- [Jun Kato](https://junkato.jp)

---

Copyright (c) 2021 Jun Kato
