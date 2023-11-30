import Link from "next/link";
import React from "react";
import { BiLeftArrowCircle } from "react-icons/bi";

function BackButton({ href }) {
  return (
    <div>
      <Link
        href={href}
        className="text-neutral-700 dark:text-neutral-400 flex gap-2 hover:gap-3 item-center justify-start transition-all duration-300 ease-in-out w-fit pb-4"
      >
        <BiLeftArrowCircle size={24} /> <p className="text-lg ">Back</p>
      </Link>
    </div>
  );
}

export default BackButton;
