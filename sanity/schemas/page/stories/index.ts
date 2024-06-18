import { SchemaTypeDefinition } from "sanity";

export default {
  name: "stories",
  title: "Stories",
  type: "document",
  groups: [
    {
      name: "main",
      title: "Main",
      default: true,
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    {
      name: "hasPopular",
      title: "Has Popular",
      type: "boolean",
      group: "main",
      initialValue: false,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "hasRecommended",
      title: "Has Recommended",
      type: "boolean",
      group: "main",
      initialValue: false,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      group: "main",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "main",
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
      name: "description",
      title: "Description",
      type: "richText",
      group: "main",
    },
   
    {
      name: "image",
      title: "Image",
      type: "customImage",
      group: "main",
    },
    {
      name: "publishDate",
      title: "Publish Date",
      type: "date",
      group: "main",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
      options: { disableNew: true },
      group: "main",
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      options: { disableNew: true },
      group: "main",
    },
    {
      name: "content",
      title: "Content",
      type: "richText",
      group: "main",
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
    },
  ],
  preview: {
    select: {
      imageUrl: "image",
      title: "title",
    },
    prepare(select) {
      const { imageUrl, title } = select;
      if (!title) {
        return {
          title: "Stories Detail",
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
