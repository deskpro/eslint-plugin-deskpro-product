module.exports = {
  message: `Don't concatenate the translation string. 
  We have a cleanup script that runs occassionally to remove unused translation keys from the language files (resources/language/messages). 
  If you break up the translation key with concatenation, then the cleanup script won't find the translation key in the codebase and will remove it from the language files.
  Solution: if your translation key is dynamic then use a switch statement or ternary e.g.
  BAD: \`agent.mass_actions.\${entityType}.action\`
  BAD: "agent.mass_actions" + entityType + ".action"
  GOOD: entityType === "ticket" ? "agent.mass_actions.ticket.action" : "agent.mass_actions.articles.action"
  `,
  nodeContainsConcatenatedString(node, context, valueNode, messageId) {
    // { id: "foo" + "bar" } or { id: "foo" + bar } or { id: foo + bar }
    if (valueNode.type === "BinaryExpression" && valueNode.operator === "+") {
      context.report({
        node,
        messageId,
      });
      return;
    }
    if (valueNode.type === "TemplateLiteral") {
      // { id: `${foo}${bar}` }
      if (valueNode.expressions.length > 1) {
        context.report({
          node,
          messageId,
        });
        return;
      }
      // { id: `${foo}${bar}` }
      if (valueNode.quasis.length > 2) {
        context.report({
          node,
          messageId,
        });
        return;
      }
      // { id: `${bar}foo` }
      if (valueNode.quasis.some(({ type, value }) => type === "TemplateElement" && value.raw)) {
        context.report({
          node,
          messageId,
        });
        return;
      }
    }
  },

  valueNodeIsStringLiteral(node, context, valueNode, messageId) {
    // Anything that's no just { id:  "foo" }
    if (valueNode.type !== "Literal") {
      // All these will error
      // { id: "foo" + "bar" } or { id: "foo" + bar } or { id: foo + bar }
      // { id: `foo` }
      // { id: `${foo}${bar}` }
      // { id: `${bar}foo` }
      context.report({
        node,
        messageId,
      });
    }
  },
};
