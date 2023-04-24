const styledTSpanElementsMustHaveAsAttributes = require("../../../lib/rules/styled-tspan-must-have-as-attribute.js");
const { RuleTester } = require("eslint");

const ruleTester = new RuleTester();
const parserOptions = {
  ecmaVersion: 6,
  sourceType: "module",
  ecmaFeatures: {
    jsx: true,
  },
};
const messageId = "noAsAttributeInStyledTSpan";

ruleTester.run(
  "styled-tspan-must-have-as-attribute",
  styledTSpanElementsMustHaveAsAttributes,
  {
    valid: [
      { code: `styled(TSpan).attrs({as:'set'})`, parserOptions },
      {
        code: `const StyledTSpan = styled(TSpan).attrs({as:'set'})`,
        parserOptions,
      },
      { code: `styled(TSpan).attrs(() => ({as:'set'}))`, parserOptions },
    ],

    invalid: [
      {
        code: "styled(TSpan).attrs({})",
        parserOptions,
        errors: [{ messageId }],
      },
      {
        code: "styled(TSpan).attrs({foo:'bar'})",
        parserOptions,
        errors: [{ messageId }],
      },
      {
        code: "styled(TSpan).attrs(() => ({}))",
        parserOptions,
        errors: [{ messageId }],
      },
      {
        code: "const StyledTSpan = styled(TSpan).attrs({})",
        parserOptions,
        errors: [{ messageId }],
      },
    ],
  }
);
