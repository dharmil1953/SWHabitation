import { GetStaticProps, NextPage } from "next";
import { SharedPageProps } from "../../../lib/sanity/types";
import { fetchDataFromSanity, readToken, storyDetailPageQuery } from "../../../lib/sanity";
import { filterSanityDataToSingleItem } from "../../../lib/sanity/utils/filterSanityDataToSingleItem";
import { REVALIDATE_DURATION } from "../../../lib/constants";
import { getAllStoryDetailPageSlugs } from "../../../lib/sanity.client";
import { StoryDetailPageType } from "../../../lib/sanity/types/storyDetail";
import PreviewStoryDetailPageView from "../../../views/PreviewStoryDetailPageView";
import StoryDetailPageView from "../../../views/StoryDetailPageView";

interface StoryDetailPageProps extends SharedPageProps {
    page: StoryDetailPageType;
    slug?: string;
}

interface Query {
    [key: string]: string;
}

const StoryDetailPage: NextPage<StoryDetailPageProps> = ({
    page,
    draftMode,
    slug,
}) => {
    if (draftMode) {
        return (
            <PreviewStoryDetailPageView page={page} preview={draftMode} slug={slug} />
        );
    }
    return (
        <StoryDetailPageView page={page} slug={slug} />
    )
};

export const getStaticProps: GetStaticProps<
    StoryDetailPageProps,
    Query
> = async (ctx) => {
    const { draftMode = false, params = {} } = ctx;

    const [pageData] = await Promise?.all([
        fetchDataFromSanity<StoryDetailPageType[]>({
            query: storyDetailPageQuery?.query,
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
    const allSlugs = await getAllStoryDetailPageSlugs();
    const paths = allSlugs.map((slug) => ({
        params: { slug },
    }));
    return {
        paths,
        fallback: true,
    };
};
export default StoryDetailPage;