import { defineField } from "sanity"

export default {
  name: 'messageSendRequest',
  title: 'Message Send Request',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      readOnly: () => {
        return true
      },
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly: () => {
        return true
      },
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
      readOnly: () => {
        return true
      },
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      readOnly: () => {
        return true
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}
