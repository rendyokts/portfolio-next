import React from "react";

export default function ChatSkeleton() {
  return (
    <div>
      <div className="flex items-start  space-x-3 w-full">
        <div className="rounded-full w-10 h-10 bg-neutral-200 dark:bg-neutral-700"></div>
        <div className="flex flex-col space-y-2 w-full ">
          <div className="flex items-center justify-between w-full">
            <div className="font-medium flex items-center gap-1">
              <div className="w-24 h-4 bg-neutral-200 dark:bg-neutral-700 rounded-lg"></div>
              <div className="w-12 h-4 bg-neutral-200 dark:bg-neutral-700 rounded-lg"></div>
            </div>
            <p className="text-xs text-neutral-500 mr-2"></p>
          </div>
          <div className="flex items-center">
            <div className="flex w-fit  max-w-md">
              <div className=" bg-neutral-200 dark:bg-neutral-700 rounded-xl rounded-tl-sm px-4 py-2 text-md md:w-96 w-60 h-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
