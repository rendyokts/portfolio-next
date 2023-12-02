"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useHasMounted from "../hooks/useHasMounted";

export default function ContainerAOS({ children, className }) {
  const mounted = useHasMounted();
  useEffect(() => {
    AOS.init({
      once: false,
      easing: "ease-out",
      duration: 500,
    });
  }, [mounted]);

  if(!mounted) return null;
  return (
    <div className={`mb-12 ${className}`} data-aos="fade-up">
      {children}
    </div>
  );
}
