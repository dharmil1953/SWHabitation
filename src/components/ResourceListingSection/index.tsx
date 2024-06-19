import React from "react";
import { ResourceListingSectionType } from "../../../lib/sanity/types/page";
import locales from "../../../lib/locales";
import Image from "../Commons/Image";
import clsx from "clsx";
import Link from "../Commons/Link";
import { routes } from "../../../lib/routes";
import { BackgroundColor, BackgroundText } from "../Commons/Background";

const ResourceListingSection: React.FC<ResourceListingSectionType> = (
  block
) => {
  const { popularResources, align } = block || {};
  const { author, backgroundColor, image, slug, title } =
    popularResources || {};
  return (
    <div className={clsx("h-full", BackgroundColor[backgroundColor])}>
      <div className="container w-full flex items-center justify-center h-full">
        <div
          className={clsx(
            "w-full s(999):py-[4.688em] s(1440):pt-[8em] s(1440):pb-[7em] s(1600):pt-[10em] s(1600):pb-[9em] pt-[13.875em] pb-[11.313em] grid grid-cols-[1.5fr_1fr] items-center s(767):gap-[52px] s(1100):gap-[3em] s(1280):gap-[4em] s(1440):gap-[5em] s(1600):gap-[6em] gap-[7.375em] s(999):grid-cols-1",
            align === "left"
              ? "s(999):grid-cols-1 grid-cols-[1fr_1.5fr]"
              : "s(999):grid-cols-1 grid-cols-[1.5fr_1fr]"
          )}
        >
          <div
            className={clsx(
              align === "left" && "s(999):order-1 order-2",
              BackgroundText[backgroundColor]
            )}
          >
            {popularResources?.title && (
              <span className={clsx("text-16 font-normal uppercase")}>
                {locales.en.RESOURCES}
              </span>
            )}
            {title && (
              <Link
                ariaLabel={title}
                to={slug?.current ? routes.resources(slug?.current) : "#"}
              >
                <h2
                  className={clsx(
                    "s(767):text-32 s(1280):text-42 text-52 font-medium leading-[1] py-6"
                  )}
                >
                  {title}
                </h2>
              </Link>
            )}

            {author && (
              <span className={clsx("text-20  font-normal")}>
                by {author?.name}
              </span>
            )}
          </div>
          <div
            className={clsx(
              "mx-auto",
              align === "left" && "s(999):order-2 order-1"
            )}
          >
            {image && (
              <Link
                ariaLabel={title}
                to={slug?.current ? routes.resources(slug?.current) : "#"}
              >
                <Image
                  src={image}
                  className="object-cover"
                  layout="responsive"
                  width={512} 
                  height={512} 
                  sizes="(max-width: 767px) 196px, (min-width: 768px) 50vw"
                  loading="lazy"
                  priority={slug?.current ? false : true} 
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceListingSection;
