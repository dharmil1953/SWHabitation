import { imageFields } from "../../../imageFields";


export const metaAttributesQuery = /* groq */ `
_type,
attributeValueString,
attributeType,
attributeKey,
attributeValueImage{
${imageFields}
}
`
