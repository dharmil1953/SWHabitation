import React from "react";
import { ReadMoreSectionType } from "../../../lib/sanity/types";
import ButtonListing from "../Commons/Button/ButtonListing";
import locales from "../../../lib/locales";
import Link from "../Commons/Link";

export interface ReadMoreSectionProps {
  block: ReadMoreSectionType;
}

const ReadMoreSection: React.FC<ReadMoreSectionProps> = ({ block }) => {
  const { _type, post } = block || {};
  return (
    <div className="bg-theme-yellow flex flex-col items-center text-center my-12   s(767):px-[40px] px-[66px] py-20 w-full gap-8 ">
      {post?.title && (
        <h3 className="font-medium text-[36px] leading-[1.2] capitalize">
          {post?.title}
        </h3>
      )}
      {post?.slug?.current && (
        <Link
          ariaLabel={post?.title}
          to={post?.slug?.current ? post?.slug?.current : "#"}
        >
          <ButtonListing
            label={locales.en.READMORE}
            variant="black"
            className="px-[54px] py-[15px] text-white capitalize"
          />
        </Link>
      )}
    </div>
  );
};

export default ReadMoreSection;
