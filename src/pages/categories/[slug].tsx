import { GetStaticProps, NextPage } from "next";
import { SharedPageProps } from "../../../lib/sanity/types";
import { categoriesListingPageQuery, fetchDataFromSanity, readToken } from "../../../lib/sanity";
import { filterSanityDataToSingleItem } from "../../../lib/sanity/utils/filterSanityDataToSingleItem";
import { REVALIDATE_DURATION } from "../../../lib/constants";
import { getCategoriesSlugs } from "../../../lib/sanity.client";
import { CategoryPageType } from "../../../lib/sanity/types/categoryPage";
import PreviewCategoriesPageView from "../../../views/PreviewCategoriesPageView";
import CategoriesPageView from "../../../views/CategoriesPageView";

interface CategoriesPageProps extends SharedPageProps {
    page: CategoryPageType;
    slug?: string;
}

interface Query {
    [key: string]: string;
}

const CategoriesPage: NextPage<CategoriesPageProps> = ({
    page,
    draftMode,
    slug,
}) => {
    if (draftMode) {
        return (
            <PreviewCategoriesPageView page={page} preview={draftMode} slug={slug} />
        );
    }
    return (
        <CategoriesPageView page={page} slug={slug} />
    )
};

export const getStaticProps: GetStaticProps<
    CategoriesPageProps,
    Query
> = async (ctx) => {
    const { draftMode = false, params = {} } = ctx;

    const [pageData] = await Promise?.all([
        fetchDataFromSanity<CategoryPageType[]>({
            query: categoriesListingPageQuery?.query,
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
            slug: params.slug,
        },
        revalidate: REVALIDATE_DURATION,
    };
};

export const getStaticPaths = async () => {
    const allSlugs = await getCategoriesSlugs();
    const paths = allSlugs.map((slug) => ({
        params: { slug },
    }));
    return {
        paths,
        fallback: true,
    };
};
export default CategoriesPage;