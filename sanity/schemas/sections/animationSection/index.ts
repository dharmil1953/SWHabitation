import { SchemaTypeDefinition, defineField } from "sanity";

export default {
  name: "animationSection",
  title: "Animation Section",
  type: "object",
  fields: [
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "customImage" }],
    },
  ],
  preview: {
    prepare() {
      let title = "Animation Section"
      return {
        title: title,
      };
    },
  },
} as SchemaTypeDefinition;
