import { HiInformationCircle } from "react-icons/hi";
import { SchemaTypeDefinition } from "sanity";

export default {
  name: "allBlogPostSection",
  title: "All Blog Post Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "myCustomNote",
      title: "Important!",
      description: "All Blogs Will be Included Automatically.",
      type: "note",
      options: {
        icon: HiInformationCircle,
        tone: "caution",
      },
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(select) {
      const { title } = select;
      if (!title) {
        return {
          title: "title",
        };
      }
      return {
        title: title,
      };
    },
  },
} as SchemaTypeDefinition;
