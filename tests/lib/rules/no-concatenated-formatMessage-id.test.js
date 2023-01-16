const noConcatenatedFormatMessageId = require("../../../lib/rules/no-concatenated-formatMessage-id");
const { RuleTester } = require("eslint");

const ruleTester = new RuleTester();
const parserOptions = { ecmaVersion: 6 };
const messageId = "concatenatedFormatMessageId";

ruleTester.run("no-concatenated-formatMessage-id", noConcatenatedFormatMessageId, {
  valid: [
    { code: `intl.formatMessage({ id: "foo" })`, parserOptions },
    { code: `intl.formatMessage({ id: foo })`, parserOptions },
    { code: "intl.formatMessage({ id: `${foo}` })", parserOptions },
    
    { code: `formatMessage({ id: "foo" })`, parserOptions },
    { code: `formatMessage({ id: foo })`, parserOptions },
    { code: "formatMessage({ id: `${foo}` })", parserOptions },
  ],
  invalid: [
    { code: `intl.formatMessage({ id: "foo" + "bar" })`, parserOptions, errors: [{ messageId }] },
    { code: `intl.formatMessage({ id: foo + bar })`, parserOptions, errors: [{ messageId }] },
    { code: `intl.formatMessage({ id: foo + "bar" })`, parserOptions, errors: [{ messageId }] },
    { code: "intl.formatMessage({ id: `${bar}${foo}` })", parserOptions, errors: [{ messageId }] },
    { code: "intl.formatMessage({ id: `${bar}foo` })", parserOptions, errors: [{ messageId }] },

    { code: `formatMessage({ id: "foo" + "bar" })`, parserOptions, errors: [{ messageId }] },
    { code: `formatMessage({ id: foo + bar })`, parserOptions, errors: [{ messageId }] },
    { code: `formatMessage({ id: foo + "bar" })`, parserOptions, errors: [{ messageId }] },
    { code: "formatMessage({ id: `${bar}${foo}` })", parserOptions, errors: [{ messageId }] },
    { code: "formatMessage({ id: `${bar}foo` })", parserOptions, errors: [{ messageId }] },
  ],
});
