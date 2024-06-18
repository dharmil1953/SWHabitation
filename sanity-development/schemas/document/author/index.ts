import { SchemaTypeDefinition, defineField } from "sanity";

export default {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "bio",
      title: "Bio",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
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
      title: "name",
      description: "bio",
    },
    prepare(select) {
      const { title,description } = select;
      if (!title) {
        return {
          title: "Author",
          subtitle: description,
        };
      }
      return {
        title: title,
        subtitle: description,
      };
    },
  },
} as SchemaTypeDefinition;
