import { groq } from "next-sanity";
export const allPageSlugsQuery = groq`
*[_type == "page" && defined(slug.current) && ! (slug.current in ["/","404"])][].slug.current`
export const allResourceDetailPageSlugsQuery = groq`
*[_type in [ "resources"]&& defined(slug.current)][].slug.current
`;
export const allBlogDetailPageSlugsQuery = groq`
*[_type in ["blogs"] && defined(slug.current)][].slug.current
`;
export const allStoryDetailPageSlugsQuery = groq`
*[_type in ["stories"] && defined(slug.current)][].slug.current
`;
export const categoriesSlugsQuery = groq`
*[_type == "category" && defined(slug.current)][].slug.current
`;