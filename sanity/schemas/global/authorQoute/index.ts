import { SchemaTypeDefinition } from "sanity";

export default {
  name: "authorQoute",
  title: "Author Qoute",
  type: "object",
  fields: [
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
      options: {
        disableNew: true,
      },
    },
  ],
  preview: {
    select: {
      title: "author.name",
      subtitle: "author.bio",
      description: "description",
    },
    prepare: ({ title, subtitle, description }) => {
      if (!title) {
        return {
          title: "Author is  Not Selected",
          subtitle: description,
        };
      }
      return {
        title: `${title} ${subtitle}`,
        subtitle: description,
      };
    },
  },
} as SchemaTypeDefinition;
