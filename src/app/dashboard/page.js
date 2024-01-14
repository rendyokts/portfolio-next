import ContainerAOS from "./../commons/components/elements/ContainerAOS";
import Index from "./components/Index";

export const metadata = {
  title: "Dashboard | Rendi",
  description:
    "This is my personal dashboard, built with Next.js API routes deployed as serverless functions.",
  keywords: "Next.js , API routes, Dashboard API, Routes Serverless, Functions",
  alternates: {
    canonical: `${process.env.DOMAIN}/dashboard`,
  },
};
export default function Dashboard() {
  return (
    <>
      <ContainerAOS>
        <Index />
      </ContainerAOS>
    </>
  );
}
