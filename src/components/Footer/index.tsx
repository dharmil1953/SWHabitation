import React from "react";
import { FooterType } from "../../../lib/sanity/types";
import NewsLetter from "../Commons/NewsLetter";
import clsx from "clsx";
import Link from "../Commons/Link";
import ScrollToTop from "../ScrollToTop";
export interface FooterProps {
  block: FooterType;
  path: string;
}
const Footer: React.FC<FooterProps> = ({ block, path }) => {
  const { footerLinks, newsLetter, _type, socialLinks } = block || {};
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer
        className={clsx(
          "bg-theme-orange rounded-[314.5px_314.5px_0_0] s(767):pt-[121px] pt-16 mt-[100px]"
        )}
      >
        <div className="container">
          <div className="text-center s(1100):px-4">
            {newsLetter && <NewsLetter block={newsLetter} />}
            {/* footer social links */}
            {socialLinks?.length > 0 && (
              <ul
                className={clsx(
                  "list-none flex items-center s(767):pb-0 py-11 s(767):flex-col justify-center"
                )}
              >
                {socialLinks?.map((link, index) => (
                  <li
                    key={index}
                    className={clsx("flex items-center s(767):flex-col")}
                  >
                    <Link
                      ariaLabel={link?.label}
                      to={link?.link}
                      target="_blank"
                      className={clsx(
                        "text-theme-black text-24 s(767):text-base font-normal hover:text-theme-ivory capitalize"
                      )}
                    >
                      {link?.label}
                    </Link>
                    <span
                      className={clsx(
                        "w-2 h-2 rounded-full bg-theme-ivory s(767):mx-0 s(767):my-2 mx-4",
                        index === socialLinks.length - 1 && "hidden"
                      )}
                    ></span>
                  </li>
                ))}
              </ul>
            )}
            {/* footer bottom links */}
            {footerLinks.length > 0 && (
              <ul className="flex items-center justify-center gap-4 pt-12 pb-7">
                {footerLinks?.map((item, index) => (
                  <li key={index}>
                    <Link
                      ariaLabel={item?.label}
                      to={item?.link}
                      className="text-theme-black text-16 font-normal  hover:text-theme-ivory capitalize"
                    >
                      {item?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </>
  );
};

export default Footer;
