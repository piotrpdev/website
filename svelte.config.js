import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'
import preprocess from 'svelte-preprocess'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import rehypeToc from '@atomictech/rehype-toc'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Ensures both .svelte and .md files are treated as components (can be imported and used anywhere, or  used as pages)
	extensions: ['.svelte', '.md'],

	preprocess: [
		preprocess({
			scss: {
				// Ensures Sass variables are always available inside component <style> blocks as vars.$variableDefinedInFile
				prependData: `@use 'src/lib/assets/scss/vars';`
			},
		}),
		mdsvex({
			// The default mdsvex extension is .svx; this overrides that.
			extensions: ['.md'],

			// Adds IDs to headings, and anchor links to those IDs. Note: must stay in this order to work.
			rehypePlugins: [
				rehypeSlug,
				rehypeAutolinkHeadings,
				rehypeToc
			],
		}),
	],

	kit: {
    prerender: {
      default: true
    },
		adapter: adapter(),
	}
};

export default config;
