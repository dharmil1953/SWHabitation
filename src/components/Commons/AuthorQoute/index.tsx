import { AuthorQouteType } from "../../../../lib/sanity/types";
import clsx from "clsx";
import { BackgroundBorder } from "../Background";

const AuthorQoute: React.FC<{ value?: AuthorQouteType }> = ({ value }) => {
  const { description, author, backgroundColor } = value || {};
  const { name, bio } = author || {};
  return (
    <div className="my-12">
      <div
        className={clsx(
          "pl-5 border-l-2 border-solid ",
          backgroundColor
            ? BackgroundBorder[backgroundColor]
            : " border-l-theme-black"
        )}
      >
        <h5 className="text-20 text-theme-black font-normal leading-[1.5]">
          {description}
        </h5>
        <span className="s(400):text-[17px] s(1100):text-18 text-20 text-theme-black font-normal leading-[1.5] pt-6 block">{`- ${name}`}</span>
      </div>
    </div>
  );
};

export default AuthorQoute;
