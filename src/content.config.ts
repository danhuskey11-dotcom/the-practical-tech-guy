import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({
		base: './src/content/blog',
		pattern: '**/*.{md,mdx}',
	}),

	// Type-check article frontmatter.
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),

			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),

			heroImage: z.optional(image()),

			contentType: z
				.enum(['guide', 'review', 'comparison', 'news'])
				.default('guide'),

			category: z.enum([
				'windows',
				'microsoft-365',
				'hardware',
				'networking',
				'software',
				'security',
				'ai',
			]),

			reviewCategory: z
				.enum([
					'hardware',
					'software',
					'services',
				])
				.optional(),

			tags: z.array(z.string()).default([]),

			author: z.string().default('Dan Huskey'),

			affiliate: z.boolean().default(false),

			featured: z.boolean().default(false),

			draft: z.boolean().default(false),
		}),
});

export const collections = { blog };