import React from "react";
import { BlockDecoratorProps } from "sanity";

const CodeHeading = (props: BlockDecoratorProps) => (
  <h2 style={{ color: "black", background: "yellow" }}>{props.children}</h2>
);

export default CodeHeading;
