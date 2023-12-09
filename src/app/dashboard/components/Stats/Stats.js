import SectionHeading from "@/app/commons/components/elements/SectionHeading";
import SectionSubHeading from "@/app/commons/components/elements/SectionSubHeading";
import { BiTimeFive } from "react-icons/bi";
import React from "react";
import { STATLISTS } from "@/app/commons/constants/StatLists";
import StatCard from "./StatCard";
import Progress from "./Progress";

function Stats() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <SectionHeading title={"Statistics"} icon={<BiTimeFive size={24} />} />
        <SectionSubHeading>
          <p>My statistics.</p>
        </SectionSubHeading>
      </div>
      {/* <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
        {STATLISTS.map((stat) => (
          <StatCard
            key={stat.title}
            isi={stat.isi}
            title={stat.title}
            angka={stat.angka}
            angka_show={stat.angka_show}
          />
        ))}
      </div> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Progress />
      </div>
    </div>
  );
}

export default Stats;
