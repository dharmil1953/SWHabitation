import { GetServerSidePropsContext } from "next";
import { fetchDataFromSanity } from "../../lib/sanity/utils/fetchDataFromSanity";
import { sitemapQuery } from "../../lib/sanity/queries/sitemapQuery";
import { google } from "googleapis";
export const serviceAccountKey = {
  type: "service_account",
  project_id: "swhabitation",
  private_key_id: "fc26cce954e9ab293cf7055f53c6633789c71123",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCovANl7WWGpsEq\nJnTFS7J9qvGzopAtPARf9prnoeAQclRBMrs7ogiz9RZWiAMJzRUvA3YWK67a8y1g\nfMYhsH3oraOu9fFvNytWGvpUfj/3Uy6JwIxvZxqbRe2+3glyvdmU1ATOYPBqufkE\nsguH/z6JJd1l1B2lN6+YA6BQWV18Ao4pTzt7noeW0nozyQ6KY0yODhyiTTaYZ9B7\n+Wkru/INgyD4iDqJ11ZF8NsKW1pwPruBABHCqa0Z8G0Fo2DsR2g551oeWgTmDQ1E\nBcM/BKsu1bc8p/xU+2MyYiFGbUwc7qqvPt4hmiTi//DnX2kOYpjMXlciR5dUl4xQ\nYkQho7qZAgMBAAECggEAPlhRzRx9MdZ1cvSImsmQZtx9uAjtyrjtSOPeco2eM5V6\nyihLhAonuw5otYpFzR5IoHlf7WswjVfiwU75CkOjEhDudNwM3DH/Qi5vpj6Ltf+3\nJ1DM0vC+pPaelLKHvSyms1XvfK3Wxyh1+SUsG5DU82nZNyG73msH51wXpPiQERxq\nq9sY3M54sFlTK2JcuSSpOtdEJsP2KsixREiLxOTw0liaLIOqpVMYsWeOGurLYLtm\n6RYdGmyTE5BlGKPjRk7oNbyJ2/Msn34G0woFRUt9XOjSeYLJXN9cGE4JmqKa2IKI\n2Kj7j5gQGLb4CP8a1uGT5Ejl9ecFsfofBS7kRnHdrQKBgQDeEiPqKHfqBYE7G0Ch\nsM/OmbOF9UhtCPgsDZOe5QFtNfXkJzwvNmBEyRE7N9RUmCUbDYbqqTOxS1gO/YgK\ntFwaR0o/dlFFNcY3rO9GVWBdx9My5ksDvDbF8Kvj2hICOX9aXp5Q1pw3hdTnK1Cp\nRAPh8z3FXZpWNO7qMtSe0Vd6fwKBgQDCg7l7VrswRtEOVJjfwE4asxvrB3igAS5p\nrCvrLqCptBFW2uXoJzlkLSXTygSgCoqPahsyngFDjrQvi+A4I557r47z2iUYwsgF\nNKIAuHP4kZowVDxF+f2eXss/VGX4x3UXw3N1zngBQIyT24zM5l7leNGi9duTC7jR\np4H6497O5wKBgQCa8e9LL0dT6tlbg01aRAMKtSWUfys0oMCABE0O3dxb9f2GXnXY\nv0j2VZCHUBH/oFSrhomva7Wcq+RaOT3VsjhdQYaltwlHkBiouioNWf6uEIHlDtgi\nWA2jmKRmi75q/PFF/aTa5JMFDoUZcpiKMeG/ordj4UaRhcd5c1P1KD2wQwKBgQCY\nJi8s0e/D2HDoM7YMt0Cg098PnZ12EtZ6JAmKgcN8WvSBKuJREHVs7X+8RTYO9Y/i\nlE3H7x3v+SzqUBBH+VybRPyds9H2p02L/NqHk8Bq+4FPMmSfG+eNPHrhA6Rrz6DA\nwMqMqL7nw9TyRvbAw6YQ+suIG6XwRGgB3nPmit2amwKBgE2EuG8/cakvA+atarZh\nWMw5ZpPFo53u40h2IjkveAyZBZonoUsSbhWDflnlItHAObpwDAuUU0RIFLiCruef\nUh61Hk5BW8M6kLZb6PfZ9o0jqBQ4cGsD4Wiq1Rq8qexCsPiAPINTHQ9k+3jGE+lg\n3PiBeRZFMyaYAV0RfUI0K5LU\n-----END PRIVATE KEY-----\n",
  client_email: "swhabitation@swhabitation.iam.gserviceaccount.com",
  client_id: "105016500185901879518",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/swhabitation%40swhabitation.iam.gserviceaccount.com",
  universe_domain: "googleapis.com"
}
type SitemapLocation = {
  url: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
  lastmod?: Date;
};

