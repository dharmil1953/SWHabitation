import { SanityDocument } from "next-sanity";
import { LayoutPropsType } from "./page";
import { SeoType } from "./settings";
import { AuthorQouteType, AuthorType, CustomImageType, RecommendedBlogsType, RichTextType } from "./common";

export interface BlogDetailPageType extends SanityDocument {
    _type: "blogs";
    _id: string;
    slug: string;
    layoutProps: LayoutPropsType;
    seo: SeoType;
    title?: string;
    author?:AuthorType
    image?: CustomImageType;
    publishDate?: string;
    description?: RichTextType
    content?: RichTextType
    sideContentTitles?: string[]
    jsonLdContent?:string
    recommendedBlogs?: RecommendedBlogsType[]
}