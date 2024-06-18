import { SchemaTypeDefinition, defineField } from "sanity";

export default {
  name: "newsLetter",
  title: "News Letter",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "inputPlaceholder",
      title: "Input Placeholder",
      type: "string",
    },
    {
      name: "subscribeButton",
      title: "Subscribe Button",
      type: "string",
    },
  ],
} as SchemaTypeDefinition;
