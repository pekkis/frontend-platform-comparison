"use client";

import { FC } from "react";

import { containerClass, innerClass } from "./VideoPlayer.css";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
  loading: () => {
    return <div>laddare...</div>;
  }
});

type Props = {
  videoId: string;
};

const VideoPlayer: FC<Props> = ({ videoId }) => {
  const { ref, inView } = useInView();

  return (
    <div className={containerClass}>
      <div ref={ref} className={innerClass}>
        {inView && (
          <ReactPlayer
            controls
            width="100%"
            height="100%"
            url={`https://www.youtube.com/watch?v=${videoId}`}
          />
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
