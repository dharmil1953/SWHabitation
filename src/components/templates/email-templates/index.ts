import { readFileSync } from "fs";
import path from "path";
import contactFormData from "./contact-form.data";
import thankYouData from "./thank-you.data";
export const replaceAll = (
  inputString: string,
  replacements: Record<string, string>
) => {
  let resultString = inputString;

  for (const [token, replacement] of Object.entries(replacements)) {
    const regex = new RegExp(token, "g");
    resultString = resultString.replace(regex, replacement);
  }

  return resultString;
};
const templatesDirectory = path.resolve(process.cwd(), "components/templates");
const htmlPath = (filePath: string) => path.join(templatesDirectory, filePath);
export const emailTemplates = {
  contactForm: ({
    subject,
    name,
    email,
    phoneNumber,
    message,
  }: {
    subject: string;
    name: string;
    email: string;
    phoneNumber: string;
    message: string;
  }) =>
    replaceAll(
      contactFormData,
      // readFileSync(htmlPath("email-templates/contact-form.html")).toString(),
      {
        "{{subject}}": subject,
        "{{name}}": name,
        "{{email}}": email,
        "{{phoneNumber}}": phoneNumber,
        "{{message}}": message,
      }
    ),
  thankYou: ({ subject }: { subject: string }) =>
    replaceAll(
      thankYouData,
      // readFileSync(htmlPath("email-templates/thank-you.html")).toString(),
      { "{{subject}}": subject }
    ),
};
