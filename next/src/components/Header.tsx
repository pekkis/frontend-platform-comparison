"use client";

import Link from "next/link";
import { FC } from "react";
import {
  baseClass,
  headerClass,
  headerLinkClass,
  activeLinkClass
} from "./Header.css";
import cx from "clsx";
import { usePathname } from "next/navigation";

const Header: FC = () => {
  const pathname = usePathname();

  return (
    <header className={baseClass}>
      <nav className={headerClass}>
        <Link
          href="/"
          className={cx(headerLinkClass, {
            [activeLinkClass]: pathname === "/"
          })}
        >
          pekkis.eu
        </Link>{" "}
        |{" "}
        <Link
          href="/blogi"
          className={cx(headerLinkClass, {
            [activeLinkClass]: pathname?.startsWith("/blogi")
          })}
        >
          blogi
        </Link>
      </nav>
    </header>
  );
};

export default Header;
