import { categoryFields } from "../globalFields";
import { imageFields } from "../imageFields";
import { linkFields } from "../linkFields";

export const navItemFields = /* groq */ `
_type,
title,
link{
${linkFields}
},  
`;
export const headerFields = /* groq */ `
_id,
_type,
navItems[]{
${navItemFields}
},
socialMediaLinks[]{
${navItemFields}
},
"logo":^.logo{
${imageFields}   
}
`;
