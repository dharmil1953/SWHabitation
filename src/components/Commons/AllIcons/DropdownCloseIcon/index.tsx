import React from "react";
import { IconProps } from "../../../../../lib/sanity/types";

function DropdownCloseIcon({ className }: IconProps) {
    return (
        
 <svg
 width={24}
 height={24}
 viewBox="0 0 24 24"
 fill="none"
 xmlns="http://www.w3.org/2000/svg"
 className={className}
>
 <path
     d="M6 18L18 6M6 6L18 18"
     stroke="#333333"
     strokeWidth="1.3"
     strokeLinecap="round"
     strokeLinejoin="round"
 />
</svg>
    );
}

export default DropdownCloseIcon;
