import React from "react";
import { AnimationSectionType } from "../../../lib/sanity/types/page";
import DeskTopAnimationSection from "./DeskTopAnimationSection";
import MobileAnimationSection from "./MobileAnimationSection";
import BlogListingSection from "../BlogListingSection";
import StoryListingSection from "../StoryListingSection";

const AnimationSection: React.FC<AnimationSectionType> = (block) => {
  const { images, blogs, stories } = block || {};
  return (
    <div className="s(1280):h-auto s(1280):static sticky top-0">
      <BlogListingSection
        _type={"blogListingSection"}
        title="Blog Insights"
        blogs={blogs}
      />
      {/* AnimationSection */}
      <div className=" bg-theme-black">
        <div className="container">
          <div className="s(999):py-16 py-[100px] s(767):hidden">
            {images && <DeskTopAnimationSection block={images} />}
          </div>
        </div>
        <div className="py-16 s(767):block hidden">
          {images && <MobileAnimationSection block={images} />}
        </div>
      </div>
      {/* AnimationSection */}
      <StoryListingSection
        _type={"storyListingSection"}
        title="Tech Stories"
        stories={stories}
      />
    </div>
  );
};

export default AnimationSection;
