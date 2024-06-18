import { SchemaTypeDefinition } from "sanity";
import { toPlainText } from "@portabletext/react";

export default {
  name: "homeHeroSection",
  title: "Home Hero Section",
  type: "object",
  fields: [
    {
      name: "headline",
      title: "Headline",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "richText",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
      options: { disableNew: true },
    },
    {
      name: "image",
      title: "Image",
      type: "customImage",
    },
  ],
  preview: {
    select: {
      title: "headline",
      description: "title.custom_rich_text",
      image: "image",
    },
    prepare: ({ title, description, image }) => {
      const getDescription = description ? toPlainText(description) : null;
      if (!title) {
        return {
          title: "Title",
          subtitle: getDescription,
          media: image && image,
        };
      }
      return {
        title: title,
        subtitle: getDescription,
        media: image && image,
      };
    },
  },
} as SchemaTypeDefinition;
