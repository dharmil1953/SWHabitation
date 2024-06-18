import React from "react";

import Link from "../Link";
import { StoryCardType } from "../../../../lib/sanity/types";
import { routes } from "../../../../lib/routes";
import locales from "../../../../lib/locales";
import StoryCardInfo from "./StoryCardInfo";
import ButtonListing from "../Button/ButtonListing";

export interface StoryCardProps {
  block: StoryCardType[];
}

const StoryCard: React.FC<StoryCardProps> = ({ block }) => {
  return Array.isArray(block) && block.length > 0 ? (
    <div>
      <ul className="s(1280):pt-[2em] pt-[3.25em] grid s(999):grid-cols-1  grid-cols-3 s(767):gap-10 gap-8">
        {block.map((item, index) => {
          return <StoryCardInfo block={item} key={index} />;
        })}
      </ul>
      <div className="mt-14 text-center">
        <Link
          to={routes.story_index()}
          ariaLabel={locales.en.SEE_MORE_STORIES}
          className={""}
        >
          <ButtonListing
            className="inline-flex items-center gap-1.5"
            label={locales.en.SEE_MORE_STORIES}
            variant={"orange"}
          />
        </Link>
      </div>
    </div>
  ) : null;
};

export default StoryCard;
