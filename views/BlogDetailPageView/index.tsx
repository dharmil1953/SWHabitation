
import { ArticleJsonLd } from "next-seo";
import Layout from "../../layouts/Layout";
import { BlogDetailPageType } from "../../lib/sanity/types/blogDetail";
import BlogDetailPage from "@/components/Views/BlogDetailPage";

export interface BlogDetailPageViewProps {
  preview?: boolean;
  loading?: boolean;
  page: BlogDetailPageType;
  slug?: string;
}

export default function BlogDetailPageView(props: BlogDetailPageViewProps) {
  const { preview, loading, page, slug } = props;
  const {  layoutProps,  } = page || {};

  return (
    <Layout
      seo={page?.seo}
      preview={preview}
      loading={loading}
      header={layoutProps?.header}
      footer={layoutProps?.footer}
      slug={`/blogs/${slug}`}
    >
      {page?.image?.asset?.url  && <ArticleJsonLd
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
        datePublished={page?.publishDate ? new Date(page?.publishDate || "").toISOString() : ""}
        dateModified={page?.publishDate ? new Date(page?.publishDate || "").toISOString() : ""}
      />}
      {page?.title && <BlogDetailPage block={page} />}
    </Layout>
  );
}
