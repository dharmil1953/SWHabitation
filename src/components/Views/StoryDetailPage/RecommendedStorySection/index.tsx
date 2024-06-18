import React from "react";
import { RecommendedStoriesType } from "../../../../../lib/sanity/types";
import RecommendedStoryInfo from "./RecommendedStoryInfo";

export interface RecommendedStorySectionProps {
	block?: RecommendedStoriesType[];
}
const RecommendedStorySection: React.FC<RecommendedStorySectionProps> = ({
	block,
}) => {
	return (
		<div className=" mb-[6rem] sm:mb-[10rem] ">
			<div className="container">
				<div className="pt-0">
					{block && block.length > 0 && (
						<h2 className=" s(767):text-42 s(999):text-52  text-64 text-brand-lightBlack  font-semibold text-center md:text-start    leading-[73.6px] ">
							{"Recommended Blogs"}
						</h2>
					)}
					{block && block.length > 0 && (
						<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 s(767):mt-8 mt-[3.25rem] w-full gap-y-12 gap-x-8">
							{block?.map((item, index) => {
								return <RecommendedStoryInfo block={item} key={index} />;
							})}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default RecommendedStorySection;
