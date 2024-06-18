import React from "react";
import { CategoryListingSectionType } from "../../../lib/sanity/types/page";
import Image from "../Commons/Image";
import clsx from "clsx";
import Link from "../Commons/Link";
import { routes } from "../../../lib/routes";
import ButtonListing from "../Commons/Button/ButtonListing";
import locales from "../../../lib/locales";

const CategoryListingSection: React.FC<CategoryListingSectionType> = (data) => {
  const { title, allCategories } = data || {};
  const initialValue = 9;
  const [currCategoryNo, setCurrCategoryNo] = React.useState(initialValue);
  const sortedCategory =
    allCategories?.length > 0
      ? allCategories?.sort((a, b) => a?.title?.localeCompare(b?.title))
      : [];

  return (
    <div className="s(640):pb-[6rem] pb-[9.063em]">
      <div className="container">
        {title && (
          <h1 className="s(767):text-38 s(1440):text-52 text-64 font-semibold text-theme-black leading-[1.4] uppercase s(1100):text-center s(767):pt-10  s(767):pb-20 pt-28 pb-28">
            {title}
          </h1>
        )}
        {Array.isArray(allCategories) && allCategories.length > 0 && (
          <ul>
            {sortedCategory?.slice(0, currCategoryNo)?.map((item, index) => {
              const { title, slug, image } = item || {};
              return (
                <li
                  key={index}
                  className="grid s(1100):grid-cols-[100px_auto] s(1280):grid-cols-[150px_auto] s(1440):grid-cols-[200px_auto] s(1600):grid-cols-[250px_auto] grid-cols-[300px_auto] items-center justify-start s(1100):gap-[30px] s(1280):gap-[50px] s(1440):gap-[100px] s(1600):gap-[150px] gap-[190px] s(1280):mb-[50px] s(1440):mb-[80px] s(1600):mb-[100px] mb-[120px] w-full max-w-[1275px] m-auto s(400):px-0 s(640):px-5 s(767):px-10 px-20 "
                >
                  <Link
                    key={index}
                    ariaLabel={title}
                    to={slug?.current ? routes.categories(slug?.current) : "#"}
                    className={clsx("")}
                  >
                    {image && (
                      <Image
                        src={image}
                        className=" s(640):w-[100px] s(640):h-[100px] s(767):w-[150px] s(767):h-[150px] s(999):w-[200px] s(999):h-[200px] s(1280):w-[250px] s(1600):h-[250px] w-[300px] h-[300px] object-contain"
                      />
                    )}
                  </Link>
                  <Link
                    ariaLabel={title}
                    to={slug?.current ? routes.categories(slug?.current) : "#"}
                    className={clsx(" ")}
                  >
                    {title && (
                      <h2 className="capitalize s(400):text-20 s(480):text-24 s(640):text-28 s(767):text-32 s(999):text-38 s(1280):text-42 s(1440):text-52 s(1600):text-64 text-72 font-semibold text-theme-black leading-[1.3]">
                        {title}
                      </h2>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
        {Array.isArray(allCategories) &&
          allCategories?.length != 0 &&
          currCategoryNo <= allCategories?.length && (
            <div
              className="text-center"
              // onClick={() => setCurrCategoryNo((prevNo) => prevNo + 9)}
              onClick={() => {
                setCurrCategoryNo((prevNo) => {
                  const newNo = prevNo + 9;
                  setTimeout(() => {
                    window.scrollTo({
                      top: document.documentElement.scrollHeight,
                      behavior: "smooth",
                    });
                  }, 0);
                  return newNo;
                });
              }}
            >
              <ButtonListing
                label={locales.en.LOAD_MORE_CATEGORIES}
                variant={"green"}
              />
            </div>
          )}
      </div>
    </div>
  );
};

export default CategoryListingSection;
