import { json } from '@sveltejs/kit';

export const prerender = true;

export const GET = async () => {
	const posts = import.meta.glob('$lib/posts/*.md');

	return json(Object.keys(posts).length);
};
