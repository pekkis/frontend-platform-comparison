import { FC, ReactNode } from "react";
import { base } from "./Container.css";

type Props = {
  children: ReactNode;
};

const Container: FC<Props> = ({ children }) => {
  return <div className={base}>{children}</div>;
};

export default Container;
