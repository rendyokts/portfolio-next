"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContainerAOS({ children }) {
  useEffect(() => {
    AOS.init({
      once: false,
      offset: 50,
      easing: "ease-in-out",
      duration: 1000,
    });
  }, []);
  return (
    <div data-aos='fade-up'>
      { children }
    </div>
  )
}