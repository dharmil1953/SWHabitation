import { SchemaTypeDefinition } from "sanity";
import { toPlainText } from '@portabletext/react'

export default {
    name: "contactUsSection",
    title: "Contact Us Section",
    type: "object",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "richText"
        },
        {
            name: "image",
            title: "Image",
            type: "customImage",
        },
        {
            name: "companyEmailId",
            title: "Company Email ID",
            type: "string"
        },
        {
            name: "companyPhoneNumber",
            title: "Company Phone Number",
            type: "string"
        }
    ],
    preview: {
        select: {
            title: 'title.custom_rich_text',
        },
        prepare(select) {
            const { title } = select
            if (!title) {
                return {
                    title: 'Contact Us Section',
                }
            }
            const headingText = toPlainText(title)
            return {
                title: headingText,
            }
        },
    },
} as SchemaTypeDefinition