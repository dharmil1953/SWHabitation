import { SchemaTypeDefinition } from "sanity";
export default {
  name: "fourZeroFourSection",
  title: "Four Zero Four Section",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "customImage",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
  preview: {
    select: {
      title: "title",
      image: "image",
      subtitle: "description",
    },
    prepare: ({ title, image, subtitle }) => {
      return {
        title: title || "Untitled",
        media: image && image,
        subtitle: subtitle && subtitle,
      };
    },
  },
} as SchemaTypeDefinition;
