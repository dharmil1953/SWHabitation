import React from "react";
import { HomeHeroSectionType } from "../../../lib/sanity/types/page";
import RichText from "../Commons/RichText";
import Image from "../Commons/Image";
import Header from "../Header";
import clsx from "clsx";
import { useModals } from "../Commons/ModalContext";

const HomeHeroSection: React.FC<HomeHeroSectionType & { slug: string }> = (
  block
) => {
  const { author, headline, image, title, sortHeader, slug } = block || {};
  const { toggle } = useModals();
  return (
    <div>
      <div
        className={clsx(
          `relative s(1920):h-[1080px] overflow-hidden`,
          toggle ? "h-screen" : "s(999):h-auto"
        )}
      >
        <div
          className={clsx(
            "grid s(1100):grid-cols-[1fr] grid-cols-[1fr_1fr] justify-between bannerGrid gap-[32px]  s(1100):pl-0 s(1440):pl-[32px]",
            toggle ? "" : "s(999):px-0"
          )}
        >
          <div className={clsx("h-full", toggle ? "" : "")}>
            {sortHeader?.header && (
              <Header
                block={sortHeader?.header}
                path={slug?.startsWith("/") ? slug : `/${slug}`}
              />
            )}
            {image && (
              <div className="s(1100):block hidden relative z-[-1]">
                <Image
                  src={image}
                  className="s(999):h-[375px] s(1280):h-[300px] h-[357px] w-full object-cover"
                />
              </div>
            )}
            <div
              className={clsx(
                "s(1100):pt-[42px] s(1100):pb-[100px] s(1100):px-6  pt-[10.625em]  nav-item-animation ",
                toggle && " opacity-0 hidden"
              )}
            >
              {headline && (
                <span className="text-16 font-normal text-theme-black">
                  {headline}
                </span>
              )}
              {title?.custom_rich_text && (
                <div className="nav-item-animation s(767):[&>h1]:text-38 s(1440):[&>h1]:text-52 [&>h1]:text-64 [&>h1]:font-medium [&>h1]:leading-[1.1] [&>h1]:py-6 [&>h1]:text-theme-black tracking-[-1%]">
                  <RichText block={title} />
                </div>
              )}
              {author && (
                <span className={clsx("text-20  font-normal")}>
                  by {author?.name}
                </span>
              )}
            </div>
          </div>
          {image && (
            <div className="relative z-[200] h-full s(1100):hidden">
              <Image src={image} className="h-[100vh] w-full object-cover"
                priority
                sizes="(max-width: 1100px) 100vw, 100vh" 
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
