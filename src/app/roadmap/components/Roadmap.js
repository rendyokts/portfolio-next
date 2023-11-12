import DashedDivider from "@/app/commons/components/elements/DashedDivider";
import SectionHeading from "@/app/commons/components/elements/SectionHeading";
import SectionSubHeading from "@/app/commons/components/elements/SectionSubHeading";
import React from "react";
import CourseList from "./CourseList";

function RoadmapPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Roadmap" />
        <SectionSubHeading>
          <p>My journey of learning.</p>
        </SectionSubHeading>
      </div>
      <DashedDivider />
      <CourseList />
    </div>
  );
}

export default RoadmapPage;
