import NextImage, { ImageProps } from "next/image";
import { CustomImageType } from "../../../../lib/sanity/types/common";
import { useSanityImage } from "../../../../lib/sanity/utils/useSanityImage";

const SanityImage: React.FC<
  Omit<ImageProps, "src" | "alt"> & {
    src: CustomImageType;
    alt?: string;
  }
> = ({ src, ...props }) => {
  const image = useSanityImage(src);
  return image ? (
    <NextImage {...image} alt={props.alt || ""} {...props} />
  ) : null;
};
export default SanityImage;
