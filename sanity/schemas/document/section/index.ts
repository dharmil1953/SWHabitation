import { SchemaTypeDefinition } from "sanity";
import ArrayMaxItems from "../../../components/ArrayFunctions";
export default {
  name: "section",
  title: "Section",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "This field is only used for CMS.",
    },
    {
      name: "content",
      type: "array",
      components: { input: ArrayMaxItems },
      validation: (Rule) => Rule.max(1),
      of: [
      {type:"homeHeroSection"},
      {type:"heroSection"},
      {type:"resourceListingSection"},
      {type:"animationSection"},
      {type:"categoryListingSection"},
      {type:"allBlogPostSection"},
      {type:"allStoryPostSection"},
      {type:"allResourcePostSection"},
      {type:"contactUsSection"},
      {type:"privacyTermsAndConditionSection"},
      {type:"fourZeroFourSection"},
      ],
    },
  ],
} as SchemaTypeDefinition;
