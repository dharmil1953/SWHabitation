import { SchemaTypeDefinition, defineField } from "sanity";

export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'This field will display the number of Category in order.',
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        slugify: (input) => {
          let slug = input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-zA-Z0-9-]/g, "")
            .slice(0, 200);
          slug = slug.endsWith("-") ? slug.slice(0, -1) : slug;
          return slug.replace(/\/{2,}/g, "/");
        },
      },
    },
    {
      name: "image",
      title: "Image",
      type: "customImage",
    },
  ],
  preview: {
    select: {
      title: "title",
      image: "image",
    },
    prepare(select) {
      const { title, image } = select;
      if (!title) {
        return {
          title: "Category",
          media: image && image,
        };
      }
      return {
        title: title,
        media: image && image,
      };
    },
  },
} as SchemaTypeDefinition;
