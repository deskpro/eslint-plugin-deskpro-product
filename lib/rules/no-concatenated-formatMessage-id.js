const { nodeContainsConcatenatedString, message } = require("../../utils/concatenatedString");

// @ts-check
/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow concatenation of formatMessage id",
      recommended: false,
    },
    schema: [],
    messages: {
      concatenatedFormatMessageId: message,
    },
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          // intl.formatMessage()
          (node.callee.type === "MemberExpression" &&
            node.callee.property.type === "Identifier" &&
            node.callee.property.name === "formatMessage") ||
          // deconstructed formatMessage()
          (node.callee.type === "Identifier" && node.callee.name === "formatMessage")
        ) {
          const objectExpression = node.arguments.find((arg) => arg.type === "ObjectExpression");

          if (objectExpression?.type === "ObjectExpression") {
            const property = objectExpression.properties.find((prop) => prop.type === "Property");
            if (
              property?.type === "Property" &&
              property.key.type === "Identifier" &&
              property.key.name === "id"
            ) {
              nodeContainsConcatenatedString(
                node,
                context,
                property.value,
                "concatenatedFormatMessageId"
              );
            }
          }
        }
      },
    };
  },
};
