"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Container({ children }) {
  useEffect(() => {
    AOS.init({ duration: 800, delay: 50 });
  }, []);
  return <div className="mb-10 md:mt-14 mt-20 py-4 px-4 ">{children}</div>;
}
