import { Box, HStack } from "@chakra-ui/react";
import { ListFloatingButtons } from "../components/ListFloatingButtons";
import useScreenWidth from "../lib/useScreenWidth";
import { IntroSection } from "../sections/IntroSection";
import { DesktopView } from "./DesktopView";
import { useEffect, useRef, useState } from "react";
import { ImageSection } from "../sections/ImageSection";
import { RootSection } from "../components/RootSection";
import { playAudio } from "../utils/helper";

export const Landing = () => {
  const [isIntroVisible, setIntroVisible] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const sw = useScreenWidth();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isPlaying && !isIntroVisible && audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log("Autoplay failed:", err);
      });
      setIsPlaying(true);
    }
  }, [isPlaying, isIntroVisible]);

  useEffect(() => {
    if (!isIntroVisible) {
      setIsPlaying(true);
    }
  }, [isIntroVisible]);

  return (
    <HStack
      className="root-landing"
      w={"100%"}
      h={"100%"}
      minH={"100dvh"}
      bgImage={sw > 1024 ? "/images/bg-primary.webp" : undefined}
      alignItems={"start"}
      justify={"center"}
      position={"relative"}
    >
      <HStack
        w={"100%"}
        h={"100dvh"}
        gap={4}
        bgColor={sw > 1024 ? "#00000080" : "white"}
        justify={"center"}
      >
        {sw > 1024 && <DesktopView />}

        <RootSection>
          {isIntroVisible ? (
            <IntroSection onOpenNextSection={() => setIntroVisible(false)} />
          ) : (
            <ImageSection />
          )}
        </RootSection>
      </HStack>

      <audio ref={audioRef} loop>
        <source src="/audio/song.mp3" />
      </audio>

      {!isIntroVisible && (
        <ListFloatingButtons
          onClickPlay={() => {
            setIsPlaying(true);
            playAudio(audioRef.current, isPlaying, setIsPlaying);
          }}
        />
      )}
    </HStack>
  );
};
