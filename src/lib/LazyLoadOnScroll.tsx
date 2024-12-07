import { Flex, FlexProps } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

interface Props extends FlexProps {
  children: React.ReactNode;
}

const LazyLoadOnScroll = ({ children, ...rest }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          console.log("now ready to view");

          observer.disconnect();
        }
      },
      { threshold: 0.7, rootMargin: "100px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Flex ref={ref} w={"100%"} {...rest}>
      {isVisible ? children : null}
    </Flex>
  );
};

export default LazyLoadOnScroll;
