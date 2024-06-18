import { NextApiRequest, NextApiResponse } from "next";
import { templates } from "../../components/templates";
import { EmailService } from "../../../lib/services/mailsending-form";
import { SANITY_WRITE_TOKEN } from "../../../lib/constants";
import { getClient } from "../../../lib/sanity";
import { Services } from "../../../lib";
export const client = getClient(SANITY_WRITE_TOKEN);

export default async function handler(
  req: Omit<NextApiRequest, "body"> & { body: Record<string, any> },
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only post request allowed" });
  }
  try {
    const subject = "SW Habitation Contact Form";
    const data =
      await Services.SanityClientService.createMessageSendRequest({
        doc: req?.body,
        client: client,
      });
    const [_res] = [
      EmailService.send({
        html: templates.contactForm({
          name: String(data?.name),
          email: String(data?.email),
          message: String(data?.message),
          phoneNumber: String(data?.phone),
          subject: String(subject),
        }),
        subject,
      }),
      EmailService.send({
        html: templates.thankYou({ subject: "Thank you for joining with us!" }),
        subject: "Thank you for joining with us!",
        to: String(data?.email),
      }),
    ];
    return res.status(200).send(_res);
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Internal server error";
    res.status(500).json({ message: errorMessage });
  }
}
