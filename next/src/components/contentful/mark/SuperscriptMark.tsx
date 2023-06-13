import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const SuperscriptMark: FC<Props> = ({ children }) => {
  return <sup>{children}</sup>;
};

export default SuperscriptMark;
