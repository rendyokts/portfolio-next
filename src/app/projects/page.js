import ContainerAOS from "./../commons/components/elements/ContainerAOS";
import Index from "./components/Index";

export const metadata = {
  title: "Projects | Rendi",
  description: "Software Engineer portfolio ideas",
  keywords: "portfolio frontend developer",
  alternates: {
    canonical: `${process.env.DOMAIN}/projects`,
  },
};

export default function Projects() {
  return (
    <>
      <ContainerAOS>
        <Index />
      </ContainerAOS>
    </>
  );
}
