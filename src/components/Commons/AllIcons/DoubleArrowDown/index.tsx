import React from "react";
import { IconProps } from "../../../../../lib/sanity/types";

function DoubleArrowDown({ className }: IconProps) {
	return (
		<div>
			<svg
				width="12"
				height="12"
				viewBox="0 0 12 12"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={className}
			>
				<path
					d="M5.59998 10.8933L5.51998 10.9999H5.65331H6.92188H6.95522L6.97522 10.9733L10.5752 6.17325L10.6052 6.13325L10.5752 6.09325L6.97522 1.29325L6.95522 1.26659H6.92188H5.65331H5.51998L5.59998 1.37325L9.16998 6.13325L5.59998 10.8933ZM1.27998 10.8933L1.19998 10.9999H1.33331H2.60188H2.63522L2.65522 10.9733L6.25522 6.17325L6.28522 6.13325L6.25522 6.09325L2.65522 1.29325L2.63522 1.26659H2.60188H1.33331H1.19998L1.27998 1.37325L4.84998 6.13325L1.27998 10.8933Z"
					fill="#FEFFEA"
					stroke="#FEFFEA"
					strokeWidth="0.133333"
				/>
			</svg>
		</div>
	);
}

export default DoubleArrowDown;
