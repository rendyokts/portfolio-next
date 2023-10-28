'use client'
import Sidebar from "./sidebar";
import Container from "./elements/container";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
export default function Layouts({children}) {
  useEffect(() => {
    AOS.init({
      once: false,
      offset: 50,
      easing: "ease-in-out",
      duration: 1000,
    });
  }, []);
  return (
    <div className="max-w-6xl mx-auto transition-all duration-1000 ease-in-out">
        <div className="flex flex-col gap-4 justify-center md:flex-row" >
          <Sidebar />
          <div className="lg:max-w-[854px] transition-all duration-300 w-full md:min-h-screen no-scrollbar">
          <Container>{children}</Container>
          </div>
        </div>
    </div>
  )
}