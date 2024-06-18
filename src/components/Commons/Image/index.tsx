import { default as NextImage, ImageProps } from "next/image";
import dynamic from "next/dynamic";
import { CustomImageType } from "../../../../lib/sanity/types";
const SanityImage = dynamic(() => import("../SanityImage"));

const Image: React.FC<
  Omit<ImageProps, "src" | "alt"> & {
    src: string | CustomImageType;
    alt?: string;
  }
> = ({ src, quality, ...props }) => {
  switch (typeof src) {
    case "object":
      return <SanityImage loading="eager" src={src} {...props} />;
    default:
      return (
        <NextImage loading="eager" src={src} {...props} alt={props.alt || ""} />
      );
  }
};
Image.displayName = "Image";
export { Image };
export default Image;
