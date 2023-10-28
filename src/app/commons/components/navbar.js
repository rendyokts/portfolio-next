import Link from "next/link";
import { navLists } from "./../constants/navLists";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-center  items-center  mt-2 p-2 px-3 rounded-3xl max-w-2xl mx-auto bg-neutral-300 fixed top-4 left-0 right-0">
        <ul className="flex justify-center items-center gap-3">
          {navLists.map((item) => (
            <li key={item.name}>
              <Link href={item.link}>
                <p className="flex justify-center items-center gap-1 hover:gap-2 p-3 transition-all duration-500 ease-in-out">
                  {item.icon} {item.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
