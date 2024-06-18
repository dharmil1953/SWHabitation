import { useLiveQuery } from "next-sanity/preview";
import { filterSanityDataToSingleItem } from "../../lib/sanity/utils/filterSanityDataToSingleItem";
import StoryDetailPageView, { StoryDetailPageViewProps } from "../StoryDetailPageView";
import { StoryDetailPageType } from "../../lib/sanity/types/storyDetail";
import { storyDetailPageQuery } from "../../lib/sanity";

export default function PreviewStoryDetailPageView(
  props: StoryDetailPageViewProps
) {
  const [page, loadingPage] = useLiveQuery<StoryDetailPageType[]>(
    [props.page],
    storyDetailPageQuery.query.groqQuery,
    { slug: props.page.slug }
  );
  const pageFilteredData = filterSanityDataToSingleItem({
    data: page,
    isPreview: !!props.preview,
  });
  return (
    <StoryDetailPageView
      preview
      loading={loadingPage}
      page={pageFilteredData!}
      slug={props.slug}
    />
  );
}
