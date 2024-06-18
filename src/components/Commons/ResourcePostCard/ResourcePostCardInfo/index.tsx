import React from "react";
import Image from "../../Image";
import Link from "../../Link";
import { ResourceCardType } from "../../../../../lib/sanity/types";
import clsx from "clsx";
import { routes } from "../../../../../lib/routes";
import { BackgroundColor } from "../../Background";
export interface ResourcePostCardInfoProps {
  block: ResourceCardType;
  dividedlength: boolean;
}
const ResourcePostCardInfo: React.FC<ResourcePostCardInfoProps> = ({
  block,
  dividedlength,
}) => {
  const {
    image,
    slug,
    title,
    _type,
    _id,
    author,
    backgroundColor,
    resourceFilter,
  } = block || {};
  // const getpublishDate = publishDate ? dayjs(publishDate).format("MMM DD, YYYY") : null;
  return (
    <li className="grid s(767):grid-cols-1 grid-cols-2  s(1440):gap-6 gap-8 s(1440):mb-6 mb-8">
      <div
        className={clsx(
          BackgroundColor[backgroundColor],
          "s(767):p-6 s(1100):p-8 s(1280):p-10  p-12 w-full flex",
          dividedlength ? "s(767):order-2 order-1" : "s(767):order-1 order-2"
        )}
      >
        {image && (
          <Link
            ariaLabel={title}
            to={slug?.current ? routes.resources(slug?.current) : "#"}
          >
            <Image
              src={image}
              className="w-full s(767):h-auto s(999):h-[450px]  s(1100):h-[500px] h-[575px] object-cover"
            />
          </Link>
        )}
      </div>
      <div
        className={clsx(
          "bg-theme-black w-full p-2 flex flex-col items-start justify-center s(767):p-6 s(1100):p-8 s(1280):p-10 s(1440):pl-12  pl-[60px] ",
          dividedlength ? "order-2" : "order-1"
        )}
      >
        {resourceFilter?.title && (
          <Link
            to={slug?.current ? routes.resources(slug?.current) : "#"}
            ariaLabel={title}
          >
            <span className="text-16 font-normal uppercase  text-white">
              {resourceFilter?.title}
            </span>
          </Link>
        )}
        {title && (
          <Link
            ariaLabel={title}
            to={slug?.current ? routes.resources(slug?.current) : "#"}
          >
            <h3 className="s(767):text-32 s(1280):text-42 text-52 font-medium s(767):leading-[40px] s(1280):leading-[50px] leading-[59.8px] py-6 text-white max-w-[100%] w-full capitalize">
              {title}
            </h3>
          </Link>
        )}
        {author && (
          <span className={clsx("text-20 font-normal text-white")}>
            {author?.name}
          </span>
        )}
      </div>
    </li>
  );
};

export default ResourcePostCardInfo;
