import { groq } from "next-sanity";
import { layoutProps, seo } from "../helperQueries";
import { FetchSanityQuery, handleSanityRequestError } from "../../utils";
import { makeSanityQuery } from "../../utils/makeSanityQuery";
import { imageFields } from "../helper/imageFields";
import {authorFields, recommendedStoriesFields, richTextFields } from "../helper/globalFields";
const groqQuery = groq`*[_type in ["stories"]  && slug.current == $slug] {
_type,
_id,
"slug":slug.current,
"layoutProps":${layoutProps},
${seo},
title,
author->{
${authorFields}
},
image{
${imageFields}
},
publishDate,
description{
${richTextFields}
},
content{
${richTextFields}
},
"sideContentTitles" : content.custom_rich_text["section-heading"==@.style].children[0].text,
"jsonLdContent": pt::text(description.custom_rich_text),
"recommendedStories":*[_type in ["stories"] && defined(slug.current) && slug.current != ^.slug.current] | order(_createdAt desc)[0..2]{
${recommendedStoriesFields}
}
}`;

const handleError = (error: Error, mockData: unknown = undefined) =>
  handleSanityRequestError({
    error,
    mockData,
  });

export const query: FetchSanityQuery = {
  groqQuery,
  handleError,
  makeGroqQuery: (fields, filters) => {
    return groq`*[_type in ["stories"] && defined(slug.current) ${filters ? `&& ${filters}` : ""
      }]{
     ${makeSanityQuery(fields)}
    }`;
  },
};
