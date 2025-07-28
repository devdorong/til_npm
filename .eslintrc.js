module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "prettier"],
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off", // React 17+ JSX 자동 지원
    "react/prop-types": "off", // 필요 없으면 off
    "prettier/prettier": "warn", // Prettier 포맷팅 경고
    "no-var": "warn",
    "no-unused-vars": "warn",
  },
  settings: {
    react: {
      version: "detect", // 자동으로 패키지의 react 버전 감지
    },
  },
};
