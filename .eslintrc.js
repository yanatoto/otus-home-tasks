module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "func-names": "off",
    "no-console": "off",
    "no-alert": "off",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "import/prefer-default-export": "off",
    "max-len": ["error", { code: 228 }],
  },
  plugins: ["jest"],
};
