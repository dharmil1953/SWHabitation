import React from "react";
import { StoryCardType } from "../../../../lib/sanity/types";
import locales from "../../../../lib/locales";
import ButtonListing from "../Button/ButtonListing";
import StoryPostCardInfo from "./StoryPostCardInfo";
import NoBlog from "../NoBlog";
import { useSearchModals } from "../../../../lib/hooks/useModals";

export interface StoryPostCardProps {
  block: StoryCardType[];
}

const StoryPostCard: React.FC<StoryPostCardProps> = ({ block }) => {
  const initialValue = 3;
  const [currBlogNo, setCurrBlogNo] = React.useState(initialValue);
  const { searchValue, currCategory } = useSearchModals();
  const filterItems = (item: StoryCardType) => {
    const lowerCaseSearchValue = searchValue
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "");
    const matchesSearch =
      !searchValue ||
      (item?.title &&
        item?.title
          ?.toLowerCase()
          .replace(/\s+/g, "")
          .includes(lowerCaseSearchValue)) ||
      (item?.keywords &&
        item?.keywords?.find((item) =>
          item?.toLowerCase().replace(/\s+/g, "").includes(lowerCaseSearchValue)
        )) ||
      (item?.searchDescription &&
        item?.searchDescription
          ?.toLowerCase()
          .replace(/\s+/g, "")
          .includes(lowerCaseSearchValue));
    if (!currCategory || currCategory === "allpost") {
      return matchesSearch;
    }
    if (currCategory === "popular") {
      return item?.hasPopular && matchesSearch;
    }
    if (currCategory === "recommended") {
      return item?.hasRecommended && matchesSearch;
    }
    if (currCategory === "latest") {
      return (
        block.sort((a, b) => a?.title?.localeCompare(b?.title)) && matchesSearch
      );
    }
    return true;
  };
  return (
    <div id="postListening">
      {Array.isArray(block?.filter(filterItems)) &&
      block?.filter(filterItems)?.length > 0 ? (
        <ul className=" grid s(999):grid-cols-1  grid-cols-3 s(767):gap-10 gap-8">
          {block
            ?.filter(filterItems)
            ?.slice(0, currBlogNo)
            ?.map((item, index) => {
              return <StoryPostCardInfo key={index} block={item} />;
            })}
        </ul>
      ) : (
        <NoBlog
          buttonLabel="Back to Home Page"
          buttonLink="/"
          title="No Stories Found !"
        />
      )}
      {Array.isArray(block?.filter(filterItems)) &&
        block?.filter(filterItems)?.length > 0 &&
        currBlogNo <= block?.filter(filterItems)?.length && (
          <div
            className="mt-14 text-center"
            onClick={() => setCurrBlogNo((prevNo) => prevNo + 3)}
          >
            <ButtonListing
              className="inline-flex items-center gap-1.5"
              label={locales.en.SEE_MORE_STORIES}
              variant={"orange"}
            />
          </div>
        )}
    </div>
  );
};

export default StoryPostCard;
