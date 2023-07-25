module.exports = {
  extends: ['@it-incubator/eslint-config'],
  rules: {
    'no-console': ['warn', {
      allow: ['warn', 'error']
    }],
    'no-nested-ternary': 'off',
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
}
