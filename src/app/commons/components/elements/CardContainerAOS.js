"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useIsMobile from "../hooks/useIsMobile";

export default function CardContainerAOS({ children,delayAOS,className }) {
  const mobile = useIsMobile(); 
  useEffect(() => {
    AOS.init({
      once: false,
      easing: "ease-in-out",
      duration: 500,
    });
  }, []);
  if (mobile === false) {
    return (<div className={className} data-aos='fade-up'>
        { children }
      </div>
    )
  } return (
      <div className={className} data-aos='fade-up' data-aos-delay={delayAOS}>
        { children }
      </div>
    )


  // return (
  //   <div className={className} data-aos='fade-up' data-aos-delay={delayAOS}>
  //     { children }
  //   </div>
  // )
}