import { SchemaTypeDefinition } from "sanity";

export default {
    name: "codeBlockSection",
    title: "Code Block Section",
    type: "object",
    fields: [
        {
            name: "description",
            title: "Description",
            type: "text",
        },
    ],
    preview: {
        select: {
            description: "description",
        },
        prepare: ({ description }) => {

            return {
                title: description
            };
        },
    },
} as SchemaTypeDefinition;
