import { toPlainText } from "@portabletext/react";
import { SchemaTypeDefinition } from "sanity";

export default {
  name: "imageTitleDescription",
  title: "Image Title Description",
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
      type: "richText",
    },
  ],
  preview: {
    select: {
      imageUrl: "image",
      title: "title",
      description: "description.custom_rich_text",
    },
    prepare(select) {
      const { imageUrl, title, description } = select;
      const descriptionText = description ? toPlainText(description) : "";
      if (!title) {
        return {
          title: "Title",
          media: imageUrl && imageUrl,
          subtitle: descriptionText,
        };
      }
      return {
        title: title,
        media: imageUrl && imageUrl,
        subtitle: descriptionText,
      };
    },
  },
} as SchemaTypeDefinition;
