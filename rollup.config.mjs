import typescript from "@rollup/plugin-typescript";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const pkg = require("./package.json");

export default [
  {
    input: "lib/index.ts",
    output: [
      {
        file: pkg.main,
        format: "umd",
        name: "sortedIndex",
      },
      {
        file: pkg.module,
        format: "es",
      },
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [
      typescript({
        tsconfig: "tsconfig.json",
      }),
    ],
  },
];
