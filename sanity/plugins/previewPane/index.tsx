// This plugin is responsible for adding a “Preview” tab to the document pane
// You can add any React component to `S.view.component` and it will be rendered in the pane
// and have access to content in the form in real-time.
// It's part of the Studio's “Structure Builder API” and is documented here:
// https://www.sanity.io/docs/structure-builder-reference
import { DefaultDocumentNodeResolver } from "sanity/structure";
import { Iframe, type IframeOptions } from "sanity-plugin-iframe-pane";

import { JsonView } from "./JsonView";

const iframeOptions: IframeOptions = {
  url: {
    origin: "same-origin", // or 'same-origin' if the app and studio are on the same origin
    preview: (document) => {
      const slug = (document?.slug as any)?.current;
      if (slug) {
        switch (document?._type) {
          case "page":
            return slug.startsWith("/") ? slug : `/${slug}`
          case "blogs":
            return slug?.startsWith("/") ? slug : `/blog/${slug}`;
          case "resources":
            return slug?.startsWith("/") ? slug : `/resource/${slug}`;
          case "stories":
            return slug?.startsWith("/") ? slug : `/story/${slug}`;
          case "category":
            return slug?.startsWith("/") ? slug : `/categories/${slug}`;
          default:
            return slug.startsWith("/") ? slug : `/${slug}`;
        }
      }
      return new Error("Missing slug");
    },
    draftMode: "/api/draft", // the route you enable draft mode, see: https://github.com/sanity-io/visual-editing/tree/main/packages/preview-url-secret#sanitypreview-url-secret
  },

  reload: { button: true },
} satisfies IframeOptions;

export const previewDocumentNode = (): DefaultDocumentNodeResolver => {
  return (S, { schemaType }) => {
    switch (schemaType) {
      case "page":
        return S.document().views([
          S.view.form(),
          S.view.component(Iframe).options(iframeOptions).title("Preview"),
        ]);
      case "blogs":
        return S.document().views([
          S.view.form(),
          S.view.component(Iframe).options(iframeOptions).title("Preview"),
        ]);
      case "resources":
        return S.document().views([
          S.view.form(),
          S.view.component(Iframe).options(iframeOptions).title("Preview"),
        ]);
      case "category":
        return S.document().views([
          S.view.form(),
          S.view.component(Iframe).options(iframeOptions).title("Preview"),
        ]);
      default:
        return S.document().views([
          S.view.form(),
          S.view.component(JsonView).title("JSON"),
        ]);
    }
  };
};
