import { GetStaticProps, NextPage } from "next";
import { SharedPageProps } from "../../../lib/sanity/types";
import { ResourceDetailPageType } from "../../../lib/sanity/types/resourceDetail";
import ResourceDetailPageView from "../../../views/ResourceDetailPageView";
import PreviewResourceDetailPageView from "../../../views/PreviewResourceDetailPageView";
import { REVALIDATE_DURATION } from "../../../lib/constants";
import { getAllResourceDetailPageSlugs } from "../../../lib/sanity.client";
import { fetchDataFromSanity, readToken, resourceDetailPageQuery } from "../../../lib/sanity";
import { filterSanityDataToSingleItem } from "../../../lib/sanity/utils/filterSanityDataToSingleItem";

interface ResourceDetailPageProps extends SharedPageProps {
    page: ResourceDetailPageType;
    slug?: string;
}

interface Query {
    [key: string]: string;
}

const ResourceDetailPage: NextPage<ResourceDetailPageProps> = ({
    page,
    draftMode,
    slug,
}) => {
    if (draftMode) {
        return (
            <PreviewResourceDetailPageView page={page} preview={draftMode} slug={slug} />
        );
    }
    return (
        <ResourceDetailPageView page={page} slug={slug} />
    )
};

export const getStaticProps: GetStaticProps<
    ResourceDetailPageProps,
    Query
> = async (ctx) => {
    const { draftMode = false, params = {} } = ctx;

    const [pageData] = await Promise?.all([
        fetchDataFromSanity<ResourceDetailPageType[]>({
            query: resourceDetailPageQuery?.query,
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
    const allSlugs = await getAllResourceDetailPageSlugs();
    const paths = allSlugs.map((slug) => ({
        params: { slug },
    }));
    return {
        paths,
        fallback: true,
    };
};
export default ResourceDetailPage;