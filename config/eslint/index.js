/**
 * Expose estlint config
 */
module.exports = {
  extends: [
    'plugin:jsx-a11y/recommended',
    'airbnb-base',
  ],
  plugins: [
    'react',
    'react-hooks',
  ],
  env: {
    // airbnb config already has { node: true, es6: true }, so just allow to use the `browser` stuff
    browser: true,
  },
  rules: {
    'max-len': ['warn', 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
    }],
    'no-param-reassign': ['error', { props: false }],
    'class-methods-use-this': 'off',
    'react/forbid-foreign-prop-types': ['warn'],
    'react/no-unused-prop-types': ['warn'],
    'react/prop-types': ['warn'],
    'react/jsx-filename-extension': 'off',
    'react-hooks/rules-of-hooks': ['error'],
    'react-hooks/exhaustive-deps': ['warn'],
    'no-underscore-dangle': ['error', { allowAfterThis: true, allow: ['__PRELOADED_STATE__'] }],
    'arrow-parens': 'off',
    'import/order': ['warn'],
    'object-curly-newline': 'off',
    'react/button-has-type': 'off',
    /* Transitional rules */
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-closing-tag-location': ['warn'],
    'react/jsx-wrap-multilines': 'warn',
    'react/jsx-fragments': 'warn',
    'react/jsx-curly-newline': 'warn',
    'react/jsx-no-target-blank': 'warn',
    'react/no-unused-state': 'warn',
    'react/require-default-props': 'warn',
    'react/default-props-match-prop-types': 'warn',
    'react/jsx-tag-spacing': 'warn',
    'react/destructuring-assignment': 'warn',
    'react/no-access-state-in-setstate': 'warn',
    'prefer-object-spread': 'warn',
    'prefer-destructuring': 'warn',
    'import/no-unresolved': 'warn',
    'import/no-useless-path-segments': 'warn',
    'operator-linebreak': 'warn',
    'function-paren-newline': 'warn',
    'no-multiple-empty-lines': 'warn',
    'lines-between-class-members': 'warn',
    'max-classes-per-file': 'warn',
    'implicit-arrow-linebreak': ['warn', 'beside'],
    'no-redeclare': ['error', { builtinGlobals: false }],
    /* End of Transitional rules */
    camelcase: ['error', { properties: 'never' }],
    'import/no-extraneous-dependencies': 'warn',
    'no-unused-vars': 'warn',
  },
  settings: {
    'import/core-modules': [
      'core-js',
      'prop-types',
      'react',
      'react-declarative-head',
      'react-dom',
      'react-side-effect',
      'serialize-javascript',
    ],
  },
  parser: 'babel-eslint',
  overrides: [
    {
      files: ['*.spec.js'],
      env: {
        jest: true,
      },
    },
  ],
};
