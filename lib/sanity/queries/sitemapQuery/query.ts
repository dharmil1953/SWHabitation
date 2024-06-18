import { groq } from "next-sanity";
import { handleSanityRequestError } from "../../utils";
const normalPage = /* groq */ `*[_type in ["page","blogs","resources","stories"] && defined(slug.current) && ! (slug.current in ["/","404"])]{
(_type == "page") => {
    "slug" : slug.current
  },
  (_type == "blogs") => {
      "slug" : "blogs/" + slug.current
  },
   (_type == "resources") => {
      "slug" : "resources/" + slug.current
  },
   (_type == "stories") => {
      "slug" : "story/" + slug.current
  },
   (_type == "category") => {
      "slug" : "categories/" + slug.current
  },
  _updatedAt
}`;

const groqQuery = groq`${normalPage}`;

const handleError = (error: Error, mockData: unknown = undefined) =>
  handleSanityRequestError({
    error,
    mockData,
  });

export const query = {
  groqQuery,
  handleError,
};
