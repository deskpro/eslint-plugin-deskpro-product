# Styled TSpan element attributes must contain 'as' (`@deskpro/deskpro-product/styled-tspan-must-have-as-attribute`)

<!-- end auto-generated rule header -->

Deskpro-UI will try to infer what tag type TSpan should use from it's `type` attribute. However, if a TSpan is `styled()` and then has it's attributes set with a `attrs()` method, this will override the logic that handles this in DP-UI. To that end, we have to ensure that any `attrs()` methods return attributes with an `as` prop.

## Rule Details

Examples of **incorrect** code for this rule:

```jsx
styled(TSpan).attrs({ type: "h1" });
styled(TSpan).attrs(() => ({ type: "h1" }));
```

Examples of **correct** code for this rule:

```jsx
styled(TSpan).attrs({ type: "h1", as: "h1" });
styled(TSpan).attrs(() => ({ type: "h1", as: "h1" }));
```
