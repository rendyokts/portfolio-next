"use client";

import Image from "next/image";
import Link from "next/link";
import { useGetDataSpotify } from "../hooks/useGetDataSpotify";
import SectionHeading from "./SectionHeading";
import SectionSubHeading from "./SectionSubHeading";
import { BiLogoSpotify } from "react-icons/bi";
import { Progress } from "@nextui-org/react";
import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

export default function SpotifyCard() {
  const { data, error, isLoading } = useGetDataSpotify();

  const progress = useMemo(
    () => data && (data.progress / data.duration) * 100,
    [data]
  );

  const menit = data?.duration / 60000;
  const detik = data?.duration / 1000;
  const duration_menit = Number(menit.toFixed(2));

  if (isLoading || error)
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <SectionHeading title="Spotify" icon={<BiLogoSpotify size={24} />} />
          <SectionSubHeading>
            <p>Fetch API from Spotify</p>
          </SectionSubHeading>
        </div>
        <div className="w-full flex bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-4 items-center">
          <div className="relative w-full">
            <div className="flex  items-center gap-8">
              <div className="w-[75px] h-[75px] overflow-hidden rounded-lg sm:w-[100px] sm:h-[100px]  bg-neutral-300 dark:bg-neutral-700 animate-pulse"></div>

              <div className="flex flex-col items-start gap-1 md:gap-3">
                <div className="w-[178px] rounded h-4 bg-neutral-300 dark:bg-neutral-700 animate-pulse"></div>
                <div className="w-[187px] rounded h-5 bg-neutral-300 dark:bg-neutral-700 animate-pulse"></div>
                <div className="w-[143px] rounded h-4 bg-neutral-300 dark:bg-neutral-700 animate-pulse"></div>
              </div>
            </div>
            <Link
              href={"https://spotify.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-0 right-0 "
            >
              <BiLogoSpotify className="md:w-8 md:h-8 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    );

  if (data)
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <SectionHeading title="Spotify" icon={<BiLogoSpotify size={24} />} />
          <SectionSubHeading>
            <p>Fetch API from Spotify</p>
          </SectionSubHeading>
        </div>
        <div className="w-full flex bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-4 items-center">
          <div className="flex justify-between  w-full">
            <div className="flex  items-center gap-6">
              <Link href={data?.href} target="_blank" rel="noopener noreferrer">
                <div className="w-[75px] overflow-hidden rounded-lg sm:w-[100px] shadow-md">
                  <Image
                    src={data?.albumArt.url}
                    alt="Album art"
                    width={100}
                    height={100}
                  />
                </div>
              </Link>
              <div className="flex flex-col items-start gap-1 md:gap-3">
                <h1 className=" text-sm md:text-md font-semibold ">
                  {data.currentlyPlaying ? "LISTENING" : "LAST PLAYED"}
                </h1>
                <Link
                  href={data?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-lg font-bold hover:underline decoration-2 underline-offset-2">
                    {data.name}
                  </h3>
                </Link>
                <h1 className=" font-semibold md:text-md text-sm">
                  {data.artists.map((artist) => artist.name).join(", ")}
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-12  h-full ">
              <Link
                href={"https://spotify.com"}
                target="_blank"
                rel="noopener noreferrer"
                className=" top-0 right-0 "
              >
                <BiLogoSpotify className="md:w-8 md:h-8 h-5 w-5" />
              </Link>
              {/* <h1 className="text-sm font-semibold right-0 bottom-0 ">
                {duration_menit}
              </h1> */}
            </div>
          </div>
        </div>
      </div>
    );
}
