import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useSearchModals } from "../../../../lib/hooks/useModals";
import SearchIcon from "../AllIcons/SearchIcon";
import { getClient, readToken } from "../../../../lib/sanity";
import { groq } from "next-sanity";
import { SuggestionType } from "../../../../lib/sanity/types";
export interface SearchComponentProps {
  className?: string;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ className }) => {
  const { searchValue, setSearchValue, setDropdownOpen, setSuggestions } =
    useSearchModals();
  const searchInput = useRef<HTMLInputElement>(null);
  const handleSearch = () => {
    searchInput.current?.focus();
    setSearchValue(searchValue);
    scrollToElement("postListening");
  };
  const scrollToElement = (id: string) => {
    const headerElement = document.getElementById("header");
    const headerHeight = headerElement
      ? headerElement.getBoundingClientRect().height
      : 0;
    const element = document.getElementById(id);
    const elementPosition = element?.getBoundingClientRect().top ?? 0;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
      setDropdownOpen(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };
  const handleClick = async () => {
    try {
      const client = getClient(readToken);
      let result: SuggestionType[] = await client.fetch(
        groq`*[ _type in ["blogs","resources","stories"]]{
                  _type,
                  _id,
                  title,
                  "keywords":seo.keywords,
                  slug
                }
              `
      );
      setSuggestions(result);
      setDropdownOpen(true);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const placeholders = [
    "Search React...",
    "Search Gatsby...",
    "Search Next.js...",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className={clsx(
        className,
        "relative border border-theme-black w-full s(1100):my-0 my-16 z-[10] searchBar"
      )}
    >
      <input
        id="searchInput"
        type="search"
        className={clsx(
          "bg-transparent w-full  placeholder:text-xl leading-[145%] p-4 outline-none text-xl placeholder:text-theme-black"
        )}
        value={searchValue}
        ref={searchInput}
        onKeyDown={handleKeyPress}
        onChange={handleChange}
        onClick={handleClick}
        autoComplete="off"
        placeholder="Search"
        // placeholder={placeholders[placeholderIndex]}
      />
      {!searchValue && (
        <div className="mr-2 [&>div>svg]:w-[1.25rem] [&>div>svg]:h-[1.25rem] absolute top-1/2 -translate-y-1/2 right-1 [&>div>svg]:text-theme-black">
          <SearchIcon />
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
