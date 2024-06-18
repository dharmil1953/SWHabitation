import { SchemaTypeDefinition } from "sanity";

export default {
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "This field is only used for CMS.",
    },
    {
      name: "navItems",
      title: "Nav Items",
      type: "array",
      of: [{ type: "navItem" }],
    },
    {
      name: "socialMediaLinks",
      title: "Social Media Links",
      type: "array",
      of: [{ type: "navItem" }],
    },
  ],
} as SchemaTypeDefinition;
