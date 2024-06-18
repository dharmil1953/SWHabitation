import React from "react";
import { SuggestionType } from "../../../../lib/sanity/types";
import { useSearchModals } from "../../../../lib/hooks/useModals";
import Link from "../Link";
import { routes } from "../../../../lib/routes";
import LeftArrow from "../AllIcons/LeftArrow";

export interface SearchSuggestionSectionProps {
  _type: string;
}
const SearchSuggestionSection: React.FC<SearchSuggestionSectionProps> = ({
  _type,
}) => {
  const { searchValue, isDropdownOpen, suggestions, setDropdownOpen } =
    useSearchModals();
  const filterItems = (item: SuggestionType) => {
    const lowerCaseSearchValue = searchValue
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "");
    return (
      (!searchValue ||
        (item?.title &&
          item?.title
            ?.toLowerCase()
            .replace(/\s+/g, "")
            .includes(lowerCaseSearchValue)) ||
        (item?.keywords &&
          item?.keywords?.find((keyword) =>
            keyword
              ?.toLowerCase()
              .replace(/\s+/g, "")
              .includes(lowerCaseSearchValue)
          ))) &&
      item?._type === _type
    );
  };
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdownElement = document.getElementById("searchInput");
      if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);
  return (
    <>
      {isDropdownOpen &&
        Array.isArray(suggestions?.filter(filterItems)) &&
        suggestions?.filter(filterItems)?.length > 0 && (
          <ul
            className="max-h-[20rem] overflow-y-scroll rounded-xl rounded-t-none shadow-lg bg-theme-green absolute w-full flex flex-col  top-[100%] z-10
            s(767):py-[20px]
          "
          >
            {suggestions?.filter(filterItems)?.map((suggestion) => (
              <li
                key={suggestion?.title}
                // className="px-4 py-4 hover:bg-white last:border-none  hover:shadow-inner   border-b  text-base hover:bg-theme-ivory/70 transition-colors duration-300 ease-linear  "
              >
                <Link
                  ariaLabel={suggestion?.title}
                  to={
                    suggestion?.slug?.current
                      ? routes[_type](suggestion?.slug?.current)
                      : "#"
                  }
                  className="inline-flex gap-[12px] justify-between group items-center w-full s(767):px-3  s(767):py-2 px-4 py-4 hover:bg-white last:border-none  hover:shadow-inner   border-b  text-base hover:bg-theme-ivory/70 transition-colors duration-300 ease-linear  "
                >
                  {suggestion?.title}
                  <span className="s(767):hidden">
                    <LeftArrow className="rotate-180 opacity-0 group-hover:opacity-100" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      {isDropdownOpen &&
        !(
          Array?.isArray(suggestions?.filter(filterItems)) &&
          suggestions?.filter(filterItems)?.length > 0
        ) && (
          <div className="px-4 py-4 bg-theme-green text-center text-base absolute w-full top-[100%] rounded-[0_0_12px_12px] shadow-lg">
            <span>{"No Blog Found!"}</span>
          </div>
        )}
    </>
  );
};

export default SearchSuggestionSection;
