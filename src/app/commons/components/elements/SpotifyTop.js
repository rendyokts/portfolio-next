"use client";
import { SiSpotify } from "react-icons/si";
import Image from "next/image";
import useSWR from "swr";
import Link from "next/link";

export default function SpotifyTop() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR("/api/spotify", fetcher);
  
  return (
    <>
      <Link href={data?.CurrentlyPlaying ? data?.href : ""} target='_blank'>
        <div className="w-full bg-green-500 p-1 fixed bottom-0 z-[999999999]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 ">
                <SiSpotify size={20} color={"#ffffff"} />
                {data?.CurrentlyPlaying ? (
                  <h1 className="text-white text-sm">
                    Listening {data?.name} by {data?.artist.map((artist) => artist.name)}
                  </h1>
                ) : (
                  <h1 className="text-white text-sm">Not Listening</h1>
                )}
              </div>
              {data?.CurrentlyPlaying && (
                <h1 className="text-white text-sm">Click Me</h1>
              )}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
