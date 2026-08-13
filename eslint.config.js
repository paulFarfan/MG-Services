import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import unusedImports from "eslint-plugin-unused-imports";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["dist", "node_modules"],
  },

  {
    files: ["**/*.{js,jsx,mjs,cjs}"],

    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "unused-imports": unusedImports,
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,

      // React 17+ / Vite uses the automatic JSX runtime
      "react/react-in-jsx-scope": "off",

      // Components are currently plain JSX/JS rather than TypeScript
      "react/prop-types": "off",

      // JSX text such as contractions/quotes is valid in this project
      "react/no-unescaped-entities": "off",

      // Unused imports
      "unused-imports/no-unused-imports": "error",

      "react/no-unknown-property": "off",
    },
  },
]);
