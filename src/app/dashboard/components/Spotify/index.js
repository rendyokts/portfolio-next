import SectionHeading from "@/app/commons/components/elements/SectionHeading";
import SectionSubHeading from "@/app/commons/components/elements/SectionSubHeading";
import React from "react";
import { BiLogoSpotify } from "react-icons/bi";
import SpotifyCard from "@/app/commons/components/elements/SpotifyCard";

export default function Spotify() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Spotify" icon={<BiLogoSpotify size={24} />} />
        <SectionSubHeading>
          <p>Fetch API from Spotify</p>
        </SectionSubHeading>
      </div>
      <SpotifyCard />
    </div>
  );
}
