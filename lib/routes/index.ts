export const routes = {
  home: () => "/",
  four_o_four: () => "/404",
  blog_index: () => "/blogs",
  resource_index: () => "/resources",
  story_index: () => "/stories",
  category_index: () => "/categories",
  blogs: (slug: string) => `/blogs/${slug}`,
  resources: (slug: string) => `/resources/${slug}`,
  stories: (slug: string) => `/story/${slug}`,
  categories: (slug: string) => `/categories/${slug}`,
};
