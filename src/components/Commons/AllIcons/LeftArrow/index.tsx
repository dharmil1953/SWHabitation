import React from "react";

const LeftArrow = ({ className }) => {
	return (
		<div>
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={className}
			>
				<path
					d="M13.3334 7.33268H5.22008L8.94675 3.60602L8.00008 2.66602L2.66675 7.99935L8.00008 13.3327L8.94008 12.3927L5.22008 8.66602H13.3334V7.33268Z"
					fill="#333333"
				/>
			</svg>
		</div>
	);
};

export default LeftArrow;
