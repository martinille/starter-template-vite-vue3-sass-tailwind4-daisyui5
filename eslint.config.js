/**
 * ESLint configuration ("yarn lint", "yarn lint:fix").
 *
 * Flat config format. The `rules` block turns off the formatting rules that fight
 * with this template's style (tabs, attributes on one line) and turns on a few
 * correctness rules - drop or extend it to taste.
 *
 * Docs: https://eslint.org/docs/latest/use/configure/
 *       https://eslint.vuejs.org/
 */
import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility';
import globals from 'globals';

export default [
	{ ignores: ['dist/**', 'coverage/**', 'node_modules/**'] },
	js.configs.recommended,
	...pluginVue.configs['flat/recommended'],
	...pluginVueA11y.configs['flat/recommended'],
	{
		files: ['**/*.{js,vue}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: { ...globals.browser, ...globals.node },
		},
		rules: {
			'no-empty': ['error', { allowEmptyCatch: true }],
			'prefer-const': 'error',
			eqeqeq: 'error',
			'vue/require-default-prop': 'off',
			'vue/multi-word-component-names': 'off',
			'vue/max-attributes-per-line': 'off',
			'vue/singleline-html-element-content-newline': 'off',
			'vue/html-indent': ['warn', 'tab'],
			'vue/html-self-closing': 'off',
			'vuejs-accessibility/label-has-for': [
				'error',
				{ required: { some: ['nesting', 'id'] } },
			],
		},
	},
];
