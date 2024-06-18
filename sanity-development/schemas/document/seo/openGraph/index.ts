export default {
  name: 'openGraph',
  title: 'Open Graph',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'customImage',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
  ],
}
