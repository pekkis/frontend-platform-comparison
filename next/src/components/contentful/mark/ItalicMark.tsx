import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ItalicMark: FC<Props> = ({ children }) => {
  return <i>{children}</i>;
};

export default ItalicMark;
