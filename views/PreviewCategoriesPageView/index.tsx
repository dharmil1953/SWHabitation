import { useLiveQuery } from "next-sanity/preview";
import { filterSanityDataToSingleItem } from "../../lib/sanity/utils/filterSanityDataToSingleItem";
import { categoriesListingPageQuery } from "../../lib/sanity";
import CategoriesPageView, { CategoriesPageViewProps } from "../CategoriesPageView";
import { CategoryPageType } from "../../lib/sanity/types/categoryPage";


export default function PreviewCategoriesPageView(
    props: CategoriesPageViewProps
) {
    const [page, loadingPage] = useLiveQuery<CategoryPageType[]>(
        [props.page],
        categoriesListingPageQuery.query.groqQuery,
        { slug: props.page.slug }
    );
    const pageFilteredData = filterSanityDataToSingleItem({
        data: page,
        isPreview: !!props.preview,
    });
    return (
        <CategoriesPageView
            preview
            loading={loadingPage}
            page={pageFilteredData!}
            slug={props.slug}
        />
    );
}
