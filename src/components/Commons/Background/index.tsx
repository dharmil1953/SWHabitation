import { BackgroundColorType } from "../../../../lib/sanity/types";

export const BackgroundColor: Record<BackgroundColorType, string> = {
  green: "bg-[#99B898]",
  orange: "bg-[#FF8966]",
  pink: "bg-[#E84A5F]",
  yellow: "bg-[#FCFC62]",
};
export const BackgroundColorHeader: Record<BackgroundColorType, string> = {
  green: "",
  orange: "brightness-0 invert-[1]",
  pink: "brightness-0 invert-[1]",
  yellow: "",
};
export const BackgroundText: Record<BackgroundColorType, string> = {
  green: " text-[#333333]",
  orange: "text-white",
  pink: " text-white",
  yellow: "text-[black]",
};
export const ResourcesText: Record<BackgroundColorType, string> = {
  green: " text-theme-green",
  orange: "text-theme-orange",
  pink: " text-theme-pink",
  yellow: "text-theme-black",
};
export const BackgroundHoverText: Record<BackgroundColorType, string> = {
  green: " hover:text-theme-green",
  orange: "hover:text-theme-orange",
  pink: " hover:text-theme-pink",
  yellow: "hover:text-theme-black",
};
export const BackgroundActiveText: Record<BackgroundColorType, string> = {
  green: " text-theme-green",
  orange: "text-theme-orange",
  pink: " text-theme-pink",
  yellow: "text-theme-black",
};

export const BackgroundBorder: Record<BackgroundColorType, string> = {
  green: " border-theme-green",
  orange: " border-theme-orange",
  pink: " border-theme-pink",
  yellow: " border-theme-black",
};
export const BackgroundHover: Record<BackgroundColorType, string> = {
  green: " hover:bg-theme-green",
  orange: " hover:bg-theme-orange",
  pink: " hover:bg-theme-pink",
  yellow: " hover:bg-theme-black",
};
export const BackgroundFill: Record<BackgroundColorType, string> = {
  green: "[&>path]:fill-theme-green",
  orange: "[&>path]:fill-theme-orange",
  pink: " [&>path]:fill-theme-pink",
  yellow: " [&>path]:fill-theme-black",
};
export const BackgroundConclusionText: Record<BackgroundColorType, string> = {
  green: " text-white",
  orange: "text-white",
  pink: " text-white",
  yellow: "text-theme-black",
};
