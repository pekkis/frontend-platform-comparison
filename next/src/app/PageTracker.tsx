"use client";

import { usePathname } from "next/navigation";
import { FC, useEffect } from "react";
import { pageview } from "../services/ga";

const PageTracker: FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) {
      return;
    }

    console.log("PATH NAME TRACKER", pathname);
    pageview(pathname);
  }, [pathname]);

  return null;
};

export default PageTracker;
