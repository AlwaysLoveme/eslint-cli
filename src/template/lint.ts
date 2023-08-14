export const prettier = `/** @type {import("prettier").Config} */
module.exports = {
  semi: true,
  singleQuote: false,
  arrowParens: "avoid",
};
`;
export const eslintConfig = `module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: true,
    tsconfigRootDir: __dirname,
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "@typescript-eslint/no-explicit-any": "off",
  },
};
`;

export const eslintReactConfig = `module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    'plugin:@typescript-eslint/recommended-type-checked',
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  ignorePatterns: ["dist", ".eslintrc.js"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: [
      './packages/*/tsconfig.json',
    ],
    tsconfigRootDir: __dirname,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-refresh"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    indent: ["error", "tab"],
    semi: ["error", "always"], // 强制末尾分号
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "@next/next/no-img-element": "off",
    eqeqeq: "error", // 要求使用 === 和 !==
    "no-empty": "error", // 块语句中的内容不能为空
    "no-empty-character-class": "error", // 正则表达式中的[]内容不能为空
    "no-extra-boolean-cast": "error", // 禁止不必要的bool转换
    "no-extra-parens": "off", // 禁止非必要的括号
    "no-extra-semi": "error", // 禁止多余的冒号
    "no-invalid-this": "error", // 禁止无效的this，只能用在构造器，类，对象字面量
    "no-irregular-whitespace": "error", // 不能有不规则的空格
    "no-self-assign": "error", // 禁止自我赋值
    "no-self-compare": "error", // 禁止自身比较
    "no-sequences": "error", // 禁用逗号操作符
    "key-spacing": ["error", { beforeColon: false, afterColon: true }], // 对象字面量中冒号的前后空格
    "no-unmodified-loop-condition": "error", // 禁用一成不变的循环条件
    "no-unused-expressions": "off", // 禁止出现未使用过的表达式
    "object-curly-spacing": ["error", "always"], // 对象前后需要空格
    "array-bracket-spacing": [
      "error",
      "always",
      {
        objectsInArrays: false,
      },
    ], // 是否允许非空数组里面有多余的空格
    "arrow-parens": "off", // 箭头函数用小括号括起来
    "block-spacing": ["error", "always"], // =>的前/后括号
    "callback-return": "warn", // 避免多次调用回调
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: false,
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-indent-props": ["error", "tab"],
    "react/jsx-closing-tag-location": ["error"],
    "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
    "react/jsx-closing-bracket-location": ["error"],
    "react/jsx-max-props-per-line": ["error", { maximum: 1, when: "always" }],
    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: true,
        assignment: true,
        return: true,
        arrow: true,
        condition: true,
      },
    ],
    "react/jsx-sort-props": [
      "error",
      {
        multiline: "last",
        callbacksLast: true,
        shorthandFirst: true,
      },
    ],
    "react-hooks/exhaustive-deps": ["off"],
    "@next/next/no-html-link-for-pages": "off",
  },
};
`;

export const eslintIgnore = `dist
.eslintrc.cjs
node_modules
`;
