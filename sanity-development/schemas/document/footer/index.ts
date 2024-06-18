import { SchemaTypeDefinition } from "sanity";

export default {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "This field is only used for CMS.",
      type: "string",
    },
    {
      name: "footerLinks",
      title: "Footer Links",
      type: "array",
      of: [{ type: "labelLink" }],
    },
    {
      name: "socialLinks",
      title: "Social Media Links",
      type: "array",
      of: [{ type: "labelLink" }],
    },
    {
      name: "newsLetter",
      title: "News Letter",
      type: "reference",
      to: [{ type: "newsLetter" }],
      options: { disableNew: true },
    },
  ],
} as SchemaTypeDefinition;
