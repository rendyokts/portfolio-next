import ContainerAOS from "./../commons/components/elements/ContainerAOS";
import Index from "./components/Index";

export const metadata = {
  title: "Contact | Rendi",
  description: "Contact me, contact Rendi Oktavian",
  keywords:
    "frontend developer, software engineer, react js, javascript, Python, contact",
  alternates: {
    canonical: `${process.env.DOMAIN}/contact`,
  },
};

export default function Contact() {
  return (
    <>
      <ContainerAOS>
        <Index />
      </ContainerAOS>
    </>
  );
}
