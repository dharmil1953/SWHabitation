export const linkFields = /* groq */ `
_type,
type,
(@.type=="sectionReference") => { 
"url" : "#" + anchor,
},
(@.type=="reference") => { 
"slug" : page->.slug.current,
"pageType" : page->._type, 
},
(@.type=="externalReference") => {
"url":link, 
openTheLinkinANewWindow 
},
`;
