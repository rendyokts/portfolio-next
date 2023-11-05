import ContainerAOS from "@/app/commons/components/elements/ContainerAOS";
import Contact from "./Contact";

export default function Index() {
  return (
    <div className="h-screen">
      <ContainerAOS>
        <Contact />
      </ContainerAOS>
    </div>
  );
}
