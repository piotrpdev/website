export const load = async ({ fetch }) => {
	const postRes = await fetch(`/api/posts.json`);
	const { posts } = await postRes.json();

	const totalRes = await fetch(`/api/posts/count.json`);
	const { total } = await totalRes.json();

	return { posts, total };
};
