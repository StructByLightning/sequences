import {fixupPluginRules} from "@eslint/compat";
import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import stylistic from "@stylistic/eslint-plugin";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import html from "eslint-plugin-html";
import importPlugin from "eslint-plugin-import";
import jsdoc from "eslint-plugin-jsdoc";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import sortDestructureKeys from "eslint-plugin-sort-destructure-keys";

export default [
  //Base JavaScript recommended rules
  js.configs.recommended,

  //Global ignores
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "dist/**", "build/**"],
  },

  //Main configuration for all JS/TS files
  {
    files: ["**/*.{js,jsx,ts,tsx,mjs}"],

    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        //Browser globals
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        console: "readonly",
        //Node globals
        process: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        //ES6 globals
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
      },
    },

    plugins: {
      "@typescript-eslint": typescript,
      "@stylistic": stylistic,
      "html": html,
      "import": fixupPluginRules(importPlugin),
      "jsdoc": jsdoc,
      "react": react,
      "react-hooks": reactHooks,
      "sort-destructure-keys": sortDestructureKeys,
      "@next/next": nextPlugin,
    },

    settings: {
      react: {
        version: "detect",
      },
      html: {
        "html-extensions": [".html"],
        "report-bad-indent": "error",
        "indent": "+2",
      },
    },

    rules: {
      //TypeScript rules
      ...typescript.configs.recommended.rules,
      "@typescript-eslint/member-ordering": [
        "error", {
          interfaces: {order: "alphabetically"},
          typeLiterals: {order: "alphabetically"},
        },
      ],
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-shadow": "error",

      //React rules
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react/display-name": "off",
      "react/no-unescaped-entities": "off",
      "react/jsx-wrap-multilines": [
        "error", {
          declaration: "ignore",
          assignment: "ignore",
          return: "never",
          arrow: "ignore",
          condition: "ignore",
          logical: "ignore",
          prop: "ignore",
        },
      ],
      "react/prop-types": ["skipUndeclared"],

      //Next.js rules
      "@next/next/no-async-client-component": "error",
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-page-custom-font": "error",
      "@next/next/no-img-element": "off",
      "@next/next/google-font-preconnect": "off",

      //Import rules
      "import/no-duplicates": "error",
      "import/no-unresolved": "error",
      "import/no-useless-path-segments": "error",
      "import/newline-after-import": "error",
      "import/no-namespace": "error",
      "import/order": [
        "error", {
          groups: ["builtin", "external", "internal", "type", "index", "sibling", "parent", "object"],
          "newlines-between": "never",
          alphabetize: {order: "asc"},
        },
      ],

      //Stylistic rules
      "@stylistic/indent": ["error", 2],
      "object-curly-spacing": ["error", "never"],
      "sort-destructure-keys/sort-destructure-keys": [2],

      //JSDoc rules
      "jsdoc/sort-tags": [
        "error", {
          alphabetizeExtras: true,
          tagSequence: [],
          linesBetween: 1,
        },
      ],
      "jsdoc/check-line-alignment": ["error", "always"],

      //General JavaScript rules
      "prefer-template": "error",
      "no-await-in-loop": "off",
      "template-curly-spacing": "off",
      "no-console": ["error", {allow: ["error"]}],
      "no-template-curly-in-string": "error",
      "require-atomic-updates": "error",
      "accessor-pairs": "error",
      "array-callback-return": "off",
      "complexity": ["error", 20],
      "jsx-quotes": ["error", "prefer-double"],
      "key-spacing": ["error", {beforeColon: false, afterColon: true}],
      "keyword-spacing": ["error", {before: true, after: true}],
      "no-lone-blocks": "error",
      "curly": "error",
      "default-case": "error",
      "dot-location": ["error", "property"],
      "eqeqeq": "error",
      "guard-for-in": "error",
      "no-alert": "error",
      "no-caller": "error",
      "no-div-regex": "error",
      "no-else-return": "error",
      "no-empty-function": "off",
      "no-eq-null": "error",
      "no-eval": "error",
      "no-extend-native": "error",
      "no-extra-bind": "error",
      "no-extra-label": "error",
      "no-floating-decimal": "error",
      "no-implicit-coercion": "error",
      "no-implied-eval": "error",
      "no-invalid-this": "off",
      "no-iterator": "error",
      "no-labels": "error",
      "no-loop-func": "error",
      "no-magic-numbers": "off",
      "no-multi-spaces": "error",
      "no-new": "error",
      "no-new-func": "error",
      "no-new-wrappers": "error",
      "no-octal-escape": "error",
      "no-param-reassign": "error",
      "no-proto": "error",
      "no-return-await": "error",
      "no-script-url": "error",
      "no-self-compare": "error",
      "no-sequences": "error",
      "no-throw-literal": "off",
      "no-unmodified-loop-condition": "error",
      "no-unused-expressions": "off",
      "no-unused-vars": "warn",
      "no-useless-call": "error",
      "no-useless-concat": "error",
      "no-useless-return": "error",
      "no-void": "error",
      "no-warning-comments": "warn",
      "no-undef-init": "error",
      "no-use-before-define": "error",
      "callback-return": "error",
      "global-require": "error",
      "no-buffer-constructor": "error",
      "no-mixed-requires": "error",
      "no-new-require": "error",
      "no-path-concat": "error",
      "no-process-env": "off",
      "no-process-exit": "error",

      //Formatting rules
      "array-bracket-newline": ["error", {multiline: true}],
      "block-spacing": "error",
      "array-element-newline": ["error", "consistent"],
      "array-bracket-spacing": ["error", "never"],
      "brace-style": ["error", "1tbs"],
      "comma-dangle": ["error", {arrays: "always-multiline", objects: "always-multiline"}],
      "comma-spacing": ["error", {before: false, after: true}],
      "camelcase": "warn",
      "prefer-promise-reject-errors": "error",
      "max-classes-per-file": ["error", 1],
      "function-paren-newline": ["error", "multiline-arguments"],
      "lines-between-class-members": "error",
      "implicit-arrow-linebreak": ["error", "beside"],
      "max-len": ["error", {tabWidth: 2, code: 1000000}],
      "no-bitwise": "error",
      "no-continue": "error",
      "no-lonely-if": "error",
      "no-multi-assign": "error",
      "quotes": ["error", "double"],
      "space-before-function-paren": ["error", "never"],
      "spaced-comment": ["error", "never"],
      "switch-colon-spacing": ["error", {after: true, before: false}],
      "space-infix-ops": "error",
      "space-in-parens": "error",
      "semi-spacing": ["error", {before: false, after: true}],
      "semi-style": ["error", "last"],
      "no-multiple-empty-lines": ["error", {max: 3}],
      "semi": ["error", "always", {omitLastInOneLineBlock: true}],
      "object-property-newline": ["error", {allowAllPropertiesOnSameLine: true}],
      "operator-assignment": ["error", "always"],
      "padded-blocks": ["error", "never"],
      "no-underscore-dangle": "off",
      "no-whitespace-before-property": "error",
      "no-nested-ternary": "error",
      "no-new-object": "error",
      "no-trailing-spaces": "error",
      "newline-per-chained-call": ["error", {ignoreChainWithDepth: 3}],
      "no-array-constructor": "error",
      "max-statements-per-line": ["error", {max: 1}],
      "function-call-argument-newline": ["error", "consistent"],
      "arrow-parens": "error",
      "arrow-spacing": ["error", {before: true, after: true}],
      "func-call-spacing": "error",
      "eol-last": "error",
      "linebreak-style": ["error", "unix"],
    },
  },

  //HTML files configuration
  {
    files: ["**/*.html"],
    plugins: {
      html: html,
    },
  },
];
