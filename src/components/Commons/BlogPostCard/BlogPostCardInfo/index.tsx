import React from "react";
import Image from "../../Image";
import Link from "../../Link";
import { BlogCardType } from "../../../../../lib/sanity/types";
import Rainbow from "../../Rainbow";
import { routes } from "../../../../../lib/routes";
export interface BlogPostCardInfoProps {
  block: BlogCardType;
}
const BlogPostCardInfo: React.FC<BlogPostCardInfoProps> = ({ block }) => {
  const { image, slug, title, _type, _id, blogFilter } = block || {};
  return (
    <li className="border border-solid border-theme-green s(767):p-4 p-[1.875em]">
      {image && (
        <Link
          ariaLabel={title}
          to={slug?.current ? routes.blogs(slug?.current) : "#"}
          className="s(1280):max-w-full max-w-[65%] w-full"
        >
          <Image
            src={image}
            className="w-full s(640):h-[289px] s(1100):h-[400px]  h-auto object-cover"
          />
        </Link>
      )}
      <div className="s(767):pt-8 s(1280):pt-[3em] pt-[3.75em] s(1280):flex-col s(1280):gap-5 flex justify-between items-start">
        {title && (
          <Link
            ariaLabel={title}
            to={slug?.current ? routes.blogs(slug?.current) : "#"}
            className="s(1280):max-w-full max-w-[65%] w-full"
          >
            <h3 className="text-theme-black text-18 font-bold  uppercase">
              {title}
            </h3>
          </Link>
        )}
        <div>
          <div>
            <Rainbow />
          </div>

          {blogFilter?.title && (
            <Link
              to={slug?.current ? routes.blogs(slug?.current) : "#"}
              ariaLabel={title}
              className="s(1280):max-w-full max-w-[65%] w-full"
            >
              <span className="text-theme-black text-14 capitalize">
                {blogFilter?.title}
              </span>
            </Link>
          )}
        </div>
      </div>
    </li>
  );
};

export default BlogPostCardInfo;
