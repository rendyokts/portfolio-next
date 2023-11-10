"use client";
import React from "react";
import { motion } from "framer-motion";
import { PROGRESSLISTS } from "@/app/commons/constants/ProgressLists";
import useHasMounted from "@/app/commons/components/hooks/useHasMounted";

function ProgressCard() {
  const hasMounted = useHasMounted();
  if (!hasMounted) return null;

  return (
    <>
      {PROGRESSLISTS.map((items) => (
        <div
          key={items.title}
          className={`p-[3px] rounded-xl w-full h-fit bg-gradient-to-r ${items.gradients} relative mt-2`}
        >
          <h1 className="absolute -top-3 left-4 bg-white px-2 py-0 dark:bg-dark">
            {items.title}
          </h1>
          <div className="bg-white dark:bg-dark w-full h-fit rounded-xl p-6">
            <div className="flex flex-col justify-center">
              {items.lists.map((item) => (
                <div
                  className="grid grid-cols-12 justify-center items-center gap-6 space-y-1"
                  key={item.name}
                >
                  <h1 className="col-span-4">{item.name}</h1>
                  <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-neutral-800 flex col-span-6">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.level}` }}
                      transition={{ duration: 1.2, easings: "ease-in-out" }}
                      className={`bg-gradient-to-r ${item.gradients} h-3 rounded-full`}
                      style={{ width: `${item.level}` }}
                    ></motion.div>
                  </div>
                  <h1 className="col-span-2">{item.level}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProgressCard;
