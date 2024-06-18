
import { SchemaTypeDefinition } from "sanity";
import { linkTypeOptions } from "../../../constant/select-options";

export const linkFields = [
  {
    name: "type",
    title: "Type",
    type: "string",
    options: {
      list: linkTypeOptions,
      direction: "horizontal",
      layout: "radio",
    },
  },
  {
    name: "page",
    title: "Page",
    type: "reference",
    weak: true,
    options: { disableNew: true },
    to: [{ type: "page" }],
    hidden: ({ parent }) => parent?.type !== "reference",
  },
  {
    name: "link",
    title: "URL",
    type: "string",
    hidden: ({ parent }) => parent?.type !== "externalReference",
  },
  {
    name: "openTheLinkinANewWindow",
    title: "Open The Link In A New Window?",
    type: "boolean",
    hidden: ({ parent }) => parent?.type !== "externalReference",
    initialValue:false
  },
  {
    name: "anchor",
    title: "Anchor",
    type: "string",
    description: "Provide a section id to navigate on the same page",
    hidden: ({ parent }) => parent?.type !== "sectionReference",
  },
];

export default {
  name: "link",
  title: "Link",
  type: "object",
  fields: linkFields,
} as SchemaTypeDefinition;
