import { useState, useEffect } from "react";
import clsx from "clsx";
import { slugify } from "../../../../../lib/utils/slugify";
import locales from "../../../../../lib/locales";

const SideContentTitle: React.FC<{
  sideTitle?: string[];
  activeItem?: string; // Add activeItem prop
}> = ({ sideTitle, activeItem }) => {
  const [activeTitle, setActiveTitle] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      sideTitle?.forEach((title) => {
        const id = slugify(title);
        const section = document.getElementById(id);
        if (section) {
          const { top, height } = section.getBoundingClientRect();
          if (top <= 0 && top + height > 0) {
            setActiveTitle(title);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sideTitle]);

  const scrollInto = (title: string) => {
    if (typeof window !== "undefined") {
      const id = slugify(title);
      const headerElement = document.getElementById("header");
      const headerHeight = headerElement
        ? headerElement.getBoundingClientRect().height
        : 0;
      const element = document.getElementById(id);
      const elementPosition = element?.getBoundingClientRect().top ?? 0;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveTitle(title); // Update activeTitle on scroll
    }
  };

  return (
    sideTitle?.length > 0 && (
      <div>
        {sideTitle?.length > 0 && (
          <h5 className="text-26 font-medium text-black pb-6">
            {locales.en.TABLE_OF_CONTENTS}
          </h5>
        )}
        <ul className="space-y-3 h-[62vh] overflow-scroll">
          {sideTitle?.map((item, index) => {
            return (
              item && (
                <li
                  onClick={() => {
                    scrollInto(item);
                  }}
                  className="text-16 font-normal"
                  key={index}
                >
                  <span
                    className={clsx(
                      "hover:text-theme-black cursor-pointer",
                      activeTitle === item
                        ? "text-theme-black font-medium"
                        : "text-theme-gray"
                    )}
                  >
                    {item}
                  </span>
                </li>
              )
            );
          })}
        </ul>
      </div>
    )
  );
};

export default SideContentTitle;
