import React, { useState } from "react";
import Link from "@/components/Commons/Link";
import { routes } from "../../../../lib/routes";
import locales from "../../../../lib/locales";
import RichText from "@/components/Commons/RichText";
import clsx from "clsx";
import { StoryDetailPageType } from "../../../../lib/sanity/types/storyDetail";
import StoryDetailHeroSection from "./StoryDetailHeroSection";
import StoryDetailShareButtons from "./StoryDetailShareButtons";
import RecommendedStorySection from "./RecommendedStorySection";
import LeftArrow from "@/components/Commons/AllIcons/LeftArrow";
import PreviewModalSection from "@/components/Commons/PreviewModalSection";

export interface StoryDetailPage {
  block?: StoryDetailPageType;
}
const StoryDetailPage: React.FC<StoryDetailPage> = ({ block }) => {
  const [showModal, setShowModal] = useState(false);
  const handleDownload = () => {
    setShowModal(true);
    document.body.classList.add("overLay");
  };
  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove("overLay");
  };
  const {
    description,
    content,
    sideContentTitles,
    author,
    recommendedStories,
  } = block || {};

  return (
    <div className="mb-[6rem]">
      <div className="container">
        <div className="flex">
          <div className="hidden md:block absolute">
            <Link
              ariaLabel={locales.en.BACK_TO_STORIES}
              className="capitalize text-20 font-normal flex items-center gap-2 justify-start w-fit mt-9 group text-theme-black bg-transparent "
              to={routes.story_index()}
            >
              <LeftArrow className="w-4 h-4" />
              {locales.en.BACK_TO_STORIES}
            </Link>
          </div>
          <div className="w-full max-w-[67rem] m-auto flex flex-col items-center pt-10">
            {block && <StoryDetailHeroSection block={block} />}
            <div className="flex flex-col items-center  s(640):mb-[100px] s(1100):mb-[150px] mb-[180px] ">
              <div className="blogInner pt-16">
                {description?.custom_rich_text && (
                  <div className="[&>p]:text-theme-black [&>p]:text-20 [&>p]:font-normal [&>p]:pb-6 [&>p]:leading-[1.5] border-b-[1px] border-theme-gray mb-10">
                    <RichText block={description} />
                  </div>
                )}
                {content?.custom_rich_text && (
                  <div className="[&>p]:text-theme-black [&>p]:text-20 [&>p]:font-normal [&>p]:pb-6 [&>p]:leading-[1.5]  ">
                    {content?.custom_rich_text && (
                      <RichText isClickable={true} block={content} />
                    )}
                  </div>
                )}
                {author?.name && (
                  <div className="s(480):flex-col  flex flex-row justify-between items-center mt-10 pt-5 border-t-[1px] border-theme-gray gap-4">
                    <div className=" s(480):text-center text-left">
                      <h5
                        className={clsx(
                          "text-18 font-semibold text-theme-black"
                        )}
                      >
                        {author?.name}
                      </h5>
                      <span
                        className={clsx("text-theme-black font-normal block")}
                      >
                        {author?.bio}
                      </span>
                    </div>
                    <div className="flex s(480):flex-col items-center gap-[12px]">
                      <div
                        className="flex items-center gap-[4px] rounded-lg border py-2 px-2 border-black cursor-pointer hover:bg-theme-black hover:text-white group"
                        onClick={handleDownload}
                      >
                        <svg
                          version="1.1"
                          id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 480.606 480.606"
                          xmlSpace="preserve"
                          className="w-6 h-6 fill-black group-hover:fill-white"
                        >
                          <g>
                            <rect
                              x="85.285"
                              y="192.5"
                              width={200}
                              height={30}
                            />
                            <path
                              d="M439.108,480.606l21.213-21.213l-71.349-71.349c12.528-16.886,19.949-37.777,19.949-60.371
		c0-40.664-24.032-75.814-58.637-92.012V108.787L241.499,0H20.285v445h330v-25.313c6.188-2.897,12.04-6.396,17.475-10.429
		L439.108,480.606z M250.285,51.213L299.072,100h-48.787V51.213z M50.285,30h170v100h100v96.957
		c-4.224-0.538-8.529-0.815-12.896-0.815c-31.197,0-59.148,14.147-77.788,36.358H85.285v30h126.856
		c-4.062,10.965-6.285,22.814-6.285,35.174c0,1.618,0.042,3.226,0.117,4.826H85.285v30H212.01
		c8.095,22.101,23.669,40.624,43.636,52.5H50.285V30z M307.389,399.208c-39.443,0-71.533-32.09-71.533-71.533
		s32.089-71.533,71.533-71.533s71.533,32.089,71.533,71.533S346.832,399.208,307.389,399.208z"
                            />
                          </g>
                        </svg>
                        <span>Preview PDF</span>
                      </div>
                      <StoryDetailShareButtons />
                    </div>
                  </div>
                )}
                {showModal && (
                  <PreviewModalSection
                    title={block?.title}
                    onClose={closeModal}
                    block={block}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {recommendedStories && (
        <RecommendedStorySection block={recommendedStories} />
      )}
    </div>
  );
};

export default StoryDetailPage;
