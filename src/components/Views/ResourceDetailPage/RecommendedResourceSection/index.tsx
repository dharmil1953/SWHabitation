import React from "react";
import { RecommendedResourcesType } from "../../../../../lib/sanity/types";
import RecommendedResourceInfo from "./RecommendedResourceInfo";

export interface RecommendedResourceSectionProps {
  block?: RecommendedResourcesType[];
}
const RecommendedResourceSection: React.FC<RecommendedResourceSectionProps> = ({
  block,
}) => {
  return (
    <div className=" mb-[6rem] sm:mb-[10rem] ">
      <div className="container">
        <div>
          {block && block.length > 0 && (
            <h2 className="s(767):text-38 s(1440):text-52 text-64 font-semibold text-theme-black leading-[1.4] capitalize pb-12">
              {"Recommended Resources"}
            </h2>
          )}
          {block && block.length > 0 && (
            <div className=" grid grid-cols-1  mt-8 w-full gap-y-12 gap-x-8 [&>*:nth-last-child(1)]:border-b-0">
              {block?.map((item, index) => {
                return <RecommendedResourceInfo block={item} key={index} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecommendedResourceSection;
