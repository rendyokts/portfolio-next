import { CareerLists } from "@/app/commons/constants/CareerLists";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import Link from "next/link";
import SectionHeading from "./../../commons/components/elements/SectionHeading";
import SectionSubHeading from "../../commons/components/elements/SectionSubHeading";

export default function Career() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <SectionHeading
          icon={<BiBriefcaseAlt2 className="mr-1" />}
          title={"Career"}
        />
        <SectionSubHeading>
          <p className="dark:text-neutral-400 text-md font-light">
            My professional career journey.
          </p>
        </SectionSubHeading>
        <div className="grid lg:grid-cols-2 gap-4 mt-4">
          {CareerLists.map(
            ({
              name,
              link,
              logo,
              location,
              date,
              during,
              index,
              profession,
            }) => {
              return (
                <div
                  key={index}
                  className="rounded-xl transition-all duration-300 shadow-sm lg:hover:shadow-md flex items-center gap-5 py-4 px-6 border border-neutral-300 dark:border-neutral-800 dark:bg-neutral-800"
                >
                  <div className="p-3 bg-neutral-200 dark:bg-neutral-600 rounded-full">
                    {logo}
                  </div>
                  <div className="flex-col flex space-y-2">
                    <h1>{profession}</h1>
                    <div className="flex items-center gap-1 md:gap-2 text-xs mt-1">
                      <Link
                        href={link}
                        className="text-neutral-500 dark:text-neutral-400 underline underline-offset-2"
                      >
                        {name}
                      </Link>
                      <span className="text-neutral-500 dark:text-neutral-400">
                        •
                      </span>
                      <p className="text-neutral-500 dark:text-neutral-400">
                        {location}
                      </p>
                    </div>
                    <div className="text-xs space-y-1">
                      <p className="text-neutral-500 dark:text-neutral-400">
                        {date}
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-400">
                        {during}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
