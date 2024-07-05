module.exports = {
  ignorePatterns: ["*.d.ts"],
  extends: ["plugin:astro/recommended"],
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
        "space-before-function-paren": [
          "error",
          {
            anonymous: "always",
            named: "never",
            asyncArrow: "always",
          },
        ],
      },
      semi: "off", // Don't need ESLint's semi, so turn it off.
      "astro/semi": [
        "error",
        "always", // or "never"
        { omitLastInOneLineBlock: true },
        // or { "beforeStatementContinuationChars": "any" | "always" | "never" }
      ],
    },
  ],
};
