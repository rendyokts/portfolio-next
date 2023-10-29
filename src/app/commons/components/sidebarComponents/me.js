import { useTheme } from "next-themes";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import React from "react";
import { motion } from "framer-motion";
import Verified from './../elements/verified';

export default function Me({ activeProps }) {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="self-center md:self-auto ">
        <div className=" rounded-lg hidden md:block relative">
          <div
            className={`absolute pr-2 py-2 rounded-br-2xl bg-neutral-50 dark:bg-dark -top-[2px] left-0 ${
              theme === "dark"
                ? "inverted-border-radius-dark"
                : "inverted-border-radius"
            } `}
          >
            <div className="flex relative items-center gap-2 px-2 py-1 border rounded-full z-10 bg-neutral-50 dark:bg-dark dark:border-neutral-700  ">
              <div className="w-2 h-2 rounded-full bg-green-500 block z-10 animate-beat"></div>
              <p className="text-xs">Hire me.</p>
            </div>
          </div>
          <div className="dark:brightness-50  relative z-[-1]">
            <Image
              src="/profilebg1.webp"
              width={100}
              height={100}
              alt="bgprofile"
              priority
              className="w-full rounded-lg bg-contain bg-bottom"
            ></Image>
          </div>
        </div>

        <div
          className={`flex md:flex-col ${
            activeProps ? "flex-col" : "flex-row jsutify-center items-center"
          } md:justify-center md:items-center gap-2 md:gap-0 transition-all duration-1000 ease-in-out`}
        > 
          <div className="md:-mt-12 mt-0 shadow-md md:border-2 md:z-10 z-0 md:border-white border-transparent  w-fit rounded-full">
            <div className="rounded-full overflow-hidden ">
              <Image
                src="/me.webp"
                loading="lazy"
                width={90}
                height={90}
                alt="me"
                className={`rounded-full scale-100 aspect-square transition-all duration-[100000ms] delay-50 ease-linear md:w-[90px]  md:h-[90px]  ${
                  activeProps ? "w-[80px] h-[80px] " : "h-[40px] w-[40px]"
                }`}
              ></Image>
            </div>
          </div>
          <div className="md:mt-4 mt-2 text-xl font-semibold flex justify-center items-center gap-2">
            <h1 className="md:text-xl text-lg">Reza Adi N</h1>
            <Verified/>
          </div>

          <p className="text-sm text-neutral-700 dark:text-neutral-500 hidden md:flex">
            @ryznoxy
          </p>
        </div>
      </div>
    </>
  );
}
