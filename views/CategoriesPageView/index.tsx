import SectionView from "@/components/Commons/SectionView";
import { CategoryPageType } from "../../lib/sanity/types/categoryPage";
import Layout from "../../layouts/Layout";
import AllBlogPostSection from "@/components/AllBlogPostSection";
import RecommendedBlogSection from "@/components/Views/BlogDetailPage/RecommendedBlogSection";

export interface CategoriesPageViewProps {
    preview?: boolean;
    loading?: boolean;
    page: CategoryPageType;
    slug: string;
}

export default function CategoriesPageView(props: CategoriesPageViewProps) {
    const { preview, loading, page, slug } = props;
    const { layoutProps, categoryTitle, allBlogs, similarBlogs } = page || {};
    return (
        <Layout
            seo={page?.seo}
            preview={preview}
            loading={loading}
            header={layoutProps?.header}
            footer={layoutProps?.footer}
            slug={`/categories/${slug}`}
        >
            {Array.isArray(page?.pageBuilder) &&
                page?.pageBuilder.map((i, index) => (
                    <SectionView block={i} slug={slug} key={index} />
                ))}
            {Array.isArray(allBlogs) &&
                <AllBlogPostSection
                    _type={"allBlogPostSection"}
                    title={`${categoryTitle} Insights`}
                    allBlogs={allBlogs}
                />
            }
            {similarBlogs && <RecommendedBlogSection block={similarBlogs} title="Similar Blogs" />}
        </Layout>
    );
}
