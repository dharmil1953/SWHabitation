import React from "react";
import { BlogListingSectionType } from "../../../lib/sanity/types/page";
import BlogCard from "../Commons/BlogCard";

const BlogListingSection: React.FC<BlogListingSectionType> = (block) => {
  const { blogs, title } = block || {};
  return (
    <div className="py-[100px] bg-theme-ivory">
      <div className="container">
        {title && (
          <h2 className="s(764):text-32 s(1280):text-42 text-52 font-medium leading-[1] text-theme-black s(1100):pb-[32px] pb-[52px]">
            {title}
          </h2>
        )}
        {blogs && <BlogCard block={blogs} />}
      </div>
    </div>
  );
};

export default BlogListingSection;
