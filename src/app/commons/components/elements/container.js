"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Container({ children }) {
  useEffect(() => {
    AOS.init({
      once: false,
      offset: 50,
      easing: "ease-in-out",
      duration: 1000,
    });
  }, []);
  return (
    <div
      className="mb-10 md:mt-14 mt-20 py-4 md:px-4 px-8"
    >
      {children}
    </div>
  );
}
