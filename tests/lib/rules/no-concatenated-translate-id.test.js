const noConcatenatedFormatMessageId = require("../../../lib/rules/no-concatenated-translate-id");
const { RuleTester } = require("eslint");

const ruleTester = new RuleTester();
const parserOptions = {
  ecmaVersion: 6,
  sourceType: "module",
  ecmaFeatures: {
    jsx: true,
  },
};
const messageId = "concatenatedTranslateId";

ruleTester.run("no-concatenated-translate-id", noConcatenatedFormatMessageId, {
  valid: [
    { code: 'const T = () => <Translate id="foo" />', parserOptions },
    { code: "const T = () => <Translate id={`${foo}`} />", parserOptions },
    { code: "const T = () => <Translate id={foo} />", parserOptions },
  ],
  invalid: [
    {
      code: `const T = () => <Translate id={"foo" + "bar"} />`,
      parserOptions,
      errors: [{ messageId }],
    },
    {
      code: `const T = () => <Translate id={foo + bar} />`,
      parserOptions,
      errors: [{ messageId }],
    },
    {
      code: `const T = () => <Translate id={foo + "bar"} />`,
      parserOptions,
      errors: [{ messageId }],
    },
    {
      code: "const T = () => <Translate id={`${bar}${foo}`} />",
      parserOptions,
      errors: [{ messageId }],
    },
    {
      code: "const T = () => <Translate id={`${bar}foo`} />",
      parserOptions,
      errors: [{ messageId }],
    },
  ],
});
