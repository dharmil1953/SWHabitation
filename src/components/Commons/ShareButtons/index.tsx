import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import Image from "../Image";

const ShareButtons = () => {
  const url = typeof window !== "undefined" ? window.location.href : "";
  return (
    <ul className="flex items-center gap-7">
      <li>
        <TwitterShareButton url={url}>
          <Image
            src="assets/images/twitter.svg"
            alt="Twitter"
            height={20}
            width={20}
            className="w-[20px]"
          />
        </TwitterShareButton>
      </li>
      <li>
        <FacebookShareButton url={url}>
          <Image
            src="assets/images/facebook.svg"
            alt="Facebook"
            height={20}
            width={20}
            className="w-[20px]"
          />
        </FacebookShareButton>
      </li>
      <li>
        <LinkedinShareButton url={url}>
          <Image
            src="assets/images/linkedin.svg"
            alt="Linkdin"
            height={20}
            width={20}
            className="w-[20px]"
          />
        </LinkedinShareButton>
      </li>
    </ul>
  );
};
export default ShareButtons;
