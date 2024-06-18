import { SchemaTypeDefinition, defineField, defineType } from "sanity";

export default {
  name: "settings",
  title: "Settings",
  type: "document",
  groups: [
    {
      name: "layout",
      title: "Layout",
      default: true,
    },
    {
      name: "jsonLdData",
      title: "JsonLdData",
    },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "This field is only used for CMS.",
      group: "layout",
    },
    {
      name: "header",
      type: "reference",
      to: [{ type: "header" }],
      group: "layout",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "footer",
      type: "reference",
      to: [{ type: "footer" }],
      group: "layout",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "logo",
      title: "Logo",
      type: "customImage",
      group: "layout",
    },

    {
      name: "name",
      title: "Name",
      type: "string",
      group: "jsonLdData",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      group: "jsonLdData",
    },
    {
      name: "telePhone",
      type: "string",
      title: "TelePhone",
      group: "jsonLdData",
    },
    {
      name: "image",
      title: "Image",
      type: "customImage",
      group: "jsonLdData",
    },
  ],
} as SchemaTypeDefinition;
