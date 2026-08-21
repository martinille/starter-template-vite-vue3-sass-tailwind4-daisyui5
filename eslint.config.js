/**
 * ESLint configuration ("yarn lint", "yarn lint:fix").
 *
 * Flat config format. The `rules` block only turns off the opinionated
 * formatting rules that fight with this template's style (tabs, attributes on
 * one line) - drop or extend it to taste.
 *
 * Docs: https://eslint.org/docs/latest/use/configure/
 *       https://eslint.vuejs.org/
 */
import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';

export default [
	{ ignores: ['dist/**', 'coverage/**', 'node_modules/**'] },
	js.configs.recommended,
	...pluginVue.configs['flat/recommended'],
	{
		files: ['**/*.{js,vue}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: { ...globals.browser, ...globals.node },
		},
		rules: {
			'no-empty': ['error', { allowEmptyCatch: true }],
			'vue/multi-word-component-names': 'off',
			'vue/max-attributes-per-line': 'off',
			'vue/singleline-html-element-content-newline': 'off',
			'vue/html-indent': ['warn', 'tab'],
			'vue/html-self-closing': 'off',
		},
	},
];
