import { HeadlineType } from "@/types";
import { FC } from "react";

type Props = {
  headlines: HeadlineType[];
};

const Headlines: FC<Props> = ({ headlines }) => {
  return (
    <>
      {headlines.map((h) => {
        return (
          <div key={h.sys.id}>
            <h5>{h.title}</h5>
          </div>
        );
      })}
    </>
  );
};

export default Headlines;
