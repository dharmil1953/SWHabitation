import { Slug } from "sanity";
import { FooterType, HeaderType, SeoType } from "./settings";
import {
  AlignmentOptionsType,
  AuthorType,
  BlogCardType,
  CategoryType,
  CustomImageType,
  PopularResourcesType,
  ResourceCardType,
  RichTextType,
  StoryCardType,
} from "./common";
export interface LayoutPropsType {
  _id: "settings";
  _type: "settings";
  header?: HeaderType;
  footer?: FooterType;
}
export interface PageBuilderType {
  _type: "section";
  content: SectionType[];
}
export type SectionType =
  | HeroSectionType
  | HomeHeroSectionType
  | ResourceListingSectionType
  | AnimationSectionType
  | AllBlogPostSectionType
  | AllStoryPostSectionType
  | AllResourcePostSectionType
  | CategoryListingSectionType
  | ContactUsSectionType
  | PrivacyTermsAndConditionSectionType
  | FourZeroFourSectionType;
export interface Page extends SanityDocument {
  slug: string;
  _id: string;
  seo: SeoType;
  layoutProps: LayoutPropsType;
  pageBuilder?: PageBuilderType[];
}

export interface HomeHeroSectionType {
  _type: "homeHeroSection";
  headline?: string;
  title?: RichTextType;
  author?: AuthorType;
  image?: CustomImageType;
  sortHeader?: { header?: HeaderType };
}
export interface HeroSectionType {
  _type: "heroSection";
  image?: CustomImageType;
}

export interface BlogListingSectionType {
  _type: "blogListingSection";
  title?: string;
  blogs?: BlogCardType[];
}
export interface ResourceListingSectionType {
  _type: "resourceListingSection";
  title?: string;
  popularResources?: PopularResourcesType;
  align?: AlignmentOptionsType;
}
export interface StoryListingSectionType {
  _type: "storyListingSection";
  title?: string;
  stories?: StoryCardType[];
}
export interface AnimationSectionType {
  _type: "animationSection";
  images?: CustomImageType[];
  blogs?: BlogCardType[];
  stories?: StoryCardType[];
}
export interface CategoryListingSectionType {
  _type: "categoryListingSection";
  title?: string;
  allCategories?: CategoryType[];
}
export interface AllBlogPostSectionType {
  _type: "allBlogPostSection";
  title?: string;
  id?: string
  allBlogs?: BlogCardType[];
}
export interface AllStoryPostSectionType {
  _type: "allStoryPostSection";
  title?: string;
  id?: string
  allStories?: StoryCardType[];
}
export interface AllResourcePostSectionType {
  _type: "allResourcePostSection";
  title?: string;
  id?: string
  allResources?: ResourceCardType[];
}
export interface ContactUsSectionType {
  _type: "contactUsSection";
  title?: RichTextType;
  image?: CustomImageType;
  companyEmailId?: string;
  companyPhoneNumber?: string;
}
export interface PrivacyTermsAndConditionSectionType {
  _type: "privacyTermsAndConditionSection";
  title?: string;
  content?: RichTextType
}
export interface FourZeroFourSectionType {
  _type: "fourZeroFourSection";
  title?: string;
  description?: string;
  image?: CustomImageType;
}