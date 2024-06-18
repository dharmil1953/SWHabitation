import React, { useEffect, useState } from "react";
import FacebookIcon from "@/components/Commons/AllIcons/FacebookIcon";
import LinkedinIcon from "@/components/Commons/AllIcons/LinkedinIcon";
import TwitterIcon from "@/components/Commons/AllIcons/TwitterIcon";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

const BlogDetailShareButtons = () => {
  const url = typeof window !== "undefined" ? window.location.href : "";
  const [innerText, setInnerText] = useState("");

  useEffect(() => {
    const getBlogContent = () => {
      const element = document.getElementById("blogContent");
      const textContent = element?.textContent;
      setInnerText(textContent || "");
    };

    getBlogContent();
  }, []);

  return (
    <div>
      <div>
        <ul className="flex flex-row gap-3 justify-center items-center">
          <li className="border-[1px] border-theme-black rounded-lg group hover:bg-theme-black">
            <TwitterShareButton
              aria-label="Twitter"
              url={url}
              className="!p-2 flex flex-col justify-center "
            >
              <TwitterIcon className="max-w-[20px] w-full [&>path]:fill-theme-black group-hover:[&>path]:fill-white" />
            </TwitterShareButton>
          </li>
          <li className="border-[1px] border-theme-black rounded-lg group hover:bg-theme-black">
            <FacebookShareButton
              aria-label="Facebook"
              url={url}
              className="!p-2 flex flex-col justify-center"
            >
              <FacebookIcon className="max-w-[20px] w-full [&>path]:fill-theme-black group-hover:[&>path]:fill-white" />
            </FacebookShareButton>
          </li>
          <li className="border-[1px] border-theme-black rounded-lg group hover:bg-theme-black">
            <LinkedinShareButton
              aria-label="Linkedin"
              url={url}
              className="!p-2 flex flex-col justify-center"
            >
              <LinkedinIcon className="max-w-[20px] w-full [&>path]:fill-theme-black group-hover:[&>path]:fill-white" />
            </LinkedinShareButton>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogDetailShareButtons;
