import axios from "axios";
import {
  MAIL_ACCOUNT_EMAIL,
  MAIL_ACCOUNT_PASSWORD,
  MAIL_DEFAULT_RECEIVER_ACCOUNT_EMAIL,
  MAIL_SERVER_HOSTNAME,
  MAIL_SERVER_PORT,
  MAIL_SERVICE_API,
} from "../constants";

export const DEFAULT_SENDER = `"SW Habitation" <${MAIL_ACCOUNT_EMAIL}>`;
export const DEFAULT_RECEIVER = MAIL_DEFAULT_RECEIVER_ACCOUNT_EMAIL;
export type SendMailArgs = {
  from?: string;
  to?: string;
  subject: string;
  html: string;
};

type ApiError = {
  message: string | null;
  isError: true;
  data: null;
  status: number;
};
type ApiSuccess<T> = {
  message: null;
  isError: false;
  data: T;
  status: number;
};
export type MailApiResponse<T = any> = ApiError | ApiSuccess<T>;
const config = {
  host: MAIL_SERVER_HOSTNAME,
  port: MAIL_SERVER_PORT || 465,
  auth: { user: MAIL_ACCOUNT_EMAIL, pass: MAIL_ACCOUNT_PASSWORD },
};
export class EmailService {
  public static send = async (
    data: SendMailArgs
  ): Promise<
    MailApiResponse<{
      isSuccess: boolean;
    }>
  > => {
    try {
      const res = await axios.post<MailApiResponse<{ isSuccess: boolean }>>(
        MAIL_SERVICE_API,
        {
          config,
          data: {
            ...data,
            from: data.from ?? DEFAULT_SENDER,
            to: data.to ?? DEFAULT_RECEIVER,
          },
        }
      );
      return res.data;
    } catch (err) {
      return {
        data: null,
        isError: true,
        message: err.message,
        status: 500,
      };
    }
  };
}
