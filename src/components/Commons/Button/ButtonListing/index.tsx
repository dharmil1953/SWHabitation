import React from "react";
import clsx from "clsx";
import { ButtonVariantType } from "../../../../../lib/sanity/types";
import { buttonVariants } from "..";
import { cn } from "../../../../../lib/utils/cn";
import DoubleArrowDown from "../../AllIcons/DoubleArrowDown";
import LeftArrow from "../../AllIcons/LeftArrow";
export interface ButtonListingProps {
  label: string;
  className?: string;
  variant: ButtonVariantType;
}
const ButtonListing: React.FC<ButtonListingProps> = ({
  label,
  variant,
  className,
}) => {
  return (
    <div className={cn(buttonVariants({ variant, className }))}>
      {variant === "green" ? (
        <>
          <span className="group-hover:text-theme-green"> {label}</span>
        </>
      ) : null}
      {variant === "cream" ? (
        <span className="group-hover:text-theme-pink"> {label}</span>
      ) : null}
      {variant === "orange" ? (
        <span className="group-hover:text-theme-orange"> {label}</span>
      ) : null}
      {variant === "green" ? (
        <DoubleArrowDown className="group-hover:[&>path]:!stroke-theme-green group-hover:[&>path]:!fill-theme-green" />
      ) : null}
      {variant === "orange" ? (
        <DoubleArrowDown className="group-hover:[&>path]:!stroke-theme-orange group-hover:[&>path]:!fill-theme-orange" />
      ) : null}
      {variant === "cream" ? (
        <DoubleArrowDown className="group-hover:[&>path]:!stroke-theme-pink group-hover:[&>path]:!fill-theme-pink" />
      ) : null}
      {variant === "outLine" ? (
        <>
          <LeftArrow className="group-hover:[&>path]:fill-theme-ivory" />
          <span className="group-hover:text-theme-ivory">{label}</span>
        </>
      ) : null}
      {variant === "black" ? (
        <>
          <span className="group-hover:text-theme-black">{label}</span>
          <LeftArrow className="[&>path]:fill-theme-ivory group-hover:[&>path]:fill-theme-black rotate-180" />
        </>
      ) : null}
    </div>
  );
};

export default ButtonListing;
