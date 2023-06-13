import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const SubscriptMark: FC<Props> = ({ children }) => {
  return <sub>{children}</sub>;
};

export default SubscriptMark;
