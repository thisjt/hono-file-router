import globals from 'globals';
import prettier from 'eslint-config-prettier';
import js from '@eslint/js';

export default [
	prettier,
	{
		files: ['**/*.js'],
		ignores: ['.env', '.env.*', '!.env.example', 'pnpm-lock.yaml'],
		languageOptions: {
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		rules: {
			...js.configs.recommended.rules,
			...{
				'no-undef': ['error', { typeof: true }],
				eqeqeq: 'error',
				'no-fallthrough': 'off',
				'no-case-declarations': 'off',
				'keyword-spacing': 'error',
				'max-len': [
					'error',
					{
						code: 200,
					},
				],
				'max-lines': [
					'error',
					{
						max: 400,
						skipComments: true,
						skipBlankLines: true,
					},
				],
				'max-lines-per-function': [
					'error',
					{
						max: 150,
						skipComments: true,
						skipBlankLines: true,
					},
				],
				quotes: ['error', 'single'],
				semi: ['error', 'always'],
				'comma-spacing': [
					'error',
					{
						before: false,
						after: true,
					},
				],
				'no-template-curly-in-string': 'error',
				'no-useless-return': 'error',
				'no-console': 'warn',
				'key-spacing': [
					'error',
					{
						beforeColon: false,
						afterColon: true,
					},
				],
				'max-depth': ['error', 6],
				'no-multiple-empty-lines': [
					'error',
					{
						max: 3,
					},
				],
				'no-trailing-spaces': 'error',
				'one-var-declaration-per-line': 'error',
				'no-var': 'error',
				'no-inner-declarations': 'off',
			},
		},
	},
];
