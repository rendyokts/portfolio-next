"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContainerAOS({ children,delayAOS }) {
  useEffect(() => {
    AOS.init({
      once: false,
      easing: "ease-out",
      duration: 500,
    });
  }, []);
  return (
    <div className='mb-12' data-aos='fade-up'>
      { children }
    </div>
  )
}