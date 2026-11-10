export const reviewCategories = [
	{
		slug: 'hardware',
		name: 'Hardware',
		description:
			'Practical reviews of laptops, computers, docks, monitors, accessories, and other technology hardware.',
	},
	{
		slug: 'software',
		name: 'Software',
		description:
			'Hands-on reviews of productivity software, security tools, backup solutions, AI tools, and other applications.',
	},
	{
		slug: 'services',
		name: 'Services',
		description:
			'Reviews of cloud services, subscriptions, online platforms, Microsoft 365 plans, and other technology services.',
	},
] as const;

export type ReviewCategorySlug =
	(typeof reviewCategories)[number]['slug'];

export function getReviewCategoryName(slug: string): string {
	return (
		reviewCategories.find(
			(category) => category.slug === slug,
		)?.name ?? slug
	);
}

export function getReviewCategoryDescription(
	slug: string,
): string {
	return (
		reviewCategories.find(
			(category) => category.slug === slug,
		)?.description ?? ''
	);
}