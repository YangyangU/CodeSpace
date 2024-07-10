# my first next app

# eslint

```json
{
  "extends": ["next", "next/core-web-vitals", "eslint:recommended"],
  "globals": {
    "React": "readonly"
  },
  "rules": {
    "no-unused-vars": [1, { "args": "after-used", "argsIgnorePattern": "^_" }]
  }
}
```

# prettier
yarn add -D prettier

```.prettierrc
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
```

```.prettierignore
.yarn
.next
dist
node_modules
```

```json
"scripts: {
  ...
  "prettier": "prettier --write ."
}
```


# husky

yarn add -D husky

npx husky init

echo "yarn lint" > .husky/pre-commit

# linter

yarn add -D @commitlint/config-conventional @commitlint/cli

# vscode

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.organizeImports": true
  }
}
```
