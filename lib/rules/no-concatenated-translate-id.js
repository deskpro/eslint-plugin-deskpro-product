const { getProp } = require("jsx-ast-utils");
const { nodeContainsConcatenatedString, message } = require("../../utils/concatenatedString");

// @ts-check
/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow concatenation of Translate id",
      recommended: false,
    },
    schema: [],
    messages: {
      concatenatedTranslateId: message
    },
  },
  create(context) {
    return {
      JSXOpeningElement(node) {
        if (node.name.name === "Translate") {
          const property = getProp(node.attributes, "id");

          if (property && property.value.type === "JSXExpressionContainer") {
            return nodeContainsConcatenatedString(
              node,
              context,
              property.value.expression,
              "concatenatedTranslateId"
            );
          }
        }
      },
    };
  },
};
