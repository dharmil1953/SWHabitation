import FacebookIcon from "@/components/Commons/AllIcons/FacebookIcon";
import LinkedinIcon from "@/components/Commons/AllIcons/LinkedinIcon";
import TwitterIcon from "@/components/Commons/AllIcons/TwitterIcon";
import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

const StoryDetailShareButtons = () => {
  const url = typeof window !== "undefined" ? window.location.href : "";
  return (
    <div>
      <div>
        <ul className="flex flex-row gap-3  justify-center  items-center ">
          <li className=" border-[1px] border-theme-black rounded-lg ">
            <TwitterShareButton
              aria-label="Twitter"
              url={url}
              className="!p-2 flex flex-col justify-center"
            >
              <TwitterIcon className="max-w-[20px] w-full [&>path]:fill-theme-black" />
            </TwitterShareButton>
          </li>
          <li className=" border-[1px] border-theme-black rounded-lg ">
            <FacebookShareButton
              aria-label="Facebook"
              url={url}
              className="!p-2 flex flex-col justify-center"
            >
              <FacebookIcon className="max-w-[20px] w-full [&>path]:fill-theme-black" />
            </FacebookShareButton>
          </li>
          <li className="border-[1px] border-theme-black rounded-lg ">
            <LinkedinShareButton
              aria-label="Linkedin"
              url={url}
              className="!p-2 flex flex-col justify-center"
            >
              <LinkedinIcon className="max-w-[20px] w-full [&>g>path]:fill-theme-black" />
            </LinkedinShareButton>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default StoryDetailShareButtons;
