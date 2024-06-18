import React from "react";
import { AllResourcePostSectionType } from "../../../lib/sanity/types/page";
import ResourcePostCard from "../Commons/ResourcePostCard";
import CustomDropdown from "../Commons/CustomDropdown";
import { useSearchModals } from "../../../lib/hooks/useModals";

const AllResourcePostSection: React.FC<AllResourcePostSectionType> = (
  block
) => {
  const { title, allResources, id } = block || {};
  const { currCategory, setCurrCategory } = useSearchModals();
  return (
    <div id={id} className="pb-[4rem] sm:pb-[5rem] lg:pb-[9.375rem]">
      <div className="container">
        <div className="flex justify-between items-center s(1100):flex-col s(1100):gap-y-[30px] s(1100):pt-[36px] py-[56px] s(1100):pb-[62px] pb-[150px] ">
          {title && (
            <h2 className=" s(767):text-38 s(1440):text-52 text-64 font-semibold text-theme-black leading-[1.4] uppercase  s(1100):text-center">
              {currCategory !== "allpost" ? `${currCategory}` : title}
            </h2>
          )}
          <CustomDropdown
            value={currCategory}
            onChange={(value) => setCurrCategory(value)}
          />
        </div>
        {allResources && <ResourcePostCard block={allResources} />}
      </div>
    </div>
  );
};

export default AllResourcePostSection;
