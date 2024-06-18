import { SchemaTypeDefinition } from "sanity";

export default {
    name: "readMoreSection",
    title: "Read More Section",
    type: "object",
    fields: [
        {
            name: "post",
            title: "Post",
            type: "reference",
            to: [
                { type: "blogs" },
                { type: 'resources' },
                { type: "stories" },],
            options: {
                disableNew: true,
            },
        },
    ],
    preview: {
        prepare() {
            let title = "Read More Section";
            return {
                title: title,
            };
        },
    },
} as SchemaTypeDefinition;
