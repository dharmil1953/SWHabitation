import React from "react";
import { HeroSectionType } from "../../../lib/sanity/types/page";
import Image from "../Commons/Image";
import clsx from "clsx";
import SearchComponent from "../Commons/SearchComponent";
import SearchSuggestionSection from "../Commons/SearchSuggestionSection";

const HeroSection: React.FC<HeroSectionType & { slug: string }> = (block) => {
  const { image, slug } = block || {};
  const show = ["blogs", "resources", "stories"].includes(slug);
  return (
    <div className={clsx(``)}>
      <div className="container ">
     <div className="relative">
     {show && <SearchComponent />}
      {show && <SearchSuggestionSection _type={slug} />}
     </div>
        {image && (
          <div className={clsx("", show ? "s(1100):hidden " : "")}>
            <Image
              src={image}
              className="w-full h-full max-h-[540px] object-cover "
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
