import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const CodeMark: FC<Props> = ({ children }) => {
  return <code>{children}</code>;
};

export default CodeMark;
