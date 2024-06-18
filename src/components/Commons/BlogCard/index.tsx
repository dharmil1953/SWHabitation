import React from "react";

import Link from "../Link";
import BlogCardInfo from "./BlogCardInfo";
import { BlogCardType } from "../../../../lib/sanity/types";
import { routes } from "../../../../lib/routes";
import locales from "../../../../lib/locales";
import ButtonListing from "../Button/ButtonListing";

export interface BlogCardProps {
  block: BlogCardType[];
}

const BlogCard: React.FC<BlogCardProps> = ({ block }) => {
  return Array.isArray(block) && block.length > 0 ? (
    <div>
      <ul className="grid s(999):grid-cols-1 s(1280):grid-cols-2 grid-cols-3 gap-8 undefined  ">
        {block?.slice(0, 6)?.map((item, index) => {
          return <BlogCardInfo block={item} key={index} />;
        })}
      </ul>
      <div className="mt-[52px] text-center">
        <Link
          to={routes.blog_index()}
          ariaLabel={locales.en.DISCOVER_MORE_BLOGS}
        >
          <ButtonListing
            className="inline-flex items-center gap-1.5"
            label={locales.en.DISCOVER_MORE_BLOGS}
            variant={"green"}
          />
        </Link>
      </div>
    </div>
  ) : null;
};

export default BlogCard;
