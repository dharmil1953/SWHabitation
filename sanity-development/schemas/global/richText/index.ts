import CodeHeading from "../../../components/CodeHeading";
import SectionHeading from "../../../components/SectionHeading";

export default {
  name: "richText",
  title: "Rich Text",
  type: "object",
  fields: [
    {
      name: "custom_rich_text",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading1", value: "h1" },
            { title: "Heading2", value: "h2" },
            { title: "Heading3", value: "h3" },
            { title: "Heading4", value: "h4" },
            { title: "Heading5", value: "h5" },
            { title: "Heading6", value: "h6" },
            { title: "Quote", value: "blockquote" },
            {
              title: "Section Heading",
              value: "section-heading",
              component: SectionHeading,
            },
            {
              title: "Code Heading",
              value: "code-heading",
              component: CodeHeading,
            },
          ],
          marks: {
            annotations: [
              { name: "color", title: "Color", type: "color" },

              {
                name: 'externalLink',
                type: 'object',
                title: 'External link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL'
                  }
                ]
              },
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal link',
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    title: 'Reference',
                    to: [
                      { type: 'blogs' },
                      { type: 'resources' },
                      { type: "stories" },
                      { type: "page" },
                      { type: "category" }
                    ],
                  },
                ],
              },
            ],
          },
        },
        { type: "button" },
        { type: "customImage" },
        { type: "authorQoute" },
        { type: "table" },
        { type: "conclusion" },
        { type: "featureSection" },
        { type: "faqSection" },
        { type: "readMoreSection" },
        { type: "codeBlockSection" },
      ],
    },
  ],
};









