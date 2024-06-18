import { HiInformationCircle } from "react-icons/hi";
import { SchemaTypeDefinition } from "sanity";

export default {
  name: "allResourcePostSection",
  title: "All Resource Post Section",
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
      description: "All Resources Will be Included Automatically.",
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
