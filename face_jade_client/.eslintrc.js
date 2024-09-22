module.exports = {
  // 环境设置
  env: {
    browser: true, // 浏览器环境
    es2021: true, // 启用 ECMAScript 2021 语法
    node: true, // Node.js 环境
    // 如果需要，还可以添加其他环境，如 jest: true
  },
  // 继承预设配置
  extends: [
    "eslint:recommended", // 继承 ESLint 的推荐规则
    // 可以添加其他预设，如 'plugin:react/recommended'（如果你的项目使用 React）
  ],

  // 解析器选项
  parserOptions: {
    ecmaVersion: 12, // ECMAScript 版本
    sourceType: "module", // 源代码类型，默认为 'script'
    ecmaFeatures: {
      // 可以在这里启用额外的语言特性
      jsx: false, // 启用 JSX
    },
  },

  // 插件
  plugins: [
    // 如果你的项目需要特定的 ESLint 插件，可以在这里添加
    // 例如：'react'
  ],

  // parse: "babel-eslint",

  // 规则配置
  rules: {},
};
