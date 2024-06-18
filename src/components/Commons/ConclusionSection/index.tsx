import React from "react";
import { ConclusionType } from "../../../../lib/sanity/types";
import RichText from "../RichText";
import clsx from "clsx";
import { BackgroundColor, BackgroundConclusionText } from "../Background";
export type ConclusionSectionProps = {
  block: ConclusionType;
};
const ConclusionSection: React.FC<ConclusionSectionProps> = ({ block }) => {
  const { description, backgroundColor } = block || {};
  return (
    description?.custom_rich_text && (
      <div
        className={clsx(
          "rounded-b-xl s(767):px-6 s(767):pb-2 px-8 pb-3 ",
          backgroundColor && BackgroundColor[backgroundColor],
          !backgroundColor && "border-[1px] border-t-0 border-theme-black"
        )}
      >
        <div
          className={clsx(
            "[&>p]:text-20 [&>p]:font-light [&>p]:pb-5 [&>p]:leading-[1.6]",
            backgroundColor
              ? `[&>p]:${BackgroundConclusionText[backgroundColor]}`
              : ""
          )}
        >
          <RichText block={description} />
        </div>
      </div>
    )
  );
};

export default ConclusionSection;
