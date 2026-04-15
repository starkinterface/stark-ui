import { defineConfig } from "oxfmt"

export default defineConfig({
  /** These settings are automatically used from .editorconfig */

  // "printWidth": max_line_length >> 80,
  // "useTabs": indent_style >> false (use space),
  // "tabWidth": indent_size >> 2,
  // "endOfLine": end_of_line >> "lf",
  // "insertFinalNewline": insert_final_newline >> true,

  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  jsxSingleQuote: false,
  proseWrap: "preserve",
  quoteProps: "as-needed",
  semi: false,
  singleQuote: false,
  sortImports: {
    customGroups: [],
    groups: [
      ["value-builtin"],
      ["value-internal", "value-parent", "value-sibling", "value-index"],
      ["value-external"],
      { newlinesBetween: true },
      [
        "named-type-internal",
        "named-type-parent",
        "named-type-sibling",
        "named-type-index",
      ],
      ["named-type-external"],
    ],
    internalPattern: ["@stark-ui/", "@stark-loader/"],
    newlinesBetween: false,
    sortSideEffects: false,
  },
  sortPackageJson: {
    sortScripts: true,
  },
  sortTailwindcss: {
    attributes: ["className"],
    functions: ["cx", "cn", "tv"],
    stylesheet: "./packages/theme-stark/src/entrypoint.css",
  },
  trailingComma: "es5",
})
