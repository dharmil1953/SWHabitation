import React from "react";
import { BlogDetailPageType } from "../../../../../lib/sanity/types/blogDetail";
import clsx from "clsx";
import locales from "../../../../../lib/locales";
import Image from "../../Image";
import { ResourceDetailPageType } from "../../../../../lib/sanity/types/resourceDetail";
import { StoryDetailPageType } from "../../../../../lib/sanity/types/storyDetail";
export interface PreviewModalHeroSectionProps {
  block?: BlogDetailPageType | ResourceDetailPageType | StoryDetailPageType;
}
const PreviewModalHeroSection: React.FC<PreviewModalHeroSectionProps> = ({
  block,
}) => {
  const { image, title, author } = block || {};

  return (
    <div className="container">
      <div className=" pt-[38px] grid s(1100):grid-cols-1 grid-cols-[1fr_1fr] place-items-center s(1280):gap-[3em] s(1440):gap-[5em] s(1600):gap-[7em] gap-[7.375em] s(1100):pb-[80px] pb-[120px] ">
        <div>
          {title && (
            <span
              className={clsx("text-16 font-normal text-theme-black uppercase")}
            >
              {locales.en.BLOG}
            </span>
          )}
          {title && (
            <h1 className="s(767):text-32 s(1280):text-42 text-52 font-medium leading-[1] py-6 text-theme-black tracking-[-1%]">
              {title}
            </h1>
          )}

          {author && (
            <span className={clsx("text-20 text-theme-black font-normal")}>
              by {author?.name}
            </span>
          )}
        </div>

        {image && (
          <div className="s(1100):max-w-[400px] s(1100):h-[400px] max-w-[650px] h-[650px] object-cover w-full">
            <Image src={image} className="w-full h-full object-cover" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PreviewModalHeroSection;
