import { PortableTextBlock, Slug } from "sanity";
import { LinkType } from "./linkType";

export interface IconProps {
  className?: string;
}
export type AlignmentOptionsType = "left" | "right";
export type BackgroundColorType =
  | "green"
  | "yellow"
  | "orange"
  | "pink";
export type LabelLinkType = {
  _type: "labelLink";
  label?: string;
  link?: LinkType;
};
export type RichTextLinkType = {
  _type: "internalLink";
  slug?: string;
  pageType?: string;
  id?: string
};
export type RichTextType = {
  _type: "richText";
  custom_rich_text?: PortableTextBlock[];
  conclusion?: ConclusionType;
  authorQoute?: AuthorQouteType;
  codeBlockSection?: CodeBlockSectionType
  richTextLink?: RichTextLinkType[];
  faqSection?: FaqSectionType;
  featureSection?: FeatureType;
  readMoreSection?: ReadMoreSectionType;
};
export type ButtonVariantType = "cream" | "orange" | "green" | "outLine" | "black";
export type ButtonType = {
  _type: "button";
  link: LinkType;
  variant?: ButtonVariantType;
  label: string;
};
export interface NewsLetterType {
  _type: "newsLetter";
  inputPlaceholder: string;
  title: string;
  subscribeButton: string;
}
export interface PopularResourcesType {
  _type: "resources";
  title: string;
  _id: string;
  image: CustomImageType;
  slug: Slug;
  backgroundColor: BackgroundColorType;
  author: AuthorType;
}
export interface ResourceFilterType {
  _type: "resourceFilter";
  _id: string;
  title: string;
  slug: Slug;
}
export interface SuggestionType {
  _type: "resources" | "blogs" | "stories"
  _id?: string;
  title?: string;
  slug?: Slug
  keywords?: string[]
}
export interface ResourceCardType {
  _type: "resources";
  title: string;
  searchDescription?: string,
  keywords?: string[]
  _id: string;
  image: CustomImageType;
  hasPopular?: boolean;
  hasRecommended?: boolean;
  slug: Slug;
  backgroundColor: BackgroundColorType;
  author: AuthorType;
  resourceFilter: ResourceFilterType;
}
export interface RecommendedResourcesType {
  _type: "resources";
  title: string;
  _id: string;
  slug: Slug;
  author?: AuthorType;
  resourceFilter?: ResourceFilterType;
}
export interface BlogFilterType {
  _type: "blogFilter";
  _id: string;
  title: string;
  slug: Slug;
}
export interface BlogCardType {
  _type: "blogs";
  _id: string;
  title: string;
  searchDescription?: string,
  keywords?: string[]
  hasPopular?: boolean;
  hasRecommended?: boolean;
  image: CustomImageType;
  slug: Slug;
  blogFilter: BlogFilterType;
}
export interface RecommendedStoriesType {
  _type: "stories";
  title: string;
  _id: string;
  slug: Slug;
  image?: CustomImageType;
}
export interface RecommendedBlogsType {
  _type: "blogs";
  title: string;
  _id: string;
  slug: Slug;
  image?: CustomImageType;
  blogFilter?: BlogFilterType;
}
export interface StoryCardType {
  _type: "stories";
  _id: string;
  title: string;
  searchDescription?: string,
  keywords?: string[]
  hasPopular?: boolean;
  hasRecommended?: boolean;
  image: CustomImageType;
  slug: Slug;
}

export type CustomImageType = {
  _type: "customImage";
  caption?: string;
  alt?: string;
  link?: LinkType;
  asset?: SanityImageAssetType;
  crop?: {
    _type: "SanityImageCrop";
    right: number;
    top: number;
    left: number;
    bottom: number;
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    _type: "SanityImageHotspot";
    width: number;
  };
};
export type SanityImageAssetType = {
  _type?: "SanityImageAsset";
  _id?: string;
  path?: string;
  url?: string;
  metadata?: {
    _type?: "SanityImageMetadata";
    dimensions?: {
      _type?: "SanityImageDimensions";
      height?: number;
      width?: number;
    };
  };
};
export interface AuthorType {
  _type: "author";
  name?: string;
  bio?: string;
  slug?: Slug;
}

export interface ConclusionType {
  _type: "conclusion";
  backgroundColor?: BackgroundColorType;
  description: RichTextType;
}
export interface AuthorQouteType {
  _type: "authorQoute";
  backgroundColor?: BackgroundColorType;
  description: string;
  author: AuthorType;
}
export interface CodeBlockSectionType {
  _type: "codeBlockSection";
  description: string;
}
export type CategoryType = {
  _type: "category";
  title?: string;
  _id?: string;
  order?: number;
  slug?: Slug;
  image?: CustomImageType;
};
export interface QuestionAndAnswerType {
  _type: "questionAndAnswer";
  question: string;
  answer: RichTextType;
}
export interface FaqSectionType {
  _type: "faqSection";
  title: string;
  description: RichTextType;
  questionAndAnswers?: QuestionAndAnswerType[];
}
export interface ImageTitleDescription {
  _type: "imageTitleDescription";
  image?: CustomImageType;
  title?: string;
  description: RichTextType;
}

export interface FeatureType {
  _type: "featureSection";
  featuresLists: ImageTitleDescription[];
}


export interface ReadMoreSectionType {
  _type: "readMoreSection";
  post?: {
    _type: "blogs" | "resources" | "stories";
    _id?: string;
    title?: string;
    slug?: {
      current?: string;
    };
  };
}
