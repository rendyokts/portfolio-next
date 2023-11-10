import SectionHeading from "@/app/commons/components/elements/SectionHeading";
import SectionSubHeading from "@/app/commons/components/elements/SectionSubHeading";
import React from "react";

function Header() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title={"Dashboard"} />
        <SectionSubHeading>
          <p>My personal dashboard.</p>
        </SectionSubHeading>
      </div>
    </div>
  );
}

export default Header;
