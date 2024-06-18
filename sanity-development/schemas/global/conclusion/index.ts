import { toPlainText } from "@portabletext/react";
import { SchemaTypeDefinition } from "sanity";

export default {
    name: "conclusion",
    title: "Conclusion",
    type: "object",
    fields: [
        {
            name: "description",
            title: "Description",
            type: "richText",
        },
    ],
    preview: {
        select: {
            description: "description.custom_rich_text",
        },
        prepare: ({ description }) => {
            const getDescription = description ? toPlainText(description) : null
            return {
                title: getDescription,
            };
        },
    },
} as SchemaTypeDefinition;
