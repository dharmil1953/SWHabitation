import React from "react";
import Image from "../Image";
import RichText from "../RichText";
import { FeatureType } from "../../../../lib/sanity/types";

export interface FeatureSectionBlockTypes {
  block: FeatureType;
}

const FeatureSection: React.FC<FeatureSectionBlockTypes> = ({ block }) => {
  const { featuresLists } = block || {};
  return (
    <div className="grid s(480):grid-cols-1 s(1100):grid-cols-2 grid-cols-3 s(1100):gap-8 gap-12 my-12">
      {featuresLists?.length > 0 &&
        featuresLists?.map((item, index) => (
          <div key={index} className="text-center">
            {item?.image && (
              <Image src={item.image} className="mx-auto h-20 w-20" />
            )}
            {item?.title && (
              <div className="font-extrabold s(1280):text-20 text-24 text-theme-black mt-2">
                {item?.title}
              </div>
            )}
            {item?.description?.custom_rich_text && (
              <div className="text-16 font-normal leading-[1.7] pt-[10px]">
                <RichText block={item?.description} />
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default FeatureSection;
