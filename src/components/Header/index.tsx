import React, { useEffect, useState } from "react";
import { BackgroundColorType, HeaderType } from "../../../lib/sanity/types";
import clsx from "clsx";
import Link from "../Commons/Link";
import Image from "../Commons/Image";
import MobileToggle from "../Commons/AllIcons/MobileToggle";
import MobileCloseIcon from "../Commons/AllIcons/MobileCloseIcon";
import NavItem from "./NavItem";
import { useModals } from "../Commons/ModalContext";
import { BackgroundColor, BackgroundColorHeader } from "../Commons/Background";

export interface HeaderProps {
  block: HeaderType;
  path: string;
  backgroundColor?: BackgroundColorType;
}
const Header: React.FC<HeaderProps> = ({ block, path, backgroundColor }) => {
  const { navItems, logo, socialMediaLinks } = block || {};
  const { setToggle, toggle } = useModals();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollPosition(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    const mediaQuery = window.matchMedia("(min-width: 1100px)");

    const handleMediaQueryChange = (e) => {
      if (e.matches) {
        if (toggle) {
          document.body.classList.add("overflow-y-hidden");
          // document.body.style.paddingRight = "15px";
        } else {
          document.body.classList.remove("overflow-y-hidden");
          // document.body.style.paddingRight = "0";
        }
      } else {
        document.body.classList.remove("overflow-y-hidden");
        // document.body.style.paddingRight = "0";
      }
      if (toggle) {
        document.body.classList.add("overflow-y-hidden");
      } else {
        document.body.classList.remove("overflow-y-hidden");
      }
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    handleMediaQueryChange(mediaQuery);

    const pathname = window.location.pathname;
    if (pathname === "/") {
      document.body.classList.add("rightSpacing");
    } else {
      document.body.classList.remove("rightSpacing");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      if (pathname === "/") {
        document.body.classList.remove("your-custom-class");
      }
    };
  }, [toggle, scrollPosition]);

  const openMenu = () => {
    setToggle(true);
    document.body.classList.add("active");
  };
  const closeMenu = () => {
    setToggle(false);
    document.body.classList.remove("active");
  };
  return (
    <header className={clsx("", BackgroundColor[backgroundColor])}>
      <div
        className={clsx(
          "s(1100):px-[1.5rem]  py-[50px] sm:py-11  flex items-center justify-between relative",
          path === "/" && !toggle ? "" : "container "
        )}
      >
        {logo && (
          <div
            className={clsx(
              "cursor-pointer nav-item-animation",
              toggle ? "" : ""
            )}
          >
            <Link to={logo?.link || "/"} ariaLabel={logo?.alt}>
              <div className="w-full">
                <Image
                  src={logo}
                  className={clsx(
                    `s(767):w-[137px] s(999):w-[150px] w-[175px] cursor-pointer`,
                    toggle ? "opacity-0" : "",
                    BackgroundColorHeader[backgroundColor]
                  )}
                />
              </div>
            </Link>
          </div>
        )}
        <div className={clsx("block", toggle ? "" : "")} onClick={openMenu}>
          <div
            className={clsx(
              "cursor-pointer nav-item-animation",
              toggle ? "hidden opacity-0 " : "opacity-100",
              BackgroundColorHeader[backgroundColor]
            )}
          >
            <MobileToggle />
          </div>
        </div>
        {toggle && (
          <div
            className={clsx(
              "absolute inset-0 pt-[50px] sm:pt-11 h-screen overflow-auto scrollbar-hide innerToggle",
              path !== "/" ? "s(1365):px-[24px]" : "s(1100):px-[24px]"
            )}
          >
            <div>
              <div
                className={clsx(
                  "",
                  toggle
                    ? "w-full flex justify-between items-center "
                    : "hidden"
                )}
              >
                <Link to={logo?.link || "/"} ariaLabel={logo?.alt}>
                  <div className="w-full nav-item-animation">
                    <Image
                      src={logo}
                      className="s(767):w-[137px] s(999):w-[150px] w-[175px]"
                    />
                  </div>
                </Link>
                {toggle && (
                  <div
                    className={clsx(
                      "cursor-pointer nav-item-animation",
                      toggle ? "opacity-100" : "opacity-0"
                    )}
                    onClick={closeMenu}
                    style={{ transition: "opacity 0.5s linear" }}
                  >
                    <MobileCloseIcon />
                  </div>
                )}
              </div>
              <div>
                {navItems && (
                  <div className={clsx(`s(640):pt-[50px] pt-16`)}>
                    {navItems.map((item, index) => {
                      return (
                        <div
                          className={clsx(
                            "flex items-center mb-8 last:mb-0 nav-item-animation",
                            toggle && "[&>div>a]:opacity-100",
                            !toggle && "[&>div>a]:opacity-0 "
                          )}
                          key={index}
                        >
                          <NavItem
                            closeMenu={closeMenu}
                            block={item}
                            path={path}
                            index={index}
                          />
                        </div>
                      );
                    })}
                  </div>
                )}
                <div className={clsx("", toggle ? "" : "hidden")}>
                  {socialMediaLinks?.length > 0 && (
                    <ul
                      className={clsx(
                        "list-none flex items-center py-11 justify-start pt-16 flex-wrap s(1100):gap-y-2 gap-y-4 nav-item-animation"
                      )}
                    >
                      {socialMediaLinks?.map((link, index) => (
                        <li key={index} className={clsx("flex items-center ")}>
                          <Link
                            to={link?.link}
                            ariaLabel={link?.title}
                            target="_blank"
                            className={clsx(
                              "text-theme-black text-24 s(767):text-20 font-light hover:opacity-50  transition-opacity duration-150 ease-in-out capitalize"
                            )}
                          >
                            {link?.title}
                          </Link>
                          <span
                            className={clsx(
                              "w-2 h-2 rounded-full bg-theme-black s(767):my-2 mx-4 mt-1",
                              index === socialMediaLinks?.length - 1 && "hidden"
                            )}
                          ></span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
