export const comparisonCategories = [
	{
		slug: 'hardware',
		name: 'Hardware',
		description:
			'Side-by-side comparisons of laptops, docks, monitors, accessories, networking equipment, and other technology hardware.',
	},
	{
		slug: 'software',
		name: 'Software',
		description:
			'Practical comparisons of productivity apps, security tools, backup software, AI tools, and other applications.',
	},
	{
		slug: 'services',
		name: 'Services',
		description:
			'Comparisons of Microsoft 365 plans, cloud services, subscriptions, hosting platforms, VPNs, and other online technology services.',
	},
] as const;

export type ComparisonCategorySlug =
	(typeof comparisonCategories)[number]['slug'];

export function getComparisonCategoryName(
	slug: string,
): string {
	return (
		comparisonCategories.find(
			(category) => category.slug === slug,
		)?.name ?? slug
	);
}

export function getComparisonCategoryDescription(
	slug: string,
): string {
	return (
		comparisonCategories.find(
			(category) => category.slug === slug,
		)?.description ?? ''
	);
}