import { footerFields } from "../helper/footerFields";
import { headerFields } from "../helper/headerFields";
import {
  allBlogPostSectionFields,
  allResourcePostSectionFields,
  allStoryPostSectionFields,
  animationSectionFields,
  categoryListingSectionFields,
  contactUsSectionFields,
  fourZeroFourSectionFields,
  heroSectionFields, homeHeroSectionFields, privacyTermsAndConditionSectionFields, resourceListingSectionFields,
} from "../helper/sectionFields";
import { seofields } from "../helper/seoFields";

export const header = /* groq */ `
header->{
${headerFields}
} 
`;
export const seo = /* groq */ `seo{
${seofields}  
}`;

export const footer = /* groq */ `
footer->{
${footerFields}
}
`;
export const layoutProps = /* groq */ `*[_type == "settings"][0]{
_id,
_type,
${header},
${footer}
}`;

export const pageBuilder = /* groq */ `
pageBuilder[]->{
_type,
content[]{
(_type == "homeHeroSection") => {
${homeHeroSectionFields}
},
(_type == "heroSection") => {
${heroSectionFields}
},
(_type == "resourceListingSection") => {
${resourceListingSectionFields}
},
(_type == "animationSection") => {
${animationSectionFields}
},
(_type == "categoryListingSection") => {
${categoryListingSectionFields}
},
(_type == "allBlogPostSection") => {
${allBlogPostSectionFields}
},
(_type == "allStoryPostSection") => {
${allStoryPostSectionFields}
},
(_type == "allResourcePostSection") => {
${allResourcePostSectionFields}
},
(_type == "contactUsSection") => {
${contactUsSectionFields}
},
(_type == "privacyTermsAndConditionSection") => {
${privacyTermsAndConditionSectionFields}
},
(_type == "fourZeroFourSection") => {
${fourZeroFourSectionFields}
},
},
}
`;



