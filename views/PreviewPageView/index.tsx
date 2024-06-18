import { useLiveQuery } from "next-sanity/preview";

import PageView, { PageViewProps } from "../PageView";
import { Page } from "../../lib/sanity/types/page";
import { pageQuery } from "../../lib/sanity";
import { filterSanityDataToSingleItem } from "../../lib/sanity/utils/filterSanityDataToSingleItem";


export default function PreviewPageView(props: PageViewProps) {
  const [page, loadingPage] = useLiveQuery<Page[]>(
    [props.page],
    pageQuery.query.groqQuery,
    { slug: props.page.slug }
  );
  const pageFilteredData = filterSanityDataToSingleItem({
    data: page,
    isPreview: !!props.preview,
  });

  return (
    <PageView
      preview
      loading={loadingPage}
      page={pageFilteredData!}
      slug={props.slug}
    />
  );
}
