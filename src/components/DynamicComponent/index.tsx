import dynamic from "next/dynamic";
import Image from "../Commons/Image";
const RichText = dynamic(() => import("../Commons/RichText"));
const Button = dynamic(() => import("../Commons/Button"));
const LabelLink = dynamic(() => import("../Commons/LabelLink"))

const DynamicComponent: React.FC<{
  block: any;
  index?: number;
  variant?: string;
}> = ({ block, ...props }) => {
  const Components = {
    customImage: Image,
    button: Button,
    labelLink: LabelLink,
    richText:RichText
  };
  const Component = block?._type
    ? Components[block?._type as keyof typeof Components]
    : null;
  // @ts-ignore
  return Component ? <Component block={block} {...props} /> : null;
};

export default DynamicComponent;
