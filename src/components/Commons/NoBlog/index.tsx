import React from "react";
import ButtonListing from "../Button/ButtonListing";
import Link from "../Link";
export interface NoBlogTypes {
  title?: string;
  buttonLabel?: string;
  buttonLink?: string;
}

const NoBlog: React.FC<NoBlogTypes> = ({ title, buttonLabel, buttonLink }) => {
  return (
    <div className="flex items-center justify-center flex-col my-[4rem] ">
      <h3 className="s(640):text-32 s(767):text-38 s(1280):text-42 s(1440):text-52 text-64 text-theme-black font-400 leading-[1.3] s(640):mb-6 s(999):mb-8 mb-10">
        {title}
      </h3>
      <Link to={buttonLink} ariaLabel={buttonLabel} className={" "}>
        <ButtonListing
          className="inline-flex items-center gap-1.5"
          label={buttonLabel || ""}
          variant={"outLine"}
        />
      </Link>
    </div>
  );
};

export default NoBlog;
