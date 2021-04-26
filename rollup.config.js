const production = !process.env.ROLLUP_WATCH;

import sveltePreprocess from 'svelte-preprocess';
export default {
	preprocess: {
		svelte: {
			preprocess: sveltePreprocess({
				sourceMap: !production,
				postcss: {
					plugins: [require('tailwindcss'), require('autoprefixer')]
				}
			})
		}
	}
};
