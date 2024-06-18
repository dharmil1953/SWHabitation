import { useLiveQuery } from "next-sanity/preview";
import { filterSanityDataToSingleItem } from "../../lib/sanity/utils/filterSanityDataToSingleItem";
import BlogDetailPageView, { BlogDetailPageViewProps } from "../BlogDetailPageView";
import { blogDetailPageQuery } from "../../lib/sanity";
import { BlogDetailPageType } from "../../lib/sanity/types/blogDetail";

export default function PreviewBlogDetailPageView(
  props: BlogDetailPageViewProps
) {
  const [page, loadingPage] = useLiveQuery<BlogDetailPageType[]>(
    [props.page],
    blogDetailPageQuery.query.groqQuery,
    { slug: props.page.slug }
  );
  const pageFilteredData = filterSanityDataToSingleItem({
    data: page,
    isPreview: !!props.preview,
  });
  return (
    <BlogDetailPageView
      preview
      loading={loadingPage}
      page={pageFilteredData!}
      slug={props.slug}
    />
  );
}
