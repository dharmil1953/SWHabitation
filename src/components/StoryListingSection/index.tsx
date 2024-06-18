import React from "react";
import { StoryListingSectionType } from "../../../lib/sanity/types/page";
import StoryCard from "../Commons/StoryCard";

const StoryListingSection: React.FC<StoryListingSectionType> = (block) => {
  const { title, stories } = block || {};
  return (
    <div className="py-[100px] bg-theme-ivory hidden">
      <div className="container h-full flex items-center justify-center">
        <div>
          {title && (
            <h2 className="s(767):text-32 s(1280):text-42 text-52 font-medium leading-[1] text-theme-black capitalize">
              {title}
            </h2>
          )}
          {stories && <StoryCard block={stories} />}
        </div>
      </div>
    </div>
  );
};

export default StoryListingSection;
