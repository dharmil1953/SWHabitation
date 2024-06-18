import React from "react";
import { CustomImageType } from "../../../../lib/sanity/types";
import Image from "../../Commons/Image";

export interface MobileAnimationSectionProps {
	block: CustomImageType[];
}

const MobileAnimationSection: React.FC<MobileAnimationSectionProps> = ({
	block,
}) => {
	return (
		block?.length > 0 && (
			<div className=" w-fit  flex  justify-between items-center  marqueeText  overflow-scroll">
				<>
					<ul className="flex justify-between items-center gap-8 sm:gap-16  marqueeTextInner  w-fit px-6 sm:px-12 ">
						{block?.map((item, index) => (
							<li
								key={index}
								className="flex items-center justify-start  transition-all ease duration-300"
							>
								<Image
									src={item}
									className="min-w-[7rem]  w-full h-[5rem]  object-contain object-center aspect-auto"
								/>
							</li>
						))}
					</ul>
					{/* animation us to second ul */}
					<ul className="flex justify-between items-center gap-8 sm:gap-16  marqueeTextInner  w-fit px-6 sm:px-12 ">
						{block?.map((item, index) => (
							<li
								key={index}
								className="flex items-center justify-start  transition-all ease duration-300"
							>
								<Image
									src={item}
									className="min-w-[7rem]  w-full h-[5rem]  object-contain object-center aspect-auto"
								/>
							</li>
						))}
					</ul>
					{/* animation us to second ul */}
				</>
			</div>
		)
	);
};

export default MobileAnimationSection;
