
import { ArticleJsonLd } from "next-seo";
import Layout from "../../layouts/Layout";
import { ResourceDetailPageType } from "../../lib/sanity/types/resourceDetail";
import ResourceDetailPage from "@/components/Views/ResourceDetailPage";
export interface ResourceDetailPageViewProps {
  preview?: boolean;
  loading?: boolean;
  page: ResourceDetailPageType;
  slug?: string;
}

export default function ResourceDetailPageView(props: ResourceDetailPageViewProps) {
  const { preview, loading, page, slug } = props;
  const { layoutProps, backgroundColor} = page || {};
  return (
    <Layout
      seo={page?.seo}
      preview={preview}
      loading={loading}
      header={layoutProps?.header}
      footer={layoutProps?.footer}
      slug={`/resources/${slug}`}
      backgroundColor={backgroundColor}
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
        description={page?.jsonLdContent|| ""}
        datePublished={page?.publishDate ? new Date(page?.publishDate || "").toISOString() : ""}
        dateModified={page?.publishDate ? new Date(page?.publishDate || "").toISOString() : ""}
      />
      {page && <ResourceDetailPage block={page} />}
    </Layout>
  );
}
