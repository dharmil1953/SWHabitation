export default {
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'link',
    },
  ],
  preview: {
    select: {
      title: 'label',
    },
  },
}
