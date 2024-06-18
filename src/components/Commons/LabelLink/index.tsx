import React, { Fragment } from "react";
import Link from "../Link";
import { LabelLinkType } from "../../../../lib/sanity/types";

const LabelLink: React.FC<{ block: LabelLinkType }> = ({ block }) => {
  const { label, link } = block || {};
  return (
    <Link ariaLabel={label} to={link || "#"}>
      {label}
    </Link>
  );
};

export default LabelLink;
