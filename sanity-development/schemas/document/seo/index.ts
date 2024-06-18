import { StringArrayInput } from "../../../components/StringArrayInput";

export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'metaTitle',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'metaDescription',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'additionalMetaTags',
      title: 'Additional Meta Tags',
      type: 'array',
      of: [{type: 'metaTag'}],
    },
    {
      name: 'openGraph',
      title: 'Open Graph',
      type: 'openGraph',
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'twitter',
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'string'}],
      components: {input: StringArrayInput},
    },
  ],
}
