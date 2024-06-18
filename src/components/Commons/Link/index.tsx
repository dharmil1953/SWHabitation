
import clsx from "clsx";
import { default as NextLink, LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";
import { LinkType } from "../../../../lib/sanity/types/linkType";
import { resolveUrl } from "../../../../lib/utils/link-utils";


export const Link: React.FC<
  PropsWithChildren<
    Omit<LinkProps & React.RefAttributes<HTMLAnchorElement>, "to" | "href"> & {
      to: LinkType | string | null | undefined;
      target?: React.HTMLAttributeAnchorTarget;
      className?: string;
      ariaLabel?: string
    }
  >
> = ({
  to,
  target,
  children,
  className,
  ariaLabel,
  prefetch,
  ...props
}) => {
    if (!to) {
      return <span {...props}>{children}</span>;
    } else if (typeof to === "object") {
      const { openTheLinkinANewWindow } = to;
      const url = resolveUrl(to);
      return (
        <NextLink
          href={url || "#"}
          aria-label={ariaLabel}
          className={clsx(
            className,
          )}
          prefetch={prefetch ?? false}
          target={target ?? openTheLinkinANewWindow ? "_blank" : "_self"}
          {...props}
        >
          {children}
        </NextLink>
      );
    }
    return (
      <NextLink
        href={to || "#"}
        target={target}
        aria-label={ariaLabel}
        {...props}
        prefetch={prefetch ?? false}
        className={clsx(
          className,
        )}
      >
        {children}
      </NextLink>
    );
  };
export default Link;
