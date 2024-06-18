import { useState } from "react";
import clsx from "clsx";
import { slugify } from "../../../../../lib/utils/slugify";
import locales from "../../../../../lib/locales";

const SideContentTitle: React.FC<{
  sideTitle?: string[];
}> = ({ sideTitle }) => {
  const [activeItem, setActiveItem] = useState<string>();
  const scrollInto = (title: string) => {
    if (typeof window !== "undefined") {
      const id = slugify(title);
      const headerElement = document.getElementById("header");
      const headerHeight = headerElement
        ? headerElement.getBoundingClientRect().height
        : 0;
      var element = document.getElementById(id);
      var elementPosition = element?.getBoundingClientRect().top ?? 0;
      var offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      // Set the active item
      setActiveItem(title);
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
                  className="text-16 font-normal  "
                  key={index}
                >
                  <span
                    className={clsx(
                      " hover:text-theme-black cursor-pointer",
                      activeItem === item
                        ? "text-theme-black"
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
