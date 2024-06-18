import { PropsWithChildren } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import dynamic from "next/dynamic";
import { ButtonType } from "../../../../lib/sanity/types";
import { cn } from "../../../../lib/utils/cn";
import ButtonListing from "./ButtonListing";
const Link = dynamic(() => import("../Link"));
export const buttonVariants = cva(
  "s(350):text-base s(480):text-lg text-xl font-normal  ",
  {
    variants: {
      variant: {
        default: "",
        cream:
          "py-[0.8em] s(400):px-9 px-12 shadow-buttonShadow inline-flex items-center gap-1 group border-2 border-transparent hover:bg-transparent  transition-all duration-300 ease-in-out  bg-theme-pink hover:border-theme-pink cursor-pointer hover:shadow-none text-theme-black",
        orange:
          "py-[0.8em] s(400):px-9 px-12 shadow-buttonShadow inline-flex items-center gap-1 group border-2 border-transparent hover:bg-transparent  transition-all duration-300 ease-in-out  bg-theme-orange hover:border-theme-orange cursor-pointer hover:shadow-none text-theme-ivory",
        green:
          "py-[0.8em] s(400):px-9 px-12 shadow-buttonShadow inline-flex items-center gap-1 group border-2 border-transparent hover:bg-transparent  transition-all duration-300 ease-in-out  bg-theme-green hover:border-theme-green cursor-pointer hover:shadow-none text-theme-ivory",
        outLine:
          "py-[0.8em] s(400):px-9 px-12 shadow-buttonShadow inline-flex items-center gap-1 group border-2 border-theme-black   transition-all duration-300 ease-in-out  bg-theme-ivory hover:bg-theme-black hover:border-theme-black cursor-pointer hover:shadow-none text-theme-black",
        black:
          "py-[0.8em] s(400):px-9 px-12 inline-flex items-center gap-1 group border-2 border-theme-black   transition-all duration-300 ease-in-out bg-theme-black hover:bg-theme-ivory   ",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}
const Button: React.FC<
  PropsWithChildren<
    { block: ButtonType } & React.DetailedHTMLProps<
      ButtonProps,
      HTMLButtonElement
    >
  >
> = ({ block, className = "", ...props }) => {
  const { label, link, variant } = block || {};
  return block ? (
    block?.link ? (
      <div className="group inline-flex">
        <Link
          ariaLabel={label}
          to={link || "#"}
          className={cn(buttonVariants({ variant, className }))}
        >
          <ButtonListing label={label} variant={variant} />
        </Link>
      </div>
    ) : (
      <div className="group inline-flex">
        <Link
          ariaLabel={label}
          to={"#"}
          className={cn(buttonVariants({ variant, className }))}
        >
          <ButtonListing label={label} variant={variant} />
        </Link>
      </div>
    )
  ) : (
    <div className="flex">
      <span>{props.children}</span>
    </div>
  );
};

export default Button;
