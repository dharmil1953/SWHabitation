import React from "react";
import clsx from "clsx";
import locales from "../../../../../lib/locales";
import Image from "@/components/Commons/Image";
import { StoryDetailPageType } from "../../../../../lib/sanity/types/storyDetail";
import dayjs from "dayjs";

export type StoryDetailHeroSectionProps = {
  block: StoryDetailPageType;
};
const StoryDetailHeroSection: React.FC<StoryDetailHeroSectionProps> = ({
  block,
}) => {
  const { image, title, publishDate } = block || {};
  const getpublishDate = publishDate
    ? dayjs(publishDate).format("MMM DD, YYYY")
    : null;

  return (
    <div>
      <div className=" flex flex-col  items-center gap-8">
        <div className="flex flex-col items-center ">
          {title && (
            <span
              className={clsx("text-16 font-normal text-theme-black uppercase")}
            >
              {locales.en.STORIES}
            </span>
          )}
          {title && (
            <h1 className="s(767):text-32 s(1280):text-42 text-52 font-medium leading-[1] py-6 text-theme-black tracking-[-1%] text-center capitalize">
              {title}
            </h1>
          )}

          {getpublishDate && (
            <span className="text-base text-theme-black pb-5 block font-semibold">
              {`${getpublishDate}`}
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

export default StoryDetailHeroSection;
