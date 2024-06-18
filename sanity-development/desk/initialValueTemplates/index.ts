import { Template } from "sanity";
import { OLD_PAGE_ID_LIST } from "../helper/defaults";
export const getPageId = (new_id: string) => OLD_PAGE_ID_LIST[new_id] ?? new_id;
export const InitialValueTemplates = {
  HEADER: getPageId("header"),
  FOOTER: getPageId("footer"),
  SETTINGS: getPageId("settings"),
  NEWSLETTER: getPageId("newsLetter"),
  SECTIONS: getPageId("section"),
  AUTHOR: getPageId("author"),
  CATEGORIES: getPageId("category"),
  BLOGFILTER: getPageId("blogFilter"),
  RESOURCEFILTER: getPageId("resourceFilter"),
  PAGE: getPageId("page"),
  BLOGS: getPageId("blogs"),
  RESOURCES: getPageId("resources"),
  MESSAGESENDREQUEST: getPageId("messageSendRequest"),
};

export const templateBuilders: Template[] = [
  {
    id: InitialValueTemplates.NEWSLETTER,
    title: "NewsLetter",
    schemaType: "newsLetter",
    value: {
      type: "newsLetter",
    },
  },
];

export default [...templateBuilders.map((template) => template)];
