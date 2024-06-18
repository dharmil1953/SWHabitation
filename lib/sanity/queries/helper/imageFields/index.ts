import { linkFields } from "../linkFields";

export const imageFields = /* groq */ `
alt,
_type,
caption,
link{
${linkFields}
},
crop{
_type,
right,
top,
left,
bottom
},
hotspot{
_type,
x,
y,
height,
width,
},
asset->{...}
`