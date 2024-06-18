import {  labelLinkFields, newsLetterFields, } from "../globalFields";



export const footerFields = /* groq */ `
_type,
newsLetter->{
${newsLetterFields}
},
footerLinks[]{
${labelLinkFields}
},
socialLinks[]{
${labelLinkFields}
},
`;
