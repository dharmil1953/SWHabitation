import { SchemaTypeDefinition, defineField } from "sanity";

export default {
  name: "blogFilter",
  title: "Blog Filter",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        slugify: (input) => {
          let slug = input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-zA-Z0-9-]/g, "")
            .slice(0, 200);
          slug = slug.endsWith("-") ? slug.slice(0, -1) : slug;
          return slug.replace(/\/{2,}/g, "/");
        },
      },
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(select) {
      const { title } = select;
      if (!title) {
        return {
          title: "Blog Filter",
        };
      }
      return {
        title: title,
      };
    },
  },
} as SchemaTypeDefinition;
