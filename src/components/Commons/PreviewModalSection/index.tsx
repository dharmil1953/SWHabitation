import React, { useEffect } from "react";
import { BlogDetailPageType } from "../../../../lib/sanity/types/blogDetail";
import dayjs from "dayjs";
import BlogDetailHeroSection from "../../Views/BlogDetailPage/BlogDetailHeroSection";
import RichText from "@/components/Commons/RichText";
import clsx from "clsx";
import { useRef, useState } from "react";
import { ResourceDetailPageType } from "../../../../lib/sanity/types/resourceDetail";
import { StoryDetailPageType } from "../../../../lib/sanity/types/storyDetail";
import MobileCloseIcon from "../AllIcons/MobileCloseIcon";
import PreviewModalHeroSection from "./PreviewModalHeroSection";
import Image from "../Image";

interface PreviewModalSectionPropsType {
  onClose: () => void;
  title: string;
  block: BlogDetailPageType | ResourceDetailPageType | StoryDetailPageType;
}

const PreviewModalSection: React.FC<PreviewModalSectionPropsType> = ({
  onClose,
  block,
  title,
}) => {
  const [loading, setLoading] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrintArticle = () => {
    setLoading(true);
    // Identify the outer div by its ID
    const downloadSection = document.getElementById("downloadSection");

    // Temporarily hide the outer div
    if (downloadSection) downloadSection.style.display = "none";

    import("html2pdf.js").then(({ default: html2pdf }) => {
      const opt = {
        margin: [10, 10, 10, 10],
        filename: `${title}.pdf`,
        image: { type: "jpeg", quality: 0.5 },
        html2canvas: {
          scale: 2,
          logging: true,
          useCORS: true,
          dpi: 96,
          windowWidth: 512,
        },
        jsPDF: { unit: "mm", format: "a3", orientation: "portrait" },
      };

      const content = document.createElement("div");
      content.style.display = "flex";
      content.style.flexDirection = "column";
      content.style.alignItems = "center";
      content.style.justifyContent = "center";
      content.style.width = "100%";
      content.style.height = "100%";
      content.style.imageRendering = "100%";

      if (componentRef.current) {
        content.appendChild(componentRef.current.cloneNode(true));
      }

      html2pdf()
        .from(content)
        .set(opt)
        .save()
        .then(() => {
          if (downloadSection) downloadSection.style.display = "";
          setLoading(false);
          onClose();
        })
        .catch((error) => {
          console.error("Error generating PDF:", error);

          if (downloadSection) downloadSection.style.display = "";
          setLoading(false);
          onClose();
        });
    });
  };

  const { publishDate, description, content, author } = block || {};

  const getpublishDate = publishDate
    ? dayjs(publishDate).format("MMM DD, YYYY")
    : null;

  const handleClickOutside = (event: MouseEvent) => {
    if (
      componentRef?.current &&
      !componentRef?.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [componentRef?.current]);

  return (
    <div className="modal-overlay s(999):max-w-[100%] s(1280):max-w-[90%] max-w-[80%] p-8 mx-auto overlayImage rounded-lg fade-in flex fixed left-[50%] translate-x-[-50%] top-[5%] w-full h-[90%] overflow-scroll bg-[rgba(0,0,0,0.7)] backdrop-blur-sm z-[1000]  pointer-events-auto bg-theme-ivory items-start justify-start">
      <div ref={componentRef}>
        <div className="modal-content h-full w-full">
          {/* header */}
          <div
            id="downloadSection"
            className="flex justify-between items-center gap-[20px] mb-8"
          >
            <div className="flex items-center gap-3">
              <Image
                src="/assets/images/preview-logo.svg"
                alt="logo"
                width={514}
                height={514}
                className="w-14 rounded-full"
              />
              {author?.name && (
                <div className="s(480):flex-col flex flex-row justify-center items-center">
                  <div className="s(480):mb-6 s(480):text-center text-left">
                    <h5
                      className={clsx(
                        "text-18 font-semibold text-theme-black "
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
                </div>
              )}
            </div>
            <div className="flex items-center gap-[20px]">
              <div className="s(640):hidden flex items-center gap-[10px] rounded-lg border py-[9px] px-[10px] border-black cursor-pointer hover:bg-theme-black hover:text-white group">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 1920 1920"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-black group-hover:fill-white"
                >
                  <g fillRule="evenodd">
                    <path d="M1251.654 0c44.499 0 88.207 18.07 119.718 49.581l329.223 329.224c31.963 31.962 49.581 74.54 49.581 119.717V1920H169V0Zm-66.183 112.941H281.94V1807.06h1355.294V564.706H1185.47V112.94Zm112.94 23.379v315.445h315.445L1298.412 136.32Z" />
                    <path d="M900.497 677.67c26.767 0 50.372 12.65 67.991 37.835 41.901 59.068 38.965 121.976 23.492 206.682-5.308 29.14.113 58.617 16.263 83.125 22.814 34.786 55.68 82.673 87.981 123.219 23.718 29.93 60.198 45.854 97.13 40.885 23.718-3.276 52.292-5.986 81.656-5.986 131.012 0 121.186 46.757 133.045 89.675 6.55 25.976 3.275 48.678-10.165 65.506-16.715 22.701-51.162 34.447-101.534 34.447-55.793 0-74.202-9.487-122.767-24.96-27.445-8.81-55.906-10.617-83.69-3.275-55.453 14.456-146.936 36.48-223.284 46.983-40.772 5.647-77.816 26.654-102.438 60.875-55.454 76.8-106.842 148.518-188.273 148.518-21.007 0-40.32-7.567-56.244-22.701-23.492-23.492-33.544-49.581-28.574-79.85 13.778-92.95 128.075-144.79 196.066-182.625 16.037-8.923 28.687-22.589 36.592-39.53l107.86-233.223c7.68-16.377 10.051-34.56 7.228-52.518-12.537-79.059-31.06-211.99 18.748-272.075 10.955-13.44 26.09-21.007 42.917-21.007Zm20.556 339.953c-43.257 126.607-119.718 264.282-129.996 280.32 92.273-43.37 275.916-65.28 275.916-65.28-92.386-88.998-145.92-215.04-145.92-215.04Z" />
                  </g>
                </svg>
                {!loading && ( // Render the button only if not loading
                  <button
                    onClick={handlePrintArticle}
                    // className="ml-4"
                    disabled={loading} // Disable button while loading
                  >
                    Download PDF
                  </button>
                )}
              </div>
              <button onClick={onClose}>
                <MobileCloseIcon />
              </button>
            </div>
          </div>
          <div className="s(640):flex hidden justify-center items-center gap-[10px] rounded-lg border py-[9px] px-[10px] border-black cursor-pointer hover:bg-theme-black hover:text-white group">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-black group-hover:fill-white"
            >
              <g fillRule="evenodd">
                <path d="M1251.654 0c44.499 0 88.207 18.07 119.718 49.581l329.223 329.224c31.963 31.962 49.581 74.54 49.581 119.717V1920H169V0Zm-66.183 112.941H281.94V1807.06h1355.294V564.706H1185.47V112.94Zm112.94 23.379v315.445h315.445L1298.412 136.32Z" />
                <path d="M900.497 677.67c26.767 0 50.372 12.65 67.991 37.835 41.901 59.068 38.965 121.976 23.492 206.682-5.308 29.14.113 58.617 16.263 83.125 22.814 34.786 55.68 82.673 87.981 123.219 23.718 29.93 60.198 45.854 97.13 40.885 23.718-3.276 52.292-5.986 81.656-5.986 131.012 0 121.186 46.757 133.045 89.675 6.55 25.976 3.275 48.678-10.165 65.506-16.715 22.701-51.162 34.447-101.534 34.447-55.793 0-74.202-9.487-122.767-24.96-27.445-8.81-55.906-10.617-83.69-3.275-55.453 14.456-146.936 36.48-223.284 46.983-40.772 5.647-77.816 26.654-102.438 60.875-55.454 76.8-106.842 148.518-188.273 148.518-21.007 0-40.32-7.567-56.244-22.701-23.492-23.492-33.544-49.581-28.574-79.85 13.778-92.95 128.075-144.79 196.066-182.625 16.037-8.923 28.687-22.589 36.592-39.53l107.86-233.223c7.68-16.377 10.051-34.56 7.228-52.518-12.537-79.059-31.06-211.99 18.748-272.075 10.955-13.44 26.09-21.007 42.917-21.007Zm20.556 339.953c-43.257 126.607-119.718 264.282-129.996 280.32 92.273-43.37 275.916-65.28 275.916-65.28-92.386-88.998-145.92-215.04-145.92-215.04Z" />
              </g>
            </svg>
            {!loading && ( // Render the button only if not loading
              <button
                onClick={handlePrintArticle}
                // className="ml-4"
                disabled={loading} // Disable button while loading
              >
                Download PDF
              </button>
            )}
          </div>
          {/* header */}
          {block && <PreviewModalHeroSection block={block} />}
          <div className="mb-0">
            <div className="gap-10">
              <div className="w-full max-w-[20%]  sticky top-[2em] z-10 hidden lg:block px-[1em] lg:px-[0] mt-[2em] lg:mt-[0] self-start space-y-8 "></div>
              <div className="blogInner pt-[0]" id="blogContent">
                {getpublishDate && (
                  <span className="text-base text-theme-black pb-5 block font-semibold">
                    {`${getpublishDate}`}
                  </span>
                )}
                {description?.custom_rich_text && (
                  <div className="[&>p]:text-theme-black [&>p]:text-20 [&>p]:font-normal [&>p]:pb-6 [&>p]:leading-[1.5] border-b-[1px] border-theme-gray mb-10">
                    <RichText block={description} />
                  </div>
                )}
                {content?.custom_rich_text && (
                  <div className="[&>p]:text-theme-black [&>p]:text-20 [&>p]:font-normal [&>p]:pb-6 [&>p]:leading-[1.5]  ">
                    {content?.custom_rich_text && <RichText block={content} />}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewModalSection;
