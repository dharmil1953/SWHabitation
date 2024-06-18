import { ArticleJsonLd } from "next-seo";
import Layout from "../../layouts/Layout";
import { StoryDetailPageType } from "../../lib/sanity/types/storyDetail";
import StoryDetailPage from "@/components/Views/StoryDetailPage";

export interface StoryDetailPageViewProps {
	preview?: boolean;
	loading?: boolean;
	page: StoryDetailPageType;
	slug?: string;
}

export default function StoryDetailPageView(props: StoryDetailPageViewProps) {
	const { preview, loading, page, slug } = props;
	const { layoutProps } = page || {};
	return (
		<Layout
			seo={page?.seo}
			preview={preview}
			loading={loading}
			header={layoutProps?.header}
			footer={layoutProps?.footer}
			slug={`/story/${slug}`}
		>
			<ArticleJsonLd
				type="BlogPosting"
				publisherName={page?.author?.name || ""}
				publisherLogo={page?.image?.asset?.url || ""}
				title={page?.title || ""}
				url={slug || ""}
				images={[page?.image?.asset?.url || ""]}
				authorName={{
					name: page?.author?.name || "",
					url: page?.image?.asset?.url || "",
				}}
				description={page?.jsonLdContent || ""}
				datePublished={
					page?.publishDate
						? new Date(page?.publishDate || "").toISOString()
						: ""
				}
				dateModified={
					page?.publishDate
						? new Date(page?.publishDate || "").toISOString()
						: ""
				}
			/>
			{page && <StoryDetailPage block={page} />}
		</Layout>
	);
}
