import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { NewsLetterType } from "../../../../lib/sanity/types";
import { MAILCHIMP_ENDPOINT } from "../../../../lib/constants";
import EmailForm from "./EmailForm";

export interface NewsLetterProps {
  block: NewsLetterType;
}

const NewsLetter: React.FC<NewsLetterProps> = ({ block }) => {
  const { inputPlaceholder, subscribeButton, title } = block || {};
  const PostUrl =
    process.env.MAILCHIMP_ENDPOINT ??
    "https://gmail.us17.list-manage.com/subscribe/post?u=3c5fd86c9eae9d0783dce6d24&id=9c0e4b235d&f_id=00c348e0f0";
  return (
    <>
      <div>
        {title && (
          <h2 className="s(767):text-28 s(999):text-32 s(1280):text-38 text-42 leading-[1.2] s(999):max-w-[75%] s(1280):max-w-[90%] max-w-[30%] mx-auto w-full font-medium">
            {title}
          </h2>
        )}
        <div className="newsLetterForm [&gt;div&gt;form]:grid-cols-[2fr_1fr] relative">
          <MailchimpSubscribe
            url={String(PostUrl)}
            render={({ subscribe, status, message }) => {
              return (
                <>
                  <div className="flex flex-col xl:flex-row justify-center xl:justify-between relative font-poppins">
                    {status !== "success" && (
                      <EmailForm
                        status={status}
                        message={message}
                        subscribe={subscribe}
                        input_placeholder={inputPlaceholder || ""}
                        button_label={subscribeButton || "SUBSCRIBE"}
                        sidebar
                      />
                    )}
                  </div>
                  <div className="mail-msg-text">
                    {status === "sending" && (
                      <span className="success block text-center text-20 m-[3em_auto_1em]">
                        Sending...
                      </span>
                    )}
                    {status === "error" && (
                      <span
                        className="error block text-center text-18 text-red-500 m-[1em_auto_1em]"
                        dangerouslySetInnerHTML={{
                          __html: String(message),
                        }}
                      />
                    )}
                    {status === "success" && (
                      <span
                        className="success block text-center text-20 text-green-800 m-[3em_auto_1em]"
                        dangerouslySetInnerHTML={{
                          __html: String(message),
                        }}
                      />
                    )}
                  </div>
                </>
              );
            }}
          />
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
