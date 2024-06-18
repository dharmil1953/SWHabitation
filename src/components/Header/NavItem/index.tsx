import React from "react";
import clsx from "clsx";
import Link from "@/components/Commons/Link";
import { NavItemType } from "../../../../lib/sanity/types";
export interface NavItemProps {
  block: NavItemType;
  path?: string;
  index: number;
  closeMenu?: () => void;
}
const NavItem: React.FC<NavItemProps> = ({ block, path, closeMenu, index }) => {
  const { link, title } = block || {};
  return (
    <div className={clsx("cursor-pointer")}>
      <Link
        to={link || "#"}
        ariaLabel={title}
        onClick={closeMenu}
        className={clsx(
          "s(1100):text-42 text-64  text-theme-black uppercase leading-[1.1] transition-font duration-300 hover:font-bold",
          `/${link?.slug}` === path || `${link?.slug}` === path ?  "font-bold" : "font-extralight"
        )}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavItem;
