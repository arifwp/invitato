import { Dispatch, SetStateAction } from "react";

export const playAudio = (
  audioRef: any,
  isPlaying: boolean,
  setIsPlaying: Dispatch<SetStateAction<boolean>>
) => {
  if (audioRef) {
    if (isPlaying) {
      audioRef.pause();
    } else {
      audioRef.play();
    }

    setIsPlaying(!isPlaying);
  }
};
