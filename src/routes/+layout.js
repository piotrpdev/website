export const load = async ({ url }) => {
	/**
	 * This fetch call is not used in this file, but the route won't be pre-rendered
	 * and routed properly unless it's called inside a `load` function. ¯\_(ツ)_/¯
	 * */
	// eslint-disable-next-line no-unused-vars
	const rss = await fetch(`${url.origin}/api/rss.xml`);

	return {
		path: url.pathname
	};
};
