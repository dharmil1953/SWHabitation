import { SchemaTypeDefinition } from "sanity"

export default {
  name: 'metaAttribute',
  title: 'Meta Attribute',
  type: 'object',
  fields: [
    {
      name: 'attributeKey',
      title: 'Key',
      type: 'string',
    },
    {
      name: 'attributeType',
      title: 'type',
      type: 'string',
      options: {
        list: ['string', 'image'],
      },
      initialValue: 'string',
    },
    {
      name: 'attributeValueImage',
      title: 'Value',
      type: 'customImage',
      hidden: ({parent}) => !parent?.attributeType?.toString()?.includes('image'),
    },
    {
      name: 'attributeValueString',
      title: 'Value',
      type: 'string',
      hidden: ({parent}) => !parent?.attributeType?.toString()?.includes('string'),
    },
  ],
  preview: {
    select: {
      title: 'attributeKey',
    },
    prepare({title}) {
      return {
        title: title,
      }
    },
  },
}as SchemaTypeDefinition
