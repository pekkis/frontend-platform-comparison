import { FC, ReactNode } from "react";
import { baseClass } from "./Padder.css";

type Props = {
  children: ReactNode;
};

const Padder: FC<Props> = ({ children }) => {
  return <div className={baseClass}>{children}</div>;
};

export default Padder;
