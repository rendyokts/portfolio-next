import React from "react";
import DashedDivider from "../commons/components/elements/DashedDivider";
import SectionHeading from "../commons/components/elements/SectionHeading";
import SectionSubHeading from "../commons/components/elements/SectionSubHeading";


export default function Page() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Player" />
        <SectionSubHeading>
          <p>Fetch API from Spotify</p>
        </SectionSubHeading>
      </div>
      <DashedDivider />
    </div>
  );
}
