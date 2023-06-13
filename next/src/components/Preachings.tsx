"use client";

import { useCallback, useEffect } from "react";
import VideoPlayer from "./VideoPlayer";
import { nth } from "ramda";
import { FC, useState } from "react";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { VideoType } from "@/types";
import {
  baseClass,
  browserClass,
  clickableClass,
  nonClickableClass,
  titleClass
} from "./Preachings.css";

type Props = {
  videos: VideoType[];
};

const Preachings: FC<Props> = ({ videos }) => {
  const [isHydrated, setIsHydrated] = useState<boolean>(false);
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const previous = useCallback(() => {
    setCurrent((current) => Math.max(current - 1, 0));
  }, [setCurrent]);
  const next = useCallback(() => {
    setCurrent((current) => Math.min(current + 1, videos.length - 1));
  }, [setCurrent, videos]);

  if (!isHydrated) {
    return null;
  }

  const video = nth(current, videos);

  if (!video) {
    return null;
  }

  const hasMore = current + 1 < videos.length;
  const hasLess = current > 0;
  return (
    <>
      <VideoPlayer videoId={video.videoId} />
      <div className={baseClass}>
        <div className={browserClass}>
          <FaChevronCircleLeft
            title="Edellinen"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              previous();
            }}
            className={hasLess ? clickableClass : nonClickableClass}
          />
        </div>
        <div className={titleClass}>
          {video.title}
          {video.nsfw && <span>[NSFW]</span>}
        </div>
        <div className={browserClass}>
          <FaChevronCircleRight
            onClick={(e) => {
              console.log("hip hei?");
              e.stopPropagation();
              e.preventDefault();
              next();
            }}
            title="Seuraava"
            className={hasMore ? clickableClass : nonClickableClass}
          />
        </div>
      </div>
    </>
  );
};

export default Preachings;
