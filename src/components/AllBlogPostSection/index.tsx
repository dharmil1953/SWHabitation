import React from "react";
import { AllBlogPostSectionType } from "../../../lib/sanity/types/page";
import BlogPostCard from "../Commons/BlogPostCard";
import CustomDropdown from "../Commons/CustomDropdown";
import { useSearchModals } from "../../../lib/hooks/useModals";

const AllBlogPostSection: React.FC<AllBlogPostSectionType> = (block) => {
  const { title, allBlogs, id } = block || {};
  const { currCategory, setCurrCategory } = useSearchModals();
  return (
    <div id={id} className="py-[3rem] sm:py-[4rem] lg:py-[9.375rem]">
      <div className="container">
        <div className="flex justify-between items-center s(1100):flex-col s(1100):gap-y-[20px] s(999):pb-[40px] s(1100):pb-[124px] pb-[200px]">
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
        {allBlogs && <BlogPostCard block={allBlogs} />}
      </div>
    </div>
  );
};

export default AllBlogPostSection;
