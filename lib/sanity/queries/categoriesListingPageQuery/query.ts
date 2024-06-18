import { groq } from "next-sanity";
import { handleSanityRequestError } from "../../utils";
import { layoutProps, seo } from "../helperQueries";
import { blogsCardFields } from "../helper/globalFields";
import { heroSectionFields } from "../helper/sectionFields";
const groqQuery = groq`*[_type == "category" && slug.current==$slug]{
_type,
_id,
"layoutProps":${layoutProps},
"slug":slug.current,
${seo},
"pageBuilder":*[_type == "page" && slug.current=="blogs"][0].pageBuilder[]->{
_type,
content["heroSection" == @._type]{
${heroSectionFields}
},
},
"categoryTitle":title,
"allBlogs":*[_type in ["blogs"]&& defined(slug.current) && $slug == category->slug.current]| order(_createdAt asc){
${blogsCardFields}
},
"similarBlogs":*[_type in ["blogs"]&& defined(slug.current) && category->slug.current != $slug]| order(_createdAt asc)[0..2]{
${blogsCardFields}
}
}`;

const handleError = (error: Error, mockData: unknown = undefined) =>
  handleSanityRequestError({
    error,
    mockData,
  });

export const query = {
  groqQuery,
  handleError,
};

