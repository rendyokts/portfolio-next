import ContainerAOS from "../commons/components/elements/ContainerAOS";
import Index from "./components/index";

export const metadata = {
  title: "About | Reza",
  description: "A short story about Reza",
  alternates: {
    canonical: `${process.env.DOMAIN}/about`,
  },
};

export default function About() {
  return (
    <ContainerAOS>
      <Index />
    </ContainerAOS>
  );
}
