import React from "react";
import { RecommendedBlogsType } from "../../../../../../lib/sanity/types";
import Image from "@/components/Commons/Image";
import Link from "@/components/Commons/Link";
import Rainbow from "@/components/Commons/Rainbow";
import { routes } from "../../../../../../lib/routes";
export interface RecommendedBlogInfoProps {
  block: RecommendedBlogsType;
}
const RecommendedBlogInfo: React.FC<RecommendedBlogInfoProps> = ({ block }) => {
  const { image, slug, title, _type, _id, blogFilter } = block || {};
  return (
    <li className="border border-solid border-theme-green s(767):p-4 p-[1.875em] list-none">
      {image && (
        <Link
          ariaLabel={title}
          to={slug?.current ? routes.blogs(slug?.current) : "#"}
        >
          <Image
            src={image}
            className="w-full s(640):h-[289px] s(1100):h-[400px]  h-auto object-cover"
          />
        </Link>
      )}
      <div className="s(767):pt-8 s(1280):pt-[3em] pt-[3.75em] s(1280):flex-col s(1280):items-start s(1280):gap-5 flex justify-between items-center">
        {title && slug?.current && (
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
              ariaLabel={title}
              to={slug?.current ? routes.blogs(slug?.current) : "#"}
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

export default RecommendedBlogInfo;
