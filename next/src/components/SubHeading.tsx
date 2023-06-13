import { FC, ReactNode } from "react";
import { headingClass } from "./SubHeading.css";

type Props = {
  children: ReactNode;
};

const SubHeading: FC<Props> = ({ children }) => {
  return <h2 className={headingClass}>{children}</h2>;
};

export default SubHeading;
