"use client";
import React, { useState } from "react";
import CourseCard from "./CourseCard";
import {
  FRONTEND,
  MASTERING_REACT,
} from "@/app/commons/constants/RoadmapLists";
import { motion } from "framer-motion";
import useHasMounted from "@/app/commons/components/hooks/useHasMounted";

function CourseList() {
  const [open, setOpen] = useState(1);
  const mounted = useHasMounted();
  if (!mounted) return null;

  return (
    <>
      <div className="flex flex-col justify-center w-full">
        <div className="flex items-center gap-4 text-xs justify-center sm:justify-start ">
          <div
            className={`flex items-center cursor-pointer w-fit py-2 px-4 rounded-full font-semibold   ${
              open === 1
                ? "bg-neutral-700 text-neutral-100 dark:bg-neutral-300 dark:text-neutral-800"
                : "bg-neutral-300 dark:text-neutral-100 dark:bg-neutral-800"
            }`}
            onClick={() => setOpen(1)}
          >
            Frontend developer
          </div>
          <div
            className={`flex items-center cursor-pointer w-fit py-2 px-4 rounded-full font-semibold  ${
              open === 2
                ? "bg-neutral-700 text-neutral-100 dark:bg-neutral-300 dark:text-neutral-800"
                : "bg-neutral-300 dark:text-neutral-100 dark:bg-neutral-800"
            }`}
            onClick={() => setOpen(2)}
          >
            Mastering React js
          </div>
        </div>
        {open === 1 && (
          <div className="flex flex-col space-y-2 mt-6">
            {FRONTEND.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <CourseCard
                  key={index}
                  Index={index}
                  icon={item.icon}
                  title={item.title}
                  indonesia={item.linkIndonesia}
                  english={item.linkEnglish}
                />
              </motion.div>
            ))}
          </div>
        )}
        {open === 2 && (
          <div className="flex flex-col space-y-2 mt-6">
            {MASTERING_REACT.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <CourseCard
                  key={index}
                  Index={index}
                  icon={item.icon}
                  title={item.title}
                  indonesia={item.linkIndonesia}
                  english={item.linkEnglish}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default CourseList;
