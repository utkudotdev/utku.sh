import { z, defineCollection } from "astro:content";

const projectSchema =  z.object({
        title: z.string(),
        link: z.string().url().optional(),
        order: z.number(),
    })

const projectsCollection = defineCollection({
    type: "content",
    schema: projectSchema,
});

const researchCollection = defineCollection({
    type: "content",
    schema: projectSchema,
});

export const collections = {
    "projects": projectsCollection,
    research: researchCollection,
};
