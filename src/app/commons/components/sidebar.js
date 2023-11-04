"use client";
import Link from "next/link";
import { navLists } from "./../constants/navLists";
import { usePathname } from "next/navigation";
import Me from "./sidebarComponents/me";
import { Divider } from "@nextui-org/react";
import { useState, useEffect, useRef } from "react";
import Copyright from "./elements/copyright";
import ThemeSwitcher from "./elements/ThemeSwitcher";
import { motion } from "framer-motion";
import useHasMounted from "./hooks/useHasMounted";

export default function Sidebar() {
  const [isActive, setIsActive] = useState(false);
  const dropdown = useRef(null);
  const pathname = usePathname();
  const mounted = useHasMounted();
  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!isActive) return;
    function handleClick(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setIsActive(!isActive);
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [isActive]);

  if (!mounted) return null;

  return (
    <>
      <div className="md:mt-9 mt-0">
        <aside
          class="md:sticky fixed top-0 z-40 md:w-60 w-full md:py-5 py-0 h-fit  transition-all duration-500 ease-in-out md:flex bg-neutral-50 md:bg-transparent dark:bg-dark md:dark:bg-transparent border-b-2 dark:border-neutral-800 md:border-0 justify-center"
          aria-label="Sidebar"
        >
          <div class="md:p-4 p-0 overflow-y-auto rounded-xl w-full">
            <div className="flex flex-row md:flex-col md:justify-center justify-between p-4 md:p-0">
              <Me activeProps={isActive} />
              <div
                className={`flex ${
                  isActive ? "flex-col-reverse justify-between" : "flex-row"
                }`}
              >
                <div className="relative w-full">
                  <div
                    className={`absolute md:right-1 md:-top-[148px] right-4 ${
                      isActive ? "-top-10" : "top-1"
                    } `}
                  >
                    <ThemeSwitcher />
                  </div>
                </div>
                <div>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    aria-label="btn-activator"
                    ref={dropdown}
                    className={`flex-col ${
                      isActive ? "space-y-1.5 " : "space-y-1"
                    } justify-center relative top-1 right-0 items-center flex md:hidden p-2 transition-all duration-500 ease-in-out`}
                    onClick={() => {
                      setIsActive(!isActive);
                    }}
                  >
                    <span
                      className={`hamburger-list ${
                        isActive ? "hamburger-list-active" : ""
                      } origin-top-left transition-all duration-500 ease-in-out`}
                    ></span>
                    <span
                      className={`hamburger-list ${
                        isActive ? "hamburger-list-active" : ""
                      } origin-left transition-all duration-500 ease-in-out`}
                    ></span>
                    <span
                      className={`hamburger-list ${
                        isActive ? "hamburger-list-active" : ""
                      } origin-bottom-left transition-all duration-500 ease-in-out`}
                    ></span>
                  </motion.button>
                </div>
              </div>
            </div>
            <nav
              className={`transition-all duration-500 ease-in-out md:flex flex-col p-4 md:p-0 h-screen md:h-auto  ${
                isActive ? "flex" : "hidden"
              }`}
            >
              <Divider orientation="horizontal" className="md:my-4 mb-4" />
              <ul className="flex flex-col space-y-2">
                {navLists.map(({ name, link, icon }) => (
                  <li
                    key={name}
                    className={`${
                      pathname === link
                        ? "bg-neutral-200/50 dark:bg-neutral-800"
                        : ""
                    } rounded-lg text-dark dark:text-neutral-100 group hover:scale-100 md:hover:scale-105  hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-500 ease-in-out capitalize `}
                  >
                    <Link
                      href={link}
                      className="flex gap-2 group-hover:gap-3 transition-all duration-500 ease-in-out px-4 py-2"
                    >
                      {icon} {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Divider
              orientation="horizontal"
              className="my-4 md:flex hidden "
            />
            <Copyright />
          </div>
        </aside>
      </div>
    </>
  );
}
