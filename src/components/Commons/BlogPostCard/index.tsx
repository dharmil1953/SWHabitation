import React from "react";
import { BlogCardType } from "../../../../lib/sanity/types";
import BlogPostCardInfo from "./BlogPostCardInfo";
import locales from "../../../../lib/locales";
import ButtonListing from "../Button/ButtonListing";
import NoBlog from "../NoBlog";
import { useSearchModals } from "../../../../lib/hooks/useModals";

export interface BlogPostCardProps {
  block: BlogCardType[];
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ block }) => {
  const initialValue = 9;
  const [currBlogNo, setCurrBlogNo] = React.useState(initialValue);
  const { searchValue, currCategory } = useSearchModals();

  const filterItems = (item: BlogCardType) => {
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
        <ul className="grid s(999):grid-cols-1 s(1280):grid-cols-2 grid-cols-3 gap-8 ">
          {block
            ?.filter(filterItems)
            ?.slice(0, currBlogNo)
            ?.map((item, index) => {
              return <BlogPostCardInfo key={index} block={item} />;
            })}
        </ul>
      ) : (
        <NoBlog
          title="No Blogs Found !"
          buttonLabel="Back to Articles"
          buttonLink="/articles"
        />
      )}
      {Array.isArray(block?.filter(filterItems)) &&
        block?.filter(filterItems)?.length > 0 &&
        currBlogNo <= block?.filter(filterItems)?.length && (
          <div
            className="mt-14 text-center"
            onClick={() => {
              setCurrBlogNo((prevNo) => {
                const newNo = prevNo + 9;
                // setTimeout(() => {
                //   window.scrollTo({
                //     top: document.documentElement.scrollHeight,
                //     behavior: "smooth",
                //   });
                // }, 0);
                return newNo;
              });
            }}
          >
            <ButtonListing
              className="inline-flex items-center gap-1.5"
              label={locales.en.DISCOVER_MORE_BLOGS}
              variant={"green"}
            />
          </div>
        )}
    </div>
  );
};

export default BlogPostCard;
