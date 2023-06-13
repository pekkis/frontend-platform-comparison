import { ComponentProps, FC } from "react";
import { headingClass } from "./MainHeading.css";

const MainHeading: FC<ComponentProps<"h1">> = ({ children, ...rest }) => {
  return (
    <h1 {...rest} className={headingClass}>
      {children}
    </h1>
  );
};

export default MainHeading;
