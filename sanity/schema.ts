import { type SchemaTypeDefinition } from "sanity";
import documentsTypes from "./schemas/document";
import globalTypes from "./schemas/global";
import sectionsTypes from "./schemas/sections";
import page from "./schemas/page";
import blogs from "./schemas/page/blogs";
import resources from "./schemas/page/resources";
import stories from "./schemas/page/stories";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    page,
    blogs,
    resources,
    stories,
    ...documentsTypes,
    ...globalTypes,
    ...sectionsTypes,
  ],
};

export default schema;
