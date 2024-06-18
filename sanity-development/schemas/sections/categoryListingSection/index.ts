import { SchemaTypeDefinition } from "sanity";
import { HiInformationCircle } from "react-icons/hi";

export default{
    name:"categoryListingSection",
    title:"Category Listing Section",
    type:"object",
    fields:[
        {
            name:"title",
            title:"Title",
            type:"string"
        },
        {
            name: "myCustomNote",
            title: "Important!",
            description: "All categories will be included automatically",
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
      prepare: ({ title }) => {
        if (!title) {
          return {
            title: "Title",
          };
        }
        return {
          title: title,
        };
      },
    },

} as SchemaTypeDefinition