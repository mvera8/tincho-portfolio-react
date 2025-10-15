// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
	{ ignores: ['dist/**', 'build/**'] },
	js.configs.recommended,
	reactPlugin.configs.flat.recommended,
	{
		files: ['**/*.{js,jsx}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: { ...globals.browser, ...globals.es2021 },
			parserOptions: { ecmaFeatures: { jsx: true } },
		},
		settings: { react: { version: '18.2' } },
		plugins: { react: reactPlugin, 'react-hooks': reactHooks, 'react-refresh': reactRefresh },
		rules: {
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
			'react/jsx-no-target-blank': 'off',
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'react/react-in-jsx-scope': 'off',      // <- clave
			indent: ['error', 'tab'],
			quotes: ['error', 'single', { avoidEscape: true }],
		},
	},
];
