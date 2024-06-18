import React, { useEffect, useMemo } from "react";
import type { PropsWithChildren } from "react";

import {
  LocalBusinessJsonLd,
  LogoJsonLd,
  NextSeo,
  SocialProfileJsonLd,
} from "next-seo";
import dynamic from "next/dynamic";
import {
  BackgroundColorType,
  FooterType,
  HeaderType,
  SeoType,
} from "../lib/sanity/types";
import { useAnalytics } from "../lib/utils/analytics";
import { NEXT_PUBLIC_APP_URL } from "../lib/constants";
import { getMetaObjects, getOpenGraph } from "../lib/metaHelper";
import AlertBanner from "../src/components/PreviewView/AlertBanner";
import Header from "../src/components/Header";
import { MetaTag } from "next-seo/lib/types";
import { useSanityImage } from "../lib/sanity";
import Script from "next/script";
const Footer = dynamic(() => import("../src/components/Footer"));

interface LayoutProps {
  header?: HeaderType;
  footer?: FooterType;
  preview?: boolean;
  loading?: boolean;
  backgroundColor?: BackgroundColorType;
  seo: SeoType | null;
  slug?: string;
}
const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
  children,
  footer,
  header,
  seo,
  loading,
  preview,
  slug,
  backgroundColor,
}) => {
  const {
    additionalMetaTags,
    metaDescription,
    metaTitle,
    twitter,
    jsonLdData,
    keywords,
  } = seo || {};
  const tags = useMemo(
    () => (additionalMetaTags ? getMetaObjects(additionalMetaTags) : []),
    [additionalMetaTags]
  );
  const openGraph = useMemo(
    () => (seo?.openGraph ? getOpenGraph(seo?.openGraph) : undefined),
    [seo]
  );
  const url =
    (NEXT_PUBLIC_APP_URL ?? "") + (slug?.startsWith("/") ? slug : `/${slug}`);
  const { description, image, name, telePhone } = jsonLdData || {};
  const Logo = useSanityImage(image);
  const { ReactGA, isInitialized } = useAnalytics();
  useEffect(() => {
    if (isInitialized && slug) {
      ReactGA.send({
        hitType: "pageview",
        page: slug?.startsWith("/") ? slug : `/${slug}`,
      });
    }
  }, [slug]);

  const hideHeader = ["/"].includes(slug);
  const hideFooter = ["/"].includes(slug);
  return (
    <>
      <NextSeo
        themeColor=""
        twitter={twitter}
        nofollow={process.env.NEXT_PUBLIC_ALLOW_INDEXING !== "true"}
        noindex={process.env.NEXT_PUBLIC_ALLOW_INDEXING !== "true"}
        openGraph={openGraph}
        canonical={url || ""}
        additionalMetaTags={(
          (keywords && keywords?.length > 0
            ? [{ name: "keywords", content: keywords.join(", ") }]
            : []) as MetaTag[]
        ).concat(tags ?? [])}
        title={metaTitle ?? ""}
        description={metaDescription ?? ""}
      />
      <SocialProfileJsonLd
        type="Organization"
        name={metaTitle || ""}
        url={url || ""}
        sameAs={[""]}
      />
      <LogoJsonLd logo={Logo?.src || ""} url={url || ""} />
      <LocalBusinessJsonLd
        type="store"
        id={url || ""}
        name={metaTitle || ""}
        description={description || ""}
        telephone={telePhone || ""}
        images={[Logo?.src || ""]}
        address={{
          "@type": "PostalAddress",
          streetAddress:
            " Nr. Shell Petrol Pump, Fortune Business Hub, Science City Rd,",
          addressLocality: "Sola",
          addressRegion: "Ahmedabad",
          postalCode: "380060",
          addressCountry: "IN",
        }}
        priceRange="$
        424,$764,$
        1274,$2124"
        openingHours={[
          {
            opens: "09:00",
            closes: "19:59",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            validFrom: "2019-12-23",
            validThrough: "2020-04-02",
          },
        ]}
        rating={{
          ratingValue: "4.5",
          ratingCount: "4",
        }}
        review={[
          {
            author: {
              name: "Frank Jackson",
            },
            datePublished: "2020-05-04",
            name: name || "",
            reviewBody:
              "mpressive professionalism and communication. Jamstacky has provided excellent service and customer support, and superior technical development. It is the best jamstack development agency. I highly recommend it for our next project and to other people.",
            reviewRating: {
              bestRating: "5",
              worstRating: "1",
              ratingValue: "4",
            },
          },
        ]}
      />
      {preview && <AlertBanner preview={preview} loading={loading} />}
      <div>
        {!hideHeader && header && (
          <Header
            block={header}
            path={slug?.startsWith("/") ? slug : `/${slug}`}
            backgroundColor={backgroundColor}
          />
        )}
        {children}
        {!hideFooter && footer && (
          <Footer
            block={footer}
            path={slug?.startsWith("/") ? slug : `/${slug}`}
          />
        )}
      </div>
      {hideFooter && footer && (
        <Footer
          block={footer}
          path={slug?.startsWith("/") ? slug : `/${slug}`}
        />
      )}
    </>
  );
};

export default Layout;
