import Sidebar from "./sidebar";
import Container from "./elements/container";

export default function Layouts({ children }) {
  return (
    <div className="max-w-6xl mx-auto transition-all duration-300 ease-in-out">
      <div className="flex flex-col gap-4 justify-center md:flex-row">
        <Sidebar />
        <div className="lg:max-w-[854px] transition-all duration-300 w-full md:min-h-screen no-scrollbar">
          <Container>{children}</Container>
        </div>
      </div>
    </div>
  );
}
