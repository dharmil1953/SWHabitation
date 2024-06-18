import { imageFields } from "../imageFields";
import {
  metaAttributesQuery,
  openGraphQuery,
  twitterQuery,
} from "./metaHelperQuery";

export const seofields = /* groq */ `
_type,
"jsonLdData":*[_type == "settings"][0]{
_id,
_type,
name,
description,
telePhone,
image{
${imageFields}  
},
},
metaTitle,
keywords,
metaDescription,
openGraph{
${openGraphQuery}
},
twitter{
${twitterQuery}
},
additionalMetaTags[]{
_type,
metaAttributes[]{
${metaAttributesQuery}     
}
}
`;
