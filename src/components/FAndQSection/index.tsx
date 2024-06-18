import React from "react";
import QuestionAndAnswers from "./QuestionAndAnswer";
import clsx from "clsx";
import { FaqSectionType } from "../../../lib/sanity/types";
import RichText from "../Commons/RichText";

const FAndQSection: React.FC<{ block: FaqSectionType }> = ({ block }) => {
  const { questionAndAnswers, title, description } = block || {};

  return (
    <section className="mt-[80px] mb-[40px]">
      <div>
        <div>
          {title && (
            <h2 className="text-zinc-800 s(767):text-[24px] text-[28px] font-semibold leading-[1.5]">
              {title}
            </h2>
          )}
          {description && (
            <div className=" ">
              {description?.custom_rich_text && (
                <div className="[&>p]:text-zinc-800 s(1280):[&>p]:text-lg [&>p]:text-xl [&>p]:font-normal [&>p]:pt-2">
                  <RichText block={description} />
                </div>
              )}
            </div>
          )}
        </div>
        {questionAndAnswers && (
          <div className="pt-4 md:pt-8 lg:pt-[2.5rem] w-full max-w-[63.625rem] mx-auto">
            <QuestionAndAnswers block={questionAndAnswers} />
          </div>
        )}
      </div>
    </section>
  );
};

export default FAndQSection;
