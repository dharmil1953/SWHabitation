import React, { useState } from "react";
import RichText from "@/components/Commons/RichText";
import clsx from "clsx";
import DropdownIcon from "@/components/Commons/AllIcons/DropdownIcon";
import { QuestionAndAnswerType } from "../../../../lib/sanity/types";

export interface QuestionAndAnswersProps {
  block: QuestionAndAnswerType[];
}

const QuestionAndAnswers: React.FC<QuestionAndAnswersProps> = ({ block }) => {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<
    number | null
  >(0);
  const handleQuestionClick = (index: number) => {
    if (selectedQuestionIndex === index) {
      setSelectedQuestionIndex(null);
    } else {
      setSelectedQuestionIndex(index);
    }
  };
  return (
    block && (
      <ul className="flex flex-col [&>*:nth-last-child(1)]:border-b-0 ">
        {block?.map((item, index) => {
          const { answer, question } = item || {};
          const isSelected = selectedQuestionIndex === index;
          return (
            <li
              key={index}
              className={clsx(
                "border-b-theme-gray border-b border-solid mb-8 last:mb-0",
                isSelected ? "pb-3 last:pb-0" : "pb-6 last:pb-0"
              )}
            >
              <div
                onClick={() => handleQuestionClick(index)}
                className="flex cursor-pointer items-center justify-between select-none  "
              >
                <p className="s(767):text-18 text-20 text-theme-black font-semibold">
                  {question}
                </p>
                <span className="pl-[1em]">
                  <div
                    className={clsx(
                      "transition duration-500  ease-in-out -rotate-90",
                      isSelected ? "rotate-0" : ""
                    )}
                  >
                    {isSelected ? <DropdownIcon /> : <DropdownIcon />}
                  </div>
                </span>
              </div>
              {isSelected && answer?.custom_rich_text && (
                <div className="[&>p]:text-zinc-500 s(767):[&>p]:text-base [&>p]:text-xl [&>p]:font-normal [&>p]:py-4  nav-item-animation ">
                  <RichText block={answer} />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    )
  );
};

export default QuestionAndAnswers;
