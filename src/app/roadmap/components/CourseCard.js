"use client";
import useIsMobile from "@/app/commons/components/hooks/useIsMobile";
import { Tooltip } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

function CourseCard({ Index, icon, title, indonesia, english }) {
  const isMobile = useIsMobile();
  return (
    <>
      <div className="rounded-xl transition-all duration-300 shadow-sm lg:hover:shadow-md flex justify-between p-4 border text-sm border-neutral-300 text-neutral-700 dark:border-neutral-700 dark:text-neutral-400 ">
        <div key={Index} className="flex gap-4 text-xs items-center">
          {icon} {title}
        </div>
        <div className="flex gap-2">
          {indonesia && (
            <Tooltip content="Free Course!" radius="sm">
              <Link
                href={indonesia}
                className="text-xs text-neutral-800 dark:text-white  cursor-pointer md:px-3 md:py-1 px-[6px] py-1 rounded-full bg-neutral-300 dark:bg-neutral-800"
              >
                <h1>{isMobile ? "ID" : "Indonesia"}</h1>
              </Link>
            </Tooltip>
          )}

          {english && (
            <Tooltip content="Free Course!" radius="sm">
              <Link
                href={english}
                className="text-xs text-neutral-800 dark:text-white  cursor-pointer md:px-3 md:py-1 px-[6px] py-1 rounded-full bg-neutral-300 dark:bg-neutral-800"
              >
                <h1>{isMobile ? "EN" : "English"}</h1>
              </Link>
            </Tooltip>
          )}
        </div>
      </div>
    </>
  );
}

export default CourseCard;
