import React, { useEffect, useState } from "react";
import clsx from "clsx";

export interface CustomDropdownType {
  value: string;
  onChange: (value: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownType> = ({ value, onChange }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const options = [
    { value: "allpost", label: "All post" },
    { value: "recommended", label: "Recommended" },
    { value: "latest", label: "Latest" },
    { value: "popular", label: "Popular" },
  ];
  const openMenu = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const closeMenu = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const handleSelect = (label: string) => {
    onChange(label);
    setDropdownOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdownElement = document.getElementById("customDropdown");
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
      <div id="customDropdown" className="relative s(1100):hidden">
        <div className="text-left bg-transparent min-w-[150px] pb-4 appearance-none cursor-pointer focus-within:outline-none relative transition-opacity duration-700">
          <div
            onClick={openMenu}
            className="text-theme-black text-20 font-normal pr-8 capitalize "
          >
            {value !== "allpost" ? value : "All Post"}
          </div>
          <div className="absolute top-0 right-0 flex items-center pointer-events-none">
            <svg
              onClick={openMenu}
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                opacity: isDropdownOpen ? 1 : 0,
                transition: "opacity 0.7s ease-in-out",
              }}
              className="absolute top-0 right-0"
            >
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="#333333"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              onClick={closeMenu}
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                opacity: isDropdownOpen ? 0 : 1,
                transition: "opacity 0.7s ease-in-out",
              }}
              className="absolute top-0 right-0"
            >
              <path
                d="M19 9L12 16L5 9"
                stroke="#333333"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className={clsx("shutter", isDropdownOpen && "active")} />
        <div
          className={`absolute mt-2 w-full transition-opacity ${
            isDropdownOpen ? "s(1100):!static opacity-100" : "opacity-0"
          } duration-1000 ease-in-out`}
        >
          {options
            ?.filter((item) => item.value !== value)
            .map((item, index) => (
              <div
                key={index}
                onClick={() => handleSelect(String(item?.value))}
                className="block text-20 font-normal text-theme-black pt-5 first:pt-0 opacity-70 cursor-pointer hover:text-theme-pink"
              >
                {item.label}
              </div>
            ))}
        </div>
      </div>
      <div className="relative items-center pl-6 whitespace-nowrap overflow-auto s(1280):justify-center s(480):justify-start scrollbar-hide px-6 s(1100):flex hidden w-full overflow-x-scroll">
        {options.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => handleSelect(String(item?.value))}
              className={clsx(
                "block text-20 font-normal text-theme-black first:pt-0 pl-4 s(400):pl-4  first:pl-0 cursor-pointer",
                item.value == value
                  ? "text-theme-pink opacity-100"
                  : "opacity-70"
              )}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CustomDropdown;