// Use this to manually add routes to the sitemap
const defaultUrls: SitemapLocation[] = [
  {
    url: "/",
    changefreq: "daily",
    priority: 1,
    lastmod: new Date(), // or custom date: '2023-06-12T00:00:00.000Z',
  },
];
function authenticateWithServiceAccount() {
  return new google.auth.JWT(
    serviceAccountKey.client_email,
    null as any,
    serviceAccountKey.private_key,
    ["https://www.googleapis.com/auth/webmasters"]
  );
}
const submitSitemap = async (websiteUrl: string, sitemapUrl: string) => {
  try {
    const auth = authenticateWithServiceAccount();
    const webmasters = google.webmasters({ version: "v3", auth });

    await webmasters.sitemaps.submit({
      siteUrl: websiteUrl,
      feedpath: sitemapUrl
    });

    // console.log(`Sitemap ${sitemapUrl} submitted successfully.`);
    return true;
  } catch (error) {
    console.error("Error submitting sitemap:", (error as Error).message);
    return false;
  }
};
const createSitemap = (locations: SitemapLocation[]) => {
  let vercelUrl = process.env.NEXT_PUBLIC_APP_URL
    ? process.env.NEXT_PUBLIC_APP_URL
    : null;
  if (vercelUrl && !vercelUrl.startsWith("https://")) {
    vercelUrl = `https://${vercelUrl}`;
  }
  const siteUrl = vercelUrl || ""; // Make sure to configure this
  const baseUrl = siteUrl.endsWith("/")
    ? siteUrl.slice(0, siteUrl.length - 1)
    : siteUrl;
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${locations
        .map((location) => {
          const encodedPath = location?.url
            .split("/")
            .map((i) => encodeURIComponent(i))
            .join("/");
          return `<url>
          <loc>${baseUrl}${
            encodedPath?.endsWith("/") ? encodedPath : `${encodedPath}/`
          }</loc>
          <priority>${location?.priority}</priority>
          ${
            location?.lastmod
              ? `<lastmod>${location?.lastmod.toISOString()}</lastmod>`
              : ""
          }
      </url>`;
        })
        .join("")}
  </urlset>
  `;
};

export default function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  // Get list of sanity page-urls
  const routesFromSanity = await fetchDataFromSanity<
    { slug: string; _updatedAt: string }[]
  >({
    query: sitemapQuery.query,
  });
  const siteUrls: SitemapLocation[] = routesFromSanity.map((route) => {
    return {
      url: `/${route.slug}`,
      priority: 0.5,
      lastmod: new Date(route._updatedAt),
    };
  });

  // ... get more routes here

  // Return the default urls, combined with dynamic urls above
  const locations = [...defaultUrls, ...siteUrls];

  // Set response to XML
  res.setHeader("Content-Type", "text/xml");
  // Instructing the Vercel edge to cache the file
  res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=60");
  res.end(createSitemap(locations));

  const websiteUrl = "https://swhabitation.com"; // replace with your website URL
  const sitemapUrl = "/sitemap.xml"; // replace with your sitemap URL
  const submissionResult = await submitSitemap(websiteUrl, sitemapUrl);
  // console.log(submissionResult, "submissionResult");
  return {
    props: {},
  };
}
