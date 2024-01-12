module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
}

// build / package
// deploy
// concatenated
// minification
// uglification
// js bundle 
// css bundle


/* 
1. Introduction
2. createElement
3. JSX
4. component (function/class, input, output, state)
5. conditional rendering
6. render lists
7. class
8. state, setState
9. migration
10. axios, async 
11. paginatation
12. views 
13. searching
14. sorting
15. product detail 
16. Routing, SPA
17. Life cycle methods
18. Hooks
19. build 
20. deploy 
21. Add product, forms, validations (formik)


22. Calculator
23. Cart 
24. Reviews
*/