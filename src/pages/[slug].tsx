import { GetStaticProps, NextPage } from "next";
import React from "react";
import { SharedPageProps } from "../../lib/sanity/types";
import { Page as PageType } from "../../lib/sanity/types/page";
import PreviewPageView from "../../views/PreviewPageView";
import PageView from "../../views/PageView";
import { fetchDataFromSanity, pageQuery, readToken } from "../../lib/sanity";
import { filterSanityDataToSingleItem } from "../../lib/sanity/utils/filterSanityDataToSingleItem";
import { REVALIDATE_DURATION } from "../../lib/constants";
import { getAllPageSlugs } from "../../lib/sanity.client";

interface PageProps extends SharedPageProps {
  page: PageType;
}

interface Query {
  [key: string]: string;
}
const Page: NextPage<PageProps> = ({ page, draftMode }) => {
  if (draftMode) {
    return <PreviewPageView page={page} preview={draftMode} slug={page?.slug} />;
  }
  return <PageView page={page} slug={page?.slug} />;
};
export const getStaticProps: GetStaticProps<
  PageProps,
  Query
> = async (ctx) => {
  const { draftMode = false, params = {} } = ctx;
  if (params?.slug === "404") {
    return { notFound: true };
  }
  const [pageData] = await Promise?.all([
    fetchDataFromSanity<PageType[]>({
      query: pageQuery?.query,
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
  const allSlugs = await getAllPageSlugs();
  const paths = allSlugs.map((slug) => ({
    params: { slug: slug },
  }));
  return {
    paths,
    fallback: true,
  };
};
export default Page;
