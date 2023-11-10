import SectionHeading from "@/app/commons/components/elements/SectionHeading";
import SectionSubHeading from "@/app/commons/components/elements/SectionSubHeading";
import {BiLogoGithub} from 'react-icons/bi'
import React from "react";

function GithubHeader() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <SectionHeading
          title="Github"
          icon={<BiLogoGithub size={24} />}
        />
        <SectionSubHeading>
          <p>My Github Contributions</p>
        </SectionSubHeading>
      </div>
      <div>UNDER DEVELOPMENT</div>
    </div>
  );
}

export default GithubHeader;
