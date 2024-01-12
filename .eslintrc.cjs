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
var myLongVariableName       =           100;
var a=100;


function fn(myLongVariableName1, myLongVariableName2){

}

function fn(a,b){
  
}

var x      =      100;

// downloaded
// client side
// api
var x=10;