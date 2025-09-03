import { z, defineCollection, type ImageFunction } from "astro:content";

const projectSchema = ({ image }: { image: ImageFunction }) =>
    z.object({
        title: z.string(),
        short: z.string(),
        link: z.string().url().optional(),
        image: image(),
        imageAlt: z.string(),
        order: z.number(),
    });

const projectsCollection = defineCollection({
    type: "content",
    schema: projectSchema,
});

const researchCollection = defineCollection({
    type: "content",
    schema: projectSchema,
});

export const collections = {
    projects: projectsCollection,
    research: researchCollection,
};
