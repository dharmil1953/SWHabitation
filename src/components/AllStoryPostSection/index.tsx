import React from "react";
import { AllStoryPostSectionType } from "../../../lib/sanity/types/page";
import StoryPostCard from "../Commons/StoryPostCard";
import CustomDropdown from "../Commons/CustomDropdown";
import { useSearchModals } from "../../../lib/hooks/useModals";

const AllStoryPostSection: React.FC<AllStoryPostSectionType> = (block) => {
  const { title, id, _type, allStories } = block || {};
  const { currCategory, setCurrCategory } = useSearchModals();

  return (
    <div id={id} className="pb-[4rem] sm:pb-[5rem] lg:pb-[10rem]">
      <div className="container">
        <div className="flex justify-between items-center s(1100):flex-col s(1100):gap-y-[30px] s(1100):pt-[36px] pt-[70px] s(767):pb-[20px] s(1100):pb-[62px] pb-[140px]">
          {title && (
            <h2 className=" s(767):text-38 s(1440):text-52 text-64 font-semibold text-theme-black leading-[1.4] uppercase s(1100):text-center">
              {currCategory !== "allpost" ? `${currCategory}` : title}
            </h2>
          )}
          <CustomDropdown
            value={currCategory}
            onChange={(value) => setCurrCategory(value)}
          />
        </div>
        {allStories && <StoryPostCard block={allStories} />}
      </div>
    </div>
  );
};

export default AllStoryPostSection;
