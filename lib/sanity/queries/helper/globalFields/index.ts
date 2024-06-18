import { imageFields } from "../imageFields";
import { linkFields } from "../linkFields";

export const buttonFields = /* groq */ `
_type,
label,
link{
${linkFields}
},
`;

export const authorFields = /* groq */ `
_type,
name,
bio,
slug,
link{
${linkFields}
},
`;
export const categoryFields = /* groq */ `
_id,
order,
_type,
title,
slug,
image{
${imageFields}
}
`;
export const blogFilterFields = /* groq */ `
_id,
_type,
slug,
title
`;
export const blogsCardFields = /* groq */ `
_id,
_type,
hasPopular,
hasRecommended,
slug,
image{
${imageFields}
},
title,
blogFilter->{
${blogFilterFields}
},
"searchDescription":pt::text(description.custom_rich_text),
"keywords":seo.keywords
`;
export const resourceFilterFields = /* groq */ `
_id,
_type,
slug,
title
`;
export const resourceCardFields = /* groq */ `
_type,
_id,
hasPopular,
hasRecommended,
title,
"searchDescription":pt::text(description.custom_rich_text),
"keywords":seo.keywords,
image{
${imageFields}
},
slug,
backgroundColor,
author->{
${authorFields}
},
resourceFilter->{
${resourceFilterFields}
},
`;
export const recommendedResourcesFields = /* groq */ `
_type,
_id,
title,
slug,
author->{
${authorFields}
},
resourceFilter->{
${resourceFilterFields}
}
`;
export const recommendedStoriesFields = /* groq */ `
_type,
_id,
slug,
image{
${imageFields}
},
title
`;
export const recommendedBlogsFields = /* groq */ `
_type,
_id,
slug,
image{
${imageFields}
},
title,
blogFilter->{
${blogFilterFields}
},
`;
export const storyCardFields = /* groq */ `
_id,
_type,
slug,
hasPopular,
hasRecommended,
image{
${imageFields}
},
title,
"searchDescription":pt::text(description.custom_rich_text),
"keywords":seo.keywords
`;
export const authorQouteFields = /* groq */ `
_type,
description,
author->{
${authorFields}
}
`;
export const labelLinkFields = /* groq */ `
_type,
label,
link{
${linkFields}
},
`;
export const richTextFields = /* groq */ `
_type,
custom_rich_text,
"authorQoute":custom_rich_text["authorQoute"==@._type][0]{
"backgroundColor":^.^.backgroundColor,
${authorQouteFields}
},
"codeBlockSection":custom_rich_text["codeBlockSection"==@._type][0]{
description,
},
"richTextLink":custom_rich_text[@._type == "block"].markDefs[@._type == "internalLink"]{
_type,
"slug" : reference->.slug.current,
"pageType" : reference->._type, 
"id":  reference->._id
},
"featureSection":custom_rich_text["featureSection"==@._type][0]{
_type,
featuresLists[]{
_type,
description,
title,
image{
${imageFields}
},
},
},
"faqSection":custom_rich_text["faqSection"==@._type][0]{
_type,
title,
description,
questionAndAnswers[]{
_type,
question,
answer,
},
},
"readMoreSection":custom_rich_text["readMoreSection"==@._type][0]{
_type,
"post":post->{
_type,
_id,
title,
slug,
},
},
"conclusion":custom_rich_text["conclusion"==@._type][0]{
_type,
"backgroundColor":^.^.backgroundColor,
description,
}
`;
export const conclusionFields = /* groq */ `
_type,
description{
${richTextFields}
}
`;

export const newsLetterFields = /* groq */ `
_type,
inputPlaceholder,
title,
subscribeButton,
description
`;
