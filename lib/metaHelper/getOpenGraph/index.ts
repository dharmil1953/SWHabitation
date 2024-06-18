import { OpenGraph as NextSeoOpenGraph } from 'next-seo/lib/types'
import { OpenGraphType } from '../../sanity/types'
import { resolveImage } from '../getMetaAttribute'

export const getOpenGraph = (args: OpenGraphType) => {
    const { description, image, title, _type } = args
    const getImage = image ? resolveImage(image) : null
    const values = {
        _type,
        description,
        title,
        images: [{ url: getImage ?? '' }],
    }
    return values as NextSeoOpenGraph
}
