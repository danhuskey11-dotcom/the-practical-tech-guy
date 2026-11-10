export const categories = [
	{ slug: 'windows', name: 'Windows' },
	{ slug: 'microsoft-365', name: 'Microsoft 365' },
	{ slug: 'hardware', name: 'Hardware' },
	{ slug: 'networking', name: 'Networking' },
	{ slug: 'software', name: 'Software' },
	{ slug: 'security', name: 'Security' },
	{ slug: 'ai', name: 'AI' },
] as const;

export type CategorySlug = (typeof categories)[number]['slug'];

export function getCategoryName(slug: string): string {
	return categories.find((category) => category.slug === slug)?.name ?? slug;
}