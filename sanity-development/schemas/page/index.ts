import { SchemaTypeDefinition, defineField } from "sanity";

export default {
  name: "page",
  title: "Page",
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
      name: "title",
      title: "Title",
      type: "string",
      description: "This field is only used for CMS.",
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
      name: "pageBuilder",
      type: "array",
      of: [{ type: "reference", to: { type: "section" } }],
      group: "main",
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
    },
  ],
} as SchemaTypeDefinition;
