import { useLiveQuery } from "next-sanity/preview";
import { filterSanityDataToSingleItem } from "../../lib/sanity/utils/filterSanityDataToSingleItem";
import ResourceDetailPageView, { ResourceDetailPageViewProps } from "../ResourceDetailPageView";
import { resourceDetailPageQuery } from "../../lib/sanity/queries/resourceDetailPageQuery";
import { ResourceDetailPageType } from "../../lib/sanity/types/resourceDetail";

export default function PreviewResourceDetailPageView(
  props: ResourceDetailPageViewProps
) {
  const [page, loadingPage] = useLiveQuery<ResourceDetailPageType[]>(
    [props.page],
    resourceDetailPageQuery.query.groqQuery,
    { slug: props.page.slug }
  );
  const pageFilteredData = filterSanityDataToSingleItem({
    data: page,
    isPreview: !!props.preview,
  });
  return (
    <ResourceDetailPageView
      preview
      loading={loadingPage}
      page={pageFilteredData!}
      slug={props.slug}
    />
  );
}
