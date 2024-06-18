import React from "react";
import { RecommendedResourcesType } from "../../../../../../lib/sanity/types";
import clsx from "clsx";
import Link from "@/components/Commons/Link";
import { routes } from "../../../../../../lib/routes";
export interface RecommendedResourceInfoProps {
  block: RecommendedResourcesType;
}
const RecommendedResourceInfo: React.FC<RecommendedResourceInfoProps> = ({
  block,
}) => {
  const { slug, title, author, resourceFilter } = block || {};
  return (
    <div className="flex flex-col gap-4 border-b-[1px] border-theme-gray pb-[3rem]">
      {resourceFilter?.title && (
        <Link ariaLabel={title} to={slug?.current ? routes.resources(slug?.current) : "#"} className="s(1280):max-w-full max-w-[65%] w-full">
          <span className="text-theme-black text-15">
            {resourceFilter?.title}
          </span>
        </Link>
      )}
      {title && (
        <Link ariaLabel={title}  to={slug?.current ? routes.resources(slug?.current) : "#"} className="s(1280):max-w-full max-w-[65%] w-full">
          <h2
            className={clsx(
              "s(767):text-32 text-42 font-medium leading-[1] tracking-[-1%] capitalize  "
            )}
          >
            {title}
          </h2>
        </Link>
      )}

      {author && (
        <span className={clsx("text-20  font-normal text-theme-black")}>
          by {author?.name}
        </span>
      )}
    </div>
  );
};

export default RecommendedResourceInfo;
