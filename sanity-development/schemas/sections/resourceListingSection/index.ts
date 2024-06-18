import { HiInformationCircle } from "react-icons/hi";
import { alignmentOptions } from "../../../constant/select-options";
import { SchemaTypeDefinition } from "sanity";

export default {
  name: "resourceListingSection",
  title: "Resource Listing Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "This field is only used for CMS.",
    },
    {
      name: 'align',
      title: 'Align',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: { list: alignmentOptions, direction: 'horizontal', layout: 'radio' },
    },
    {
      name: "myCustomNote",
      title: "Important!",
      description: "All Popular Resources will be included automatically",
      type: "note",
      options: {
        icon: HiInformationCircle,
        tone: "caution",
      },
    },
  ],
} as SchemaTypeDefinition