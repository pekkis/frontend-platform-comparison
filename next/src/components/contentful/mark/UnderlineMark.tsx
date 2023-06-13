import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const UnderlineMark: FC<Props> = ({ children }) => {
  return <u>{children}</u>;
};

export default UnderlineMark;
