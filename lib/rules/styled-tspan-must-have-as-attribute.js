const message =
  "If you call .attrs() on a styled TSpan you'll knock out the action in dp-ui that sets the span's 'as' attribute to a semantic tag (styled-component's limitation). When calling attrs() in this way, make sure you return an object with 'as' set to something useful.";

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Styled TSpan element attributes must contain 'as'.",
    },
    fixable: "code",
    schema: [],
    messages: {
      noAsAttributeInStyledTSpan: message,
    },
  },
  create(context) {
    return {
      CallExpression(node) {
        if (node?.callee?.type === "MemberExpression") {
          if (node?.callee?.object?.callee?.name === "styled") {
            if (node?.callee?.object?.arguments?.[0]?.name === "TSpan") {
              if (node?.callee?.property?.name === "attrs") {
                const args = node?.arguments?.[0];

                if (!args) return;

                if (args?.type === "ObjectExpression") {
                  if (
                    !args?.properties ||
                    !args?.properties?.find((prop) => prop?.key?.name === "as")
                  ) {
                    return context?.report({
                      loc: args?.loc,
                      messageId: "noAsAttributeInStyledTSpan",
                    });
                  }
                }

                if (
                  args?.type === "ArrowFunctionExpression" &&
                  args?.body?.type === "ObjectExpression" &&
                  (!args?.body?.properties ||
                    !args?.body?.properties?.find(
                      (prop) => prop?.key?.name === "as"
                    ))
                ) {
                  return context.report({
                    loc: args?.body?.loc,
                    messageId: "noAsAttributeInStyledTSpan",
                  });
                }
              }
            }
          }
        }
      },
    };
  },
};
