import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import clsx from "clsx";

const ScrollToTopButton = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 100;
      setVisible(isScrolling);

      const windowHeight = window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const maxScroll = pageHeight - windowHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / maxScroll) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <div
          className="fixed right-6 bottom-6 md:right-8 md:bottom-8 w-14 h-14 flex items-center justify-center cursor-pointer"
          id="scroll"
          onClick={scrollToTop}
        >
          <div className="relative">
            <svg
              className="w-full h-full cursor-pointer relative scale-[0.9]"
              onClick={scrollToTop}
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="rgba(0,0,0,0.2)"
                strokeWidth="1"
              />
              <circle
                cx="12"
                cy="12"
                r="10"
                fill={clsx(scrollProgress === 100 ? "#333333" : "transparent")}
                stroke={clsx(scrollProgress === 100 ? "#333333" : "#333333")}
                strokeWidth="1"
                style={{
                  strokeDasharray: 63,
                  strokeDashoffset:
                    scrollProgress < 100 ? 63 - (scrollProgress * 63) / 100 : 0,
                  transition: "stroke-dashoffset 0.3s ease-in-out",
                }}
              />
            </svg>
            <svg
              width={14}
              height={8}
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={clsx(
                "absolute inset-0 w-full h-full scale-[0.4]",
                scrollProgress === 100 ? "fill-white" : "fill-black"
              )}
            >
              <path
                d="M7.00014 2.8284L2.05044 7.7782L0.63623 6.364L7.00014 0L13.3641 6.364L11.9499 7.7782L7.00014 2.8284Z"
                className={clsx(
                  scrollProgress === 100 ? "fill-white" : "fill-black"
                )}
              />
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
