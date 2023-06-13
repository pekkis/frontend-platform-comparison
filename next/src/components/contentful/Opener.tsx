"use client";

import { FC, ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

const Opener: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsOpen((current) => !current);
        }}
      >
        x
      </button>
      {isOpen && children}
    </>
  );
};

export default Opener;
