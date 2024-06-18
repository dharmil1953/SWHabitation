import {
  authorFields,
  blogFilterFields,
  blogsCardFields,
  categoryFields,
  resourceCardFields,
  richTextFields,
  storyCardFields,
} from "../globalFields";
import { headerFields } from "../headerFields";
import { imageFields } from "../imageFields";

export const homeHeroSectionFields = /* groq */ `
_type,
headline,
"sortHeader":*[_type == "settings"][0]{
_id,
_type,
header->{
${headerFields}
}, 
},
title{
${richTextFields}
},
author->{
${authorFields}
},
image{
${imageFields}
}
`;
export const heroSectionFields = /* groq */ `
_type,
image{
${imageFields}
}
`;
export const resourceListingSectionFields = /* groq */ `
_type,
title,
align,
(@.align=="left") => { 
"popularResources":*[_type == "resources" && hasPopular == true]| order(_createdAt asc)[0]{
${resourceCardFields}
},
},
(@.align=="right") => { 
"popularResources":*[_type == "resources" && hasPopular == true]| order(_createdAt asc)[1]{
${resourceCardFields}
},
}, 
`;
export const blogListingSectionFields = /* groq */ `
_type,
title,
"blogs":*[_type == "blogs"][0..5] | order(_createdAt asc){
${blogsCardFields}
}
`;
export const animationSectionFields = /* groq */ `
_type,
images[]{
${imageFields}
},
"blogs":*[_type == "blogs"] | order(_createdAt desc){
${blogsCardFields}
},
"stories":*[_type == "stories"][0..2] | order(_createdAt desc){
${storyCardFields}
}
`;
export const storyListingSectionFields = /* groq */ `
_type,
title,
"stories":*[_type == "stories"][0..2] | order(_createdAt asc){
${storyCardFields}
}
`;
export const categoryListingSectionFields = /* groq */ `
_type,
title,
"allCategories":*[_type == "category"]{
${categoryFields}
}
`;
export const allBlogPostSectionFields = /* groq */ `
_type,
id,
title,
"allBlogs":*[_type == "blogs"][0..-1]| order(_createdAt desc){
${blogsCardFields}
}
`;
export const allStoryPostSectionFields = /* groq */ `
_type,
id,
title,
"allStories":*[_type == "stories"][0..-1]| order(_createdAt desc){
${storyCardFields}
}
`;
export const allResourcePostSectionFields = /* groq */ `
_type,
id,
title,
"allResources":*[_type == "resources"][0..-1]| order(_createdAt desc){
${resourceCardFields}
}
`;
export const contactUsSectionFields = /* groq */ `
_type,
title,
image{
${imageFields}
},
companyEmailId,
companyPhoneNumber
`;
export const privacyTermsAndConditionSectionFields = /* groq */ `
_type,
title,
content
`;
export const fourZeroFourSectionFields = /* groq */ `
_type,
image{
${imageFields}
},
title,
description
`;
export const comparisionFrameworksSectionFields = /* groq */ ` 
compare_framework_section[]->{
_type,
title_subtitle,
button_label_compare,
sectionTheme,
content{
_type,
custom_rich_text
},
type->{
_type,
slug
},
"frameworks" : *[_type == "framework" && defined(slug.current) && references(^.type._ref)] | order(name asc){
_type,
name,
slug,
type{
_type,
type->{
_type,
slug
},
},
},
},
is_show,
_type,
title_subtitle,
variant
`;
export const titleDescriptionSideImageSectionFields = /* groq */ `
_type,
variant,
title_subtitle,
desc{
_type,
custom_rich_text
},
side_image{
${imageFields}
},
sectionTheme,
background,
`;