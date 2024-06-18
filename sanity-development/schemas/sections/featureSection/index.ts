import { SchemaTypeDefinition } from "sanity";

export default {
  name: "featureSection",
  title: "Feature Section",
  type: "object",
  fields: [
    {
      name: "featuresLists",
      title: "Features Lists",
      type: "array",
      of: [{ type: "imageTitleDescription" }],
    },
  ],
  preview: {
    prepare() {
      let title = "Feature Section";
      return {
        title: title,
      };
    },
  },
} as SchemaTypeDefinition;
