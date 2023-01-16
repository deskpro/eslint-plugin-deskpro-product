# Disallow concatenation of formatMessage id (`@deskpro/deskpro-product/no-concatenated-formatMessage-id`)

<!-- end auto-generated rule header -->

We have a cleanup script that runs occassionally to remove unused translation keys from the language files (resources/language/messages). 
If you break up the translation key with concatenation, then the cleanup script won't find the translation key in the codebase and will remove it from the language files.
Solution: if your translation key is dynamic then use a switch statement or ternary 

## Rule Details

This rule aims to prevent concatenation of translate id keys.

Examples of **incorrect** code for this rule:

```js
intl.formatMessage(`agent.mass_actions.${entityType}.action`);
intl.formatMessage("agent.mass_actions" + entityType + ".action");
```

Examples of **correct** code for this rule:

```js
intl.formatMessage({ id: entityType === "ticket" ? "agent.mass_actions.ticket.action" : "agent.mass_actions.articles.action" });
```
