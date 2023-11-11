"use client";
import React from "react";
import CountUp from "react-countup";

function StatCard({ title, isi, angka, angka_show }) {
  return (
    <div className=" transition-all duration-300 shadow-sm flex flex-col rounded-xl bg-neutral-50 py-3 px-4 sm:col-span-1 space-y-1 border border-neutral-200 dark:border-neutral-900 dark:bg-neutral-800">
      <span className="text-sm dark:text-neutral-400">{title}</span>
      <div className="flex items-center gap-1">
        {angka_show && (
          <span>
            <CountUp start={0} end={angka} duration={2} delay={0.5} />
          </span>
        )}
        <span>{isi}</span>
      </div>
    </div>
  );
}

export default StatCard;
