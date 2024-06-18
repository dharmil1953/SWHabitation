import React from "react";
import { ResourceCardType } from "../../../../lib/sanity/types";
import locales from "../../../../lib/locales";
import ButtonListing from "../Button/ButtonListing";
import ResourcePostCardInfo from "./ResourcePostCardInfo";
import NoBlog from "../NoBlog";
import { useSearchModals } from "../../../../lib/hooks/useModals";

export interface ResourcePostCardProps {
  block: ResourceCardType[];
}

const ResourcePostCard: React.FC<ResourcePostCardProps> = ({ block }) => {
  const initialValue = 2;
  const [currResourceNo, setCurrResourceNo] = React.useState(initialValue);
  const { searchValue, currCategory } = useSearchModals();
  const filterItems = (item: ResourceCardType) => {
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
        <ul className="grid s(1100):grid-cols-1    ">
          {block
            ?.filter(filterItems)
            ?.slice(0, currResourceNo)
            ?.map((item, index) => {
              const dividedlength = index % 2 === 0;
              return (
                <ResourcePostCardInfo
                  key={index}
                  block={item}
                  dividedlength={dividedlength}
                />
              );
            })}
        </ul>
      ) : (
        <NoBlog
          buttonLabel="Back to Home Page"
          buttonLink="/"
          title="No Resources Found!"
        />
      )}
      {Array.isArray(block?.filter(filterItems)) &&
        block?.filter(filterItems)?.length > 0 &&
        currResourceNo <= block?.filter(filterItems)?.length && (
          <div
            className="mt-14 text-center"
            onClick={() => setCurrResourceNo((prevNo) => prevNo + 2)}
          >
            <ButtonListing
              className="inline-flex items-center gap-1.5"
              label={locales.en.EXPLORE_MORE_RESOURCES}
              variant={"orange"}
            />
          </div>
        )}
    </div>
  );
};

export default ResourcePostCard;
