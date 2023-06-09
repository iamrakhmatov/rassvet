module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:tailwindcss/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "convex/tsconfig.json", "vite.config.ts"],
  },
  plugins: ["react", "@typescript-eslint", "prettier", "react-refresh"],
  rules: {
    "global-require": 0,
    "import/no-cycle": 0,
    "consistent-return": 0,
    "no-underscore-dangle": 0,
    "react/react-in-jsx-scope": 0,
    "react/require-default-props": 0,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
    "@typescript-eslint/no-var-requires": 0,
    "react/function-component-definition": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "react-refresh/only-export-components": "warn",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
};
