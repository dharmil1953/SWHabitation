import FacebookIcon from "@/components/Commons/AllIcons/FacebookIcon";
import LinkedinIcon from "@/components/Commons/AllIcons/LinkedinIcon";
import TwitterIcon from "@/components/Commons/AllIcons/TwitterIcon";
import clsx from "clsx";
import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { BackgroundColorType } from "../../../../../lib/sanity/types";
import {
  BackgroundBorder,
  BackgroundFill,
} from "@/components/Commons/Background";

const ResourceDetailShareButtons = ({
  backgroundColor,
}: {
  backgroundColor: BackgroundColorType;
}) => {
  const url = typeof window !== "undefined" ? window.location.href : "";
  return (
    <div>
      <div>
        <ul className="flex flex-row gap-3  justify-center  items-center ">
          <li
            className={clsx(
              "p-2 border-[1px] rounded-lg flex flex-col justify-center cursor-pointer",
              BackgroundBorder[backgroundColor]
            )}
          >
            <TwitterShareButton aria-label="Twitter" url={url}>
              <TwitterIcon
                className={clsx(
                  "max-w-[20px]  w-full",
                  BackgroundFill[backgroundColor]
                )}
              />
            </TwitterShareButton>
          </li>
          <li
            className={clsx(
              "p-2 rounded-lg  border-[1px] flex flex-col justify-center cursor-pointer",
              BackgroundBorder[backgroundColor]
            )}
          >
            <FacebookShareButton aria-label="Facebook" url={url}>
              <FacebookIcon
                className={clsx(
                  "max-w-[20px] w-full",
                  BackgroundFill[backgroundColor]
                )}
              />
            </FacebookShareButton>
          </li>
          <li
            className={clsx(
              "p-2 rounded-lg  border-[1px] flex flex-col justify-center cursor-pointer",
              BackgroundBorder[backgroundColor]
            )}
          >
            <LinkedinShareButton aria-label="Linkedin" url={url}>
              <LinkedinIcon
                className={clsx(
                  "max-w-[20px] w-full",
                  BackgroundFill[backgroundColor]
                )}
              />
            </LinkedinShareButton>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ResourceDetailShareButtons;
