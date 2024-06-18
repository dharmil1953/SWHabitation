import { toPlainText } from "@portabletext/react";
import { SchemaTypeDefinition } from "sanity";

export default {
  name: "privacyTermsAndConditionSection",
  title: "Privacy Terms And Condition Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "richText",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle:"content.custom_rich_text"
    },
    prepare: ({ title,subtitle }) => {
      const SubTitle = toPlainText(subtitle)
      return {
        title: title && title,
        subtitle:SubTitle && SubTitle
      };
    },
  },
} as SchemaTypeDefinition;
