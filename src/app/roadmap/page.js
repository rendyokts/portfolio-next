import React from "react";
import ContainerAOS from "../commons/components/elements/ContainerAOS";
import RoadmapPage from "./components/Roadmap";

export const metadata = {
  title: "Roadmap | Rendi",
  description:
    "Learning path recomendation and free course playlist for software engineer.",
  keywords: "Roadmap , Nextjs Roadmap , Front End Roadmap",
  alternates: {
    canonical: `${process.env.DOMAIN}/about`,
  },
};

function Roadmap() {
  return (
    <>
      <ContainerAOS>
        <RoadmapPage />
      </ContainerAOS>
    </>
  );
}

export default Roadmap;
