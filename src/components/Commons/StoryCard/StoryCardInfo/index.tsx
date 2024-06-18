import React from "react";
import Image from "../../Image";
import Link from "../../Link";
import { StoryCardType } from "../../../../../lib/sanity/types";
import { routes } from "../../../../../lib/routes";
export interface StoryCardInfoProps {
  block: StoryCardType;
}
const StoryCardInfo: React.FC<StoryCardInfoProps> = ({ block }) => {
  const { image, slug, title, _type, _id } = block || {};
  return (
    <li>
      {image && (
        <Link
          ariaLabel={title}
          to={slug?.current ? routes.stories(slug?.current) : "#"}
        >
          <Image
            src={image}
            className="w-full s(640):h-auto s(1280):h-[400px]  h-auto s(999):object-contain object-cover"
          />
        </Link>
      )}
      {title && (
        <Link
          ariaLabel={title}
          to={slug?.current ? routes.stories(slug?.current) : "#"}
          className="pt-4 s(999):text-center block"
        >
          <h3 className="text-theme-black s(767):text-24 text-32 font-medium leading-[1.3] capitalize ">
            {title}
          </h3>
        </Link>
      )}
    </li>
  );
};

export default StoryCardInfo;
