import { SanityDocument } from "next-sanity";
import { LayoutPropsType } from "./page";
import { SeoType } from "./settings";
import { AuthorType, CustomImageType, RecommendedStoriesType, RichTextType } from "./common";


export interface StoryDetailPageType extends SanityDocument {
    _type: "stories";
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
    recommendedStories?: RecommendedStoriesType[]
}