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

## Usage

Add `@deskpro/eslint-plugin-deskpro-product` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "@deskpro/deskpro-product"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@deskpro/deskpro-product/no-concatenated-formatMessage-id": "error",
        "@deskpro/deskpro-product/no-concatenated-translate-id": "error",
    }
}
```

## Rules

<!-- begin auto-generated rules list -->

| Name                                                                               | Description                                |
| :--------------------------------------------------------------------------------- | :----------------------------------------- |
| [no-concatenated-formatMessage-id](docs/rules/no-concatenated-formatMessage-id.md) | Disallow concatenation of formatMessage id |
| [no-concatenated-translate-id](docs/rules/no-concatenated-translate-id.md)         | Disallow concatenation of Translate id     |

<!-- end auto-generated rules list -->


