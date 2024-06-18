import React, { useState } from "react";
import Image from "../Image";
import clsx from "clsx";

const CodeText = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
      })
      .catch((error) => {
        console.error("Failed to copy: ", error);
      });

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <>
      <div
        className={clsx(
          "relative flex justify-between s(767):flex-col px-[24px] py-[7px] flex-row s(767):items-start items-center gap-4 border-[2px]  w-full rounded-sm mb-4",
          copied ? "border-theme-pink opacity-[0.7]" : "border-theme-black"
        )}
      >
        <code
          className={clsx(
            "copy-text  s(767):text-16 text-20 font-semibold max-w-[70%] w-full",
            copied ? "text-theme-pink" : "text-theme-black"
          )}
        >
          {text}
        </code>
        <div
          className={clsx(
            "flex items-center s(767):justify-center gap-[0.5rem] p-[10px] border-[2px] cursor-pointer s(767):w-full",
            copied ? "border-theme-pink" : "border-theme-black"
          )}
          onClick={() => handleCopy(text || "")}
        >
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.5 0C18.163 0 18.7989 0.234116 19.2678 0.650845C19.7366 1.06757 20 1.63278 20 2.22213V13.3328C20 13.9221 19.7366 14.4873 19.2678 14.904C18.7989 15.3208 18.163 15.5549 17.5 15.5549H16.25V6.66638C16.25 5.48769 15.7232 4.35728 14.7855 3.52382C13.8479 2.69036 12.5761 2.22213 11.25 2.22213H7.5C7.06119 2.22128 6.62994 2.32363 6.25 2.51878V2.22213C6.25 1.63278 6.51339 1.06757 6.98223 0.650845C7.45107 0.234116 8.08696 0 8.75 0H17.5Z"
              fill={clsx(copied ? "#E84A5F" : "#333333")}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 4.50531V8.88956H0.25C0.343305 8.71678 0.461369 8.55544 0.60125 8.40958L3.67625 5.22083C4.02112 4.86375 4.48464 4.61321 5 4.50531ZM7.5 4.44531V8.88956C7.5 9.47891 7.23661 10.0441 6.76777 10.4608C6.29893 10.8776 5.66304 11.1117 5 11.1117H0V17.7781C0 18.3674 0.263392 18.9326 0.732233 19.3493C1.20107 19.7661 1.83696 20.0002 2.5 20.0002H11.25C11.913 20.0002 12.5489 19.7661 13.0178 19.3493C13.4866 18.9326 13.75 18.3674 13.75 17.7781V6.66744C13.75 6.07809 13.4866 5.51289 13.0178 5.09616C12.5489 4.67943 11.913 4.44531 11.25 4.44531H7.5Z"
              fill={clsx(copied ? "#E84A5F" : "#333333")}
            />
          </svg>
          <span
            className={clsx(
              "s(767):text-14 text-16  font-normal",
              copied ? "text-theme-pink" : "text-theme-black"
            )}
          >
            {copied ? "Copied Text" : "Copy Text"}
          </span>
        </div>
      </div>
    </>
  );
};

export default CodeText;
