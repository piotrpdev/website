import { error, redirect } from '@sveltejs/kit';
import { postsPerPage } from '$lib/config';
import fetchPosts from '$lib/assets/js/fetchPosts';

export const load = async ({ url, params }) => {
	try {
		const page =
			params.page && !isNaN(params.page) && !isNaN(parseInt(params.page))
				? parseInt(params.page)
				: 1;
		const { category } = params;

		// Prevents duplication of page 1 as the index page
		if (page <= 1) {
			throw redirect(301, `/projects/category/${category}`);
		}

		let offset = page * postsPerPage - postsPerPage;

		const totalPostsRes = await fetch(`${url.origin}/api/posts/count.json`);
		const { total } = await totalPostsRes.json();
		const { posts } = await fetchPosts({ offset, page });

		return {
			posts,
			page,
			category,
			totalPosts: total
		};
	} catch (err) {
		if (err.status === 301) throw redirect(301, err.location);
		throw error(404, err.message);
	}
};