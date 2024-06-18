import React from "react";
import clsx from "clsx";
import Image from "../../../Commons/Image";
import { ResourceDetailPageType } from "../../../../../lib/sanity/types/resourceDetail";
import locales from "../../../../../lib/locales";
import {
  BackgroundColor,
  BackgroundText,
} from "@/components/Commons/Background";

export type ResourceDetailHeroSectionProps = {
  block: ResourceDetailPageType;
};
const ResourceDetailHeroSection: React.FC<ResourceDetailHeroSectionProps> = ({
  block,
}) => {
  const { image, title, slug, backgroundColor, author } = block || {};

  return (
    <div className={clsx("", BackgroundColor[backgroundColor])}>
      <div className="container">
        <div className="pt-[38px] grid s(1100):grid-cols-1 grid-cols-[1fr_1.5fr] items-center s(1280):gap-[3em] s(1440):gap-[5em] s(1600):gap-[7em] gap-[7.375em] s(1100):pb-[80px] s(1280):pb-[120px] s(1440):pb-[150px] s(1600):pb-[180px] pb-[200px]">
          <div className="s(1100):order-2 ">
            {image && (
              <div>
                <Image
                  src={image}
                  className="s(1100):w-full s(1100):h-[327px] w-[512px] h-[512px] object-cover"
                />
              </div>
            )}
          </div>

          <div>
            {title && (
              <span
                className={clsx(
                  "text-16 font-normal",
                  BackgroundText[backgroundColor]
                )}
              >
                {locales.en.RESOURCES}
              </span>
            )}
            {title && (
              <h1
                className={clsx(
                  `s(767):text-32 s(1280):text-42 text-52 font-medium leading-[1] py-6`,
                  BackgroundText[backgroundColor]
                )}
              >
                {title}
              </h1>
            )}

            {author && (
              <span
                className={clsx(
                  "text-20  font-normal",
                  BackgroundText[backgroundColor]
                )}
              >
                by {author?.name}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetailHeroSection;
