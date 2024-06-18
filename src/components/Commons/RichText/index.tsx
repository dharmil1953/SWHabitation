import {
  PortableText,
  PortableTextReactComponents,
  toPlainText,
} from "@portabletext/react";
import dynamic from "next/dynamic";
import { default as NextLink } from "next/link";
import { RichTextType } from "../../../../lib/sanity/types";
import { slugify } from "../../../../lib/utils/slugify";
import clsx from "clsx";
import { BackgroundColor } from "../Background";
import Table from "../Table";
import CodeText from "../CodeText";
import FeatureSection from "../FeatureSection";
import { getPageLinkFromSlug } from "../../../../lib/utils/link-utils";
import CodeBlockBox from "@/components/CodeBlockBox";
const DynamicComponent = dynamic(() => import("../../DynamicComponent"));

const ReadMoreSection = dynamic(() => import("@/components/ReadMoreSection"));
const FAndQSection = dynamic(() => import("@/components/FAndQSection"));
const CustomClickImage = dynamic(() => import("../CustomClickImage"));
const Button = dynamic(() => import("../Button"));
const AuthorQoute = dynamic(() => import("../AuthorQoute"));
const ConclusionSection = dynamic(() => import("../ConclusionSection"));

export interface RichTextProps {
  block: RichTextType;
  isClickable?: boolean;
}

const RichText: React.FC<RichTextProps> = ({ block, isClickable }) => {
  const {
    custom_rich_text,
    authorQoute,
    conclusion,
    richTextLink,
    faqSection,
    featureSection,
    readMoreSection,
    codeBlockSection,
  } = block || {};
  const RichTextComponents: Partial<PortableTextReactComponents> = {
    types: {
      button: ({ value }) => <Button block={value} />,
      customImage: ({ value }) => (
        <CustomClickImage isClickable={isClickable} value={value} />
      ),
      table: ({ value }) => <Table block={value} />,
      authorQoute: () => <AuthorQoute value={authorQoute} />,
      codeBlockSection: (value) => <CodeBlockBox block={value} />,
      conclusion: () => <ConclusionSection block={conclusion} />,
      featureSection: () => <FeatureSection block={featureSection} />,
      faqSection: () => <FAndQSection block={faqSection} />,
      readMoreSection: () => <ReadMoreSection block={readMoreSection} />,
    },
    unknownType: ({ value, index }) => {
      return <DynamicComponent block={value} index={index} />;
    },

    marks: {
      externalLink: ({ value, children }) => {
        const { href } = value;
        return (
          <NextLink
            href={href || "#"}
            target={"_blank"}
            className="text-[#0A65EE] underline hover:text-theme-pink external "
          >
            {children}
          </NextLink>
        );
      },
      internalLink: ({ value, children }) =>
        richTextLink?.map((item, index) => {
          const { _type, pageType, slug, id } = item || {};
          const url = getPageLinkFromSlug(slug, pageType);
          return (
            value?.reference?._ref === id && (
              <NextLink
                href={url || "#"}
                target={"_self"}
                className="text-[#FF8966] underline"
              >
                {children}
              </NextLink>
            )
          );
        }),
    },

    list: {
      // Ex. 1: customizing common list types
      bullet: ({ children }) => (
        <ul
          className="list-disc list-outside ml-[10px] [&>li]:text-theme-black s(1280):[&>li]:text-18 [&>li]:text-20 [&>li]:leading-[1.5] [&>li]:pb-3 pl-3 mb-6
          [&>li>ul>li]:text-[18px] [&>li>ul]:m-0 [&>li>ul]:pt-[16px]
        "
        >
          {children}
        </ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal list-inside [&>li]:text-theme-black s(1280):[&>li]:text-18 [&>li]:text-20 [&>li]:pb-2">
          {children}
        </ol>
      ),
    },
    block: {
      "section-heading": (props) => {
        const text = toPlainText((props as unknown as { node: any }).node);
        return (
          <div
            className={clsx(
              "Conclusion"?.includes(text) &&
                "s(767):px-6 s(767):pb-2 px-8 rounded-t-xl mt-[30px]",
              "Conclusion"?.includes(text) &&
                conclusion?.backgroundColor &&
                BackgroundColor[conclusion?.backgroundColor],
              "Conclusion"?.includes(text) &&
                !conclusion?.backgroundColor &&
                "border-[1px] border-b-0 border-theme-black",
              "Conclusion"?.includes(text) && conclusion?.backgroundColor
                ? " text-white"
                : "text-black"
            )}
          >
            <h4
              className={clsx(
                "text-28 font-semibold s(767):pb-4 pb-6 pt-4 capitalize leading-8",
                "Conclusion"?.includes(text) && "pb-6 pt-8"
              )}
              id={slugify(text)}
            >
              {text}
            </h4>
          </div>
        );
      },
      "code-heading": (props) => {
        const text = toPlainText((props as unknown as { node: any }).node);
        return <CodeText text={text} />;
      },
    },
  };

  return (
    <PortableText value={custom_rich_text} components={RichTextComponents} />
  );
};

export default RichText;
