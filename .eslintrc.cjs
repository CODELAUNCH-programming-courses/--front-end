module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // Використовуємо парсер для TypeScript
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Інтеграція з Prettier
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error', // Видає помилку, якщо код не відформатовано
    'react/react-in-jsx-scope': 'off', // Для React 17+ (імпорт React не потрібен)
    '@typescript-eslint/no-unused-vars': ['warn'], // Попередження про невикористані змінні
  },
  settings: {
    react: {
      version: 'detect', // Автоматичне визначення версії React
    },
  },
}
