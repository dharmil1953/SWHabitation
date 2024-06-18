import { PortableTextBlock } from "sanity";
import { LinkFields, LinkType } from "./linkType";
import { CustomImageType, LabelLinkType, NewsLetterType } from "./common";


export interface NavItemType {
  _type: "navItem";
  title?: string;
  link?: LinkFields;
}

export interface HeaderType {
  _type: "header";
  _id: string;
  navItems: NavItemType[];
  socialMediaLinks: NavItemType[];
  logo?: CustomImageType;
}

export interface FooterType {
  _type: "footer";
  footerLinks: LabelLinkType[];
  newsLetter: NewsLetterType;
  socialLinks: LabelLinkType[];
}

export type MetaAttributeType = {
  _type: "metaAttribute";
  attributeKey?: string;
  attributeType?: string;
  attributeValueString?: string;
  attributeValueImage?: CustomImageType;
};

export type OpenGraphType = {
  _type: "openGraph";
  title: string;
  description: string;
  image: CustomImageType;
};

export type Twitter = {
  _type: "twitter";
  handle?: string;
  site?: string;
  cardType?: string;
};

export type MetaTagType = {
  _type: "metaTag";
  metaAttributes?: MetaAttributeType[];
};
export type jsonLdDataType = {
  name?: string;
  description?: string;
  telePhone?: string;
  image?: CustomImageType;
};
export type SeoType = {
  _type?: "seo";
  jsonLdData?: jsonLdDataType;
  metaDescription?: string;
  additionalMetaTags?: MetaTagType[];
  metaTitle?: string;
  openGraph?: OpenGraphType;
  twitter?: Twitter;
  keywords: string[];
};
