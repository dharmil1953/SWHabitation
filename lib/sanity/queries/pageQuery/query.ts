import { groq } from "next-sanity";
import { pageBuilder, seo, layoutProps } from "../helperQueries";
import { handleSanityRequestError } from "../../utils";

const groqQuery = groq`*[_type == "page" && slug.current==$slug]{
_type,
"layoutProps":${layoutProps},
"slug":slug.current,
${seo},
${pageBuilder}
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
