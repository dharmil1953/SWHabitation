import { SchemaTypeDefinition } from "sanity";

export default {
  name: "heroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "customImage",
    },
  ],
  preview: {
    select: {
      image: "image",
    },
    prepare: ({image }) => {
      let title = "Hero Section"
      return {
        title: title,
        media: image && image,
      };
    },
  },
} as SchemaTypeDefinition;
