import { SchemaTypeDefinition } from "sanity";

export default {
  name: "faqSection",
  title: "Faq Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "richText",
    },
    {
      name: "questionAndAnswers",
      title: "Question And Answers",
      type: "array",
      of: [{ type: "questionAndAnswer" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => {
      if (!title) {
        return {
          title: "Faq Section",
        };
      }
      return {
        title: title,
      };
    },
  },
} as SchemaTypeDefinition;
