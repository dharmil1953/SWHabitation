import { createClient, type SanityClient } from "next-sanity";
import { allBlogDetailPageSlugsQuery, allPageSlugsQuery, allResourceDetailPageSlugsQuery, allStoryDetailPageSlugsQuery, categoriesSlugsQuery} from "./sanity.queries";
import { apiVersion, dataset, projectId, useCdn } from "./sanity";
import { Page as PageType } from "./sanity/types/page";
import { ResourceDetailPageType } from "./sanity/types/resourceDetail";
import { BlogDetailPageType } from "./sanity/types/blogDetail";
import { StoryDetailPageType } from "./sanity/types/storyDetail";
import { CategoryPageType } from "./sanity/types/categoryPage";

export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: "published",
  });
  if (preview) {
    if (!preview.token) {
      throw new Error("You must provide a token to preview drafts");
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: "previewDrafts",
    });
  }
  return client;
}
export async function getAllPageSlugs(): Promise<
  Pick<PageType, "slug">[]
> {
  const client = getClient();
  const slugs =
    (await client.fetch<Pick<PageType, "slug">[]>(
      allPageSlugsQuery
    )) || [];
  return slugs;
}
export async function getAllBlogDetailPageSlugs(): Promise<
  Pick<BlogDetailPageType, "slug">[]
> {
  const client = getClient();
  const slugs =
    (await client.fetch<Pick<BlogDetailPageType, "slug">[]>(
      allBlogDetailPageSlugsQuery
    )) || [];
  return slugs;
}
export async function getAllResourceDetailPageSlugs(): Promise<
  Pick<ResourceDetailPageType, "slug">[]
> {
  const client = getClient();
  const slugs =
    (await client.fetch<Pick<ResourceDetailPageType, "slug">[]>(
      allResourceDetailPageSlugsQuery
    )) || [];
  return slugs;
}
export async function getAllStoryDetailPageSlugs(): Promise<
  Pick<StoryDetailPageType, "slug">[]
> {
  const client = getClient();
  const slugs =
    (await client.fetch<Pick<StoryDetailPageType, "slug">[]>(
      allStoryDetailPageSlugsQuery
    )) || [];
  return slugs;
}
export async function getCategoriesSlugs(): Promise<
  Pick<CategoryPageType, "slug">[]
> {
  const client = getClient();
  const slugs =
    (await client.fetch<Pick<CategoryPageType, "slug">[]>(
      categoriesSlugsQuery
    )) || [];
  return slugs;
}