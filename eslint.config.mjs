import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
      prettier: pluginPrettier,
    },
    rules: {
      // react 추천 규칙 중에서 필요하면 수동 설정
      // ...pluginReact.configs.recommended.rules, // ❌ 삭제 권장
      "react/react-in-jsx-scope": "off", // ✅ 명확하게 선언
      "react/prop-types": "off",
      "prettier/prettier": "warn",
      "no-var": "warn",
      "no-unused-vars": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
