import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const posts = (await getCollection('blog'))
		.filter((post) => !post.data.draft)
		.sort(
			(a, b) =>
				b.data.pubDate.valueOf() -
				a.data.pubDate.valueOf(),
		);

	const getPostLink = (post) => {
		switch (post.data.contentType) {
			case 'review':
				return `/reviews/${post.id}/`;

			case 'comparison':
				return `/comparisons/${post.id}/`;

			case 'guide':
			default:
				return `/guides/${post.id}/`;
		}
	};

	return rss({
		title: `${SITE_TITLE} - Latest Content`,
		description: SITE_DESCRIPTION,
		site: context.site,

		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: getPostLink(post),

			categories: [
				post.data.contentType,
				post.data.category,
				...post.data.tags,
			],
		})),

		customData: '<language>en-us</language>',
	});
}