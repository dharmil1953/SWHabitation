import { SanityDocument } from "next-sanity";
import { LayoutPropsType } from "./page";
import { SeoType } from "./settings";
import { AuthorQouteType, AuthorType, BackgroundColorType, CustomImageType, RecommendedResourcesType, RichTextType } from "./common";

export interface ResourceDetailPageType extends SanityDocument {
    _type: "resources";
    _id: string;
    slug: string;
    layoutProps: LayoutPropsType;
    seo: SeoType;
    title?: string;
    backgroundColor?: BackgroundColorType
    author?: AuthorType
    image?: CustomImageType;
    publishDate?: string;
    description?: RichTextType
    content?: RichTextType
    sideContentTitles?: string[]
    jsonLdContent?:string
    recommendedResources?: RecommendedResourcesType[]
}