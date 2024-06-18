import constate from "constate";
import { useState } from "react";
import { SuggestionType } from "../sanity/types";

export const [SearchModalsProvider, useSearchModals] = constate(() => {
  const [searchValue, setSearchValue] = useState('');
  const [currCategory, setCurrCategory] = useState("allpost");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<SuggestionType[]>([]);
  return {
    setSearchValue,
    searchValue,
    setCurrCategory,
    currCategory,
    setDropdownOpen,
    isDropdownOpen,
    setSuggestions,
    suggestions
  };
});