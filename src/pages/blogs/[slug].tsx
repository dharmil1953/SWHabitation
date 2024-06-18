import { GetStaticProps, NextPage } from "next";
import { SharedPageProps } from "../../../lib/sanity/types";
import { blogDetailPageQuery, fetchDataFromSanity, readToken } from "../../../lib/sanity";
import { filterSanityDataToSingleItem } from "../../../lib/sanity/utils/filterSanityDataToSingleItem";
import { REVALIDATE_DURATION } from "../../../lib/constants";
import { BlogDetailPageType } from "../../../lib/sanity/types/blogDetail";
import BlogDetailPageView from "../../../views/BlogDetailPageView";
import PreviewBlogDetailPageView from "../../../views/PreviewBlogDetailPageView";
import { getAllBlogDetailPageSlugs } from "../../../lib/sanity.client";

interface BlogDetailPageProps extends SharedPageProps {
    page: BlogDetailPageType;
    slug?: string;
}

interface Query {
    [key: string]: string;
}

const BlogDetailPage: NextPage<BlogDetailPageProps> = ({
    page,
    draftMode,
    slug,
}) => {
    if (draftMode) {
        return (
            <PreviewBlogDetailPageView page={page} preview={draftMode} slug={slug} />
        );
    }
    return (
        <BlogDetailPageView page={page} slug={slug} />
    )
};

export const getStaticProps: GetStaticProps<
    BlogDetailPageProps,
    Query
> = async (ctx) => {
    const { draftMode = false, params = {} } = ctx;

    const [pageData] = await Promise?.all([
        fetchDataFromSanity<BlogDetailPageType[]>({
            query: blogDetailPageQuery?.query,
            queryParams: { slug: params?.slug },
            isPreview: draftMode,
        }),
    ]);

    const page = filterSanityDataToSingleItem({
        data: pageData,
        isPreview: draftMode,
    });
    if (!page) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            page,
            draftMode,
            token: draftMode ? readToken : "",
            slug: params?.slug,
        },
        revalidate: REVALIDATE_DURATION,
    };
};

export const getStaticPaths = async () => {
    const allSlugs = await getAllBlogDetailPageSlugs();
    const paths = allSlugs.map((slug) => ({
        params: { slug },
    }));
    return {
        paths,
        fallback: true,
    };
};
export default BlogDetailPage;