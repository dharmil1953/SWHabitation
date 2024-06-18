import { MetaTag as NextSeoMetaTag } from "next-seo/lib/types"
import { CustomImageType, MetaAttributeType } from "../../sanity/types"

export const resolveImage = (image?: CustomImageType) => {
  return image?.asset?.url ?? "";
};

export const getMetaAttribute = (attrs: MetaAttributeType[]|undefined) => {
  if (!attrs) {
    return null
  }
  const obj: Record<string, string> = {}
  attrs.map((i) => {
    Object.assign(obj, {
      [i?.attributeKey as string]:
        i.attributeType == "image"
          ? resolveImage(i?.attributeValueImage)
          : i.attributeValueString,
    })
  })
  return obj as unknown as NextSeoMetaTag
}
