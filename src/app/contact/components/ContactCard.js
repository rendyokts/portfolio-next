import { CONTACTLIST } from "@/app/commons/constants/ContactList";
import Link from "next/link";
import React from "react";

function ContactCard() {
  return (
    <div className="space-y-2 flex flex-col">
      <h1>Find me on</h1>
      <div className="flex gap-2 flex-col lg:flex-row justify-center lg:justify-start items-center ">
        {CONTACTLIST.map((item, index) => {
          return (
            <Link
              href={item.href}
              key={index}
              target="_blank"
              className="w-full lg:w-auto "
            >
              <div
                className={`flex w-full justify-center gap-2 items-center text-white py-2 px-3 rounded-lg shadow-lg ${item.color}`}
              >
                {item.logo}
                <p className="text-sm">{item.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ContactCard;
