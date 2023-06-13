import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const BoldMark: FC<Props> = ({ children }) => {
  return <b>{children}</b>;
};

export default BoldMark;
