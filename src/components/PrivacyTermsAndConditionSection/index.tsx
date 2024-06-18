import React from "react";
import RichText from "../Commons/RichText";
import { PrivacyTermsAndConditionSectionType } from "../../../lib/sanity/types/page";

const PrivacyTermsAndConditionSection: React.FC<
  PrivacyTermsAndConditionSectionType
> = (block) => {
  const { content, title } = block || {};

  return (
    <section className="termsSection">
      <div className="container">
        <div className="termsContent">
          <div className="s(1100):gap-y-[30px] s(1100):pt-[62px] pt-[100px] s(767):pb-[10px] s(1280):pb-[20px] pb-[30px]">
            {title && (
              <h2 className="s(767):text-38 s(1440):text-52 text-64 font-semibold text-theme-black leading-[1.1] uppercase s(1100):text-center">
                {title}
              </h2>
            )}
          </div>
          {content?.custom_rich_text && (
            <div className="termsDesc ml-[20px] s(767):[&>ul>li]:text-20 s(999):[&>ul>li]:text-22 s(1280):[&>ul>li]:text-20 [&>ul>li]:text-24 [&>ul>li]:font-light [&>ul>li]:list-disc [&>ul>li]:s(1280):mt-[20px] [&>ul>li]:mt-[30px] [&>ul>li]:leading-[1.2] mb-[176px]">
              <RichText block={content} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PrivacyTermsAndConditionSection;
