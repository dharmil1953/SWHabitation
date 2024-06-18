import { imageFields } from "../../../imageFields";


export const openGraphQuery = /* groq */ `
_type,
description,
title,
image{
${imageFields}
}
`
