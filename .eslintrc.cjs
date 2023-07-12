module.exports = {
  env: {
    es2021: true,
    node: true,
  },

  extends: ["xo", "prettier"],
  overrides: [
    {
      extends: ["xo-typescript", "prettier"],
      files: ["*.ts", "*.tsx"],
    },
    {
      files: ["src/**/models/**/*.ts", "src/server/routers/usersRouters.ts"],
      rules: { "@typescript-eslint/naming-convention": "off" },
    },
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/consistent-type-definitions": [
          "error",
          "interface",
        ],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: { "new-cap": ["error", { capIsNewExceptions: ["Router"] }] },
};
