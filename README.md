# eslint-plugin-deskpro

Deskpro specific eslint rules

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `@deskpro/eslint-plugin-deskpro-product`:

```sh
npm install @deskpro/eslint-plugin-deskpro-product --save-dev
```

## Usage (locally)

Add `@deskpro/eslint-plugin-deskpro-product` to your dev dependencies. Use the `link:../../../` format if you're running it locally - you'll need to re-install it on every change.

Add `@deskpro/eslint-plugin-deskpro-product` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["@deskpro/deskpro-product"]
}
```

Then configure the rules you want to use under the rules section in `.eslintrc.js`

```json
{
  "rules": {
    "@deskpro/deskpro-product/no-concatenated-formatMessage-id": "error",
    "@deskpro/deskpro-product/no-concatenated-translate-id": "error"
  }
}
```

## Rules

<!-- begin auto-generated rules list -->

🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                                                                                     | Description                                        | 🔧 |
| :--------------------------------------------------------------------------------------- | :------------------------------------------------- | :- |
| [no-concatenated-formatMessage-id](docs/rules/no-concatenated-formatMessage-id.md)       | Disallow concatenation of formatMessage id         |    |
| [no-concatenated-translate-id](docs/rules/no-concatenated-translate-id.md)               | Disallow concatenation of Translate id             |    |
| [styled-tspan-must-have-as-attribute](docs/rules/styled-tspan-must-have-as-attribute.md) | Styled TSpan element attributes must contain 'as'. | 🔧 |

<!-- end auto-generated rules list -->
