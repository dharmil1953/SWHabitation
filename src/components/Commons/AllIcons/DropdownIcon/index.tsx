import React from "react";
import { IconProps } from "../../../../../lib/sanity/types";

function DropdownIcon({ className }: IconProps) {
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
            d="M19 9L12 16L5 9"
            stroke="#333333"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>

    );
}

export default DropdownIcon;
