import type { NextApiRequest, NextApiResponse } from "next";
import { createClient, SanityClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "../../../lib/sanity";

const previewSecret = "preview.secret";
const query = (ttl) => /* groq */ `
  *[_id == $id && dateTime(_updatedAt) > dateTime(now()) - ${ttl}][0].secret
`;
const getSecret = async ({
  client,
  createIfNotExists,
}: {
  client: SanityClient;
  createIfNotExists?: false;
}) => {
  const ttl = createIfNotExists ? 60 * 30 : 60 * 60;

  const secret = await client.fetch(query(ttl), { id: previewSecret });

  return secret;
};
function redirectToPreview(
  res: NextApiResponse<string | void>,
  Location: string
): void {
  // Enable Draft Mode by setting the cookies
  res.setDraftMode({ enable: true });
  // Redirect to a preview capable route
  res.writeHead(307, { Location });
  res.end();
}

const _client = createClient({ projectId, dataset, apiVersion, useCdn });

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse<string | void>
) {
  if (!req.query.secret) {
    return res.status(401).send("Invalid secret");
  }

  const token = process.env.SANITY_API_READ_TOKEN;
  if (!token) {
    throw new Error(
      "A secret is provided but there is no `SANITY_API_READ_TOKEN` environment variable setup."
    );
  }
  const client = _client.withConfig({ token });
  const storedSecret = await getSecret({ client });
  if (req.query.secret !== storedSecret) {
    return res.status(401).send("Invalid secret");
  }
  if (!req.query.redirect) {
    return redirectToPreview(res, "/");
  }
  redirectToPreview(res, req.query.redirect as string);
}
