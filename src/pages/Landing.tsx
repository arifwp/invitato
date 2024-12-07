import { HStack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { ListFloatingButtons } from "../components/ListFloatingButtons";
import { RootSection } from "../components/RootSection";
import useScreenWidth from "../lib/useScreenWidth";
import { BrideGroomSection } from "../sections/BrideGroomSection";
import { ImageSection } from "../sections/ImageSection";
import { IntroSection } from "../sections/IntroSection";
import { PlaceTimeSection } from "../sections/PlaceTimeSection";
import { QuoteSection } from "../sections/QuoteSection";
import { WatchVideoSection } from "../sections/WatchVideoSection";
import WelcomeSection from "../sections/WelcomeSection";
import { playAudio } from "../utils/helper";
import { DesktopView } from "./DesktopView";
import { PrayersWishesSection } from "../sections/PrayersWishesSection";

export const Landing = () => {
  const [isIntroVisible, setIntroVisible] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const sw = useScreenWidth();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const welcomeSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isIntroVisible && audioRef.current && !isPlaying) {
      audioRef.current.play().catch((err) => {
        console.log("Autoplay failed:", err);
      });
      setIsPlaying(true);
    }
  }, [isIntroVisible, isPlaying]);

  const scrollToNextSection = () => {
    if (welcomeSectionRef.current) {
      welcomeSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HStack
      w={"100%"}
      h={"100dvh"}
      gap={0}
      justify={sw > 1024 ? "end" : "center"}
    >
      {sw > 1024 && <DesktopView />}

      <RootSection>
        {isIntroVisible ? (
          <IntroSection onOpenNextSection={() => setIntroVisible(false)} />
        ) : (
          <>
            <ImageSection
              scrollToWelcomeSection={() => {
                scrollToNextSection();
              }}
            />

            <WelcomeSection welcomeSectionRef={welcomeSectionRef} />

            <BrideGroomSection />

            <QuoteSection />

            <PlaceTimeSection />

            <WatchVideoSection />

            <PrayersWishesSection />
          </>
        )}
      </RootSection>

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
