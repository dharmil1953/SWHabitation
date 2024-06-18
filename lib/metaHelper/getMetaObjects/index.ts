import { MetaTag as NextSeoMetaTag } from 'next-seo/lib/types'


import { getMetaAttribute } from '../getMetaAttribute'
import { MetaTagType } from '../../sanity/types'

export const getMetaObjects = (tags: MetaTagType[], allowIndexing?: boolean) => {
    const tagArray: NextSeoMetaTag[] = []
    tags.map(tag => {
        const excludeTag =
            !allowIndexing &&
            !!tag.metaAttributes?.find(
                i =>
                    i?.attributeValueString?.includes('noindex') ||
                    i?.attributeValueString?.includes('nofollow'),
            )
        if (!excludeTag) {
            const metaTag = getMetaAttribute(tag?.metaAttributes)
            if (metaTag) {
                tagArray.push(metaTag)
            }
        }
    })
    return tagArray
}
