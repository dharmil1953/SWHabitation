import React from "react";
import { FourZeroFourSectionType } from "../../../lib/sanity/types/page";
import Image from "../Commons/Image";
import ButtonListing from "../Commons/Button/ButtonListing";
import locales from "../../../lib/locales";
import Link from "../Commons/Link";
import { routes } from "../../../lib/routes";

const FourZeroFourSection: React.FC<FourZeroFourSectionType> = (block) => {
  const { title, description, image } = block || {};
  return (
    <div className="text-center">
      <div className="container">
        <div className="s(480):pt-[30px] s(640):pt-[50px] s(767):pt-[70px] s(999):pt-[90px] s(1280):pt-[120px] s(1440):pt-[140px] pt-[171px] s(999):pb-[100px] s(1280):pb-[130px]   s(1440):pb-[150px] pb-[176px]">
          <div className="flex justify-center s(640):pb-8 s(767):pb-10 s(999):pb-14 s(1280):pb-16 s(1440):pb-20 pb-24">
            {image && (
              <div className="max-w-[804px] w-full">
                <Image src={image} />
              </div>
            )}
          </div>
          {title && (
            <h1 className="s(767):text-32 s(999):text-38 s(1280):text-42 s(1440):text-52 text-64 font-semibold text-theme-black s(767):pb-6 s(999):pb-8 s(1280):pb-10 pb-14 leading-[1]">
              {title}
            </h1>
          )}
          {description && (
            <p className="s(999):text-18 s(1280):text-20 s(1440):text-24 text-28 font-normal">
              {description}
            </p>
          )}
          <Link to={routes.home()} ariaLabel ={locales.en.BACKTOHOME}className="s(1280):mt-10 mt-12 inline-block">
            <ButtonListing
              className="inline-flex items-center gap-1.5"
              label={locales.en.BACKTOHOME}
              variant={"outLine"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FourZeroFourSection;
