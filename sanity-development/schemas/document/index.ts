import category from "./category";
import author from "./author";
import footer from "./footer";
import header from "./header";
import newsLetter from "./newsLetter";
import section from "./section";
import settings from "./settings";
import seo from "./seo";
import metaAttribute from "./seo/metaAttribute";
import metaTag from "./seo/metaTag";
import openGraph from "./seo/openGraph";
import twitter from "./seo/twitter";
import navItem from "./header/navItem";
import messageSendRequest from "./messageSendRequest";
import blogFilter from "./blogFilter";
import resourceFilter from "./resourceFilter";

export const documentsTypes = [
  header,
  seo,
  messageSendRequest,
  settings,
  metaAttribute,
  metaTag,
  openGraph,
  twitter,
  footer,
  section,
  author,
  category,
  newsLetter,
  navItem,
  blogFilter,
  resourceFilter
];
export default documentsTypes;
