import { SanityDocument } from "next-sanity";
import { LayoutPropsType, PageBuilderType } from "./page";
import { SeoType } from "./settings";
import { BlogCardType } from "./common";


export interface CategoryPageType extends SanityDocument {
    _type: "category";
    _id: string;
    layoutProps: LayoutPropsType;
    slug: string;
    seo: SeoType;
    categoryTitle?: string;
    allBlogs?: BlogCardType[]
    similarBlogs?: BlogCardType[]
    pageBuilder?: PageBuilderType[];
}