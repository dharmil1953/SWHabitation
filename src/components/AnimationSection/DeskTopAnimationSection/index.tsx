import React from "react";
import { CustomImageType } from "../../../../lib/sanity/types";
import Image from "../../Commons/Image";

export interface DeskTopAnimationSectionProps {
  block: CustomImageType[];
}

const DeskTopAnimationSection: React.FC<DeskTopAnimationSectionProps> = ({
  block,
}) => {
  return (
    block?.length > 0 && (
      <div className="grid grid-cols-6 gap-4">
        {block?.map((item, index) => {
          return (
            <div key={index} className="text-center">
              <Image
                src={item}
                className=" s(1100):w-[100px] s(1100):h-[100px] s(1280):w-[150px] s(1280):h-[150px] s(1440):w-[200px] s(1440):h-[200px]"
              />
            </div>
          );
        })}
      </div>
    )
  );
};

export default DeskTopAnimationSection;
