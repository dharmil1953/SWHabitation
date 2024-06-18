import { SchemaTypeDefinition } from "sanity"

export default {
    name: "thankYouSection",
    title: "Thank You Section",
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
          imageUrl: "image.image",
          title: "image.alt",
        },
        prepare(select) {
          const { imageUrl, title } = select;
          if (!title) {
            return {
              title: "Thank You Section",
              media: imageUrl && imageUrl,
            };
          }
          return {
            title: title,
            media: imageUrl && imageUrl,
          };
        },
      },
    } as SchemaTypeDefinition;
