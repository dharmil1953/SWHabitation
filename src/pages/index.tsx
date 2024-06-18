import React from "react";
import { GetStaticProps, NextPage } from "next";
import { SharedPageProps } from "../../lib/sanity/types";
import { Page } from "../../lib/sanity/types/page";
import { fetchDataFromSanity, pageQuery, readToken } from "../../lib/sanity";
import { filterSanityDataToSingleItem } from "../../lib/sanity/utils/filterSanityDataToSingleItem";
import { REVALIDATE_DURATION } from "../../lib/constants";
import PageView from "../../views/PageView";
import PreviewPageView from "../../views/PreviewPageView";
export interface PageProps extends SharedPageProps {
  page: Page;
}
const Home: NextPage<PageProps> = ({ page, draftMode }) => {
  if (draftMode) {
    return <PreviewPageView page={page} preview={draftMode} slug={page.slug} />;
  }
  return <PageView page={page} slug={page.slug} />;
};
export const getStaticProps: GetStaticProps<PageProps> = async ({
  draftMode = false,
}) => {
  const pageData = await fetchDataFromSanity<Page[]>({
    query: pageQuery.query,
    queryParams: {
      slug: "/",
    },
    isPreview: draftMode,
  });
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
    },
    revalidate: REVALIDATE_DURATION,
  };
};
export default Home;
