import Link, { LinkProps } from "next/link";
import styles from "./button.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

import * as React from "react";
import { IconExternalLink } from "../icons";

export interface CtaLinkProps extends LinkProps {
  children: React.ReactNode;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isInverse?: boolean;
  isExternal?: boolean;
}

export function CtaLink({ children, isPrimary, isSecondary, isInverse, isExternal, ...props }: CtaLinkProps) {
  return (
    <Link
      {...props}
      className={cx({
        "cta-link": true,
        "button-base": true,
        inverse: isInverse,
        primary: isPrimary,
        secondary: isSecondary,
        external: isExternal
      })}
    >
      {children}
      {!!isExternal && <IconExternalLink />}
    </Link>
  );
}