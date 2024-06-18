import { LinkType } from "../../sanity/types/linkType";


export const getPageLinkFromSlug = (slug: string, type: string) => {
  switch (type) {
    case "page":
      return slug?.startsWith("/") ? slug : `/${slug}`;
    case "blogs":
      return slug?.startsWith("/") ? slug : `/blog/${slug}`;
    case "resources":
      return slug?.startsWith("/") ? slug : `/resource/${slug}`;
    case "stories":
      return slug?.startsWith("/") ? slug : `/story/${slug}`;
    case "category":
      return slug?.startsWith("/") ? slug : `/categories/${slug}`;
    default:
      return slug?.startsWith("/") ? slug : `/${slug}`;
  }
};
export enum LINK_TYPES {
  externalReference = "externalReference",
  reference = "reference",
  sectionReference = "sectionReference",
}
export const resolveUrl = (link: LinkType) => {
  switch (link.type) {
    case LINK_TYPES.sectionReference:
      return link.url ?? "#";
    case LINK_TYPES.reference:
      return getPageLinkFromSlug(link.slug, link.pageType);
    default:
      return link.url;
  }
};
