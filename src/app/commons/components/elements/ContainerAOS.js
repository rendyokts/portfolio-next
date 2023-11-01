"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContainerAOS({ children }) {
  useEffect(() => {
    AOS.init({
      once: false,
      easing: "ease-in-out",
      duration: 700,
    });
  }, []);
  return (
    <div className='mb-12' data-aos='fade-up'>
      { children }
    </div>
  )
}