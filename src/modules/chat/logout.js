"use client";
import { signOut } from "firebase/auth";
import { auth } from "@/app/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { BiShow, BiHide, BiExit } from "react-icons/bi";
import { FaSignOutAlt } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import { MdVerified } from "react-icons/md";

const Logout = () => {
  const [user] = useAuthState(auth);
  const [emailShow, setEmailShow] = useState(false);

  const authorEmail = process.env.NEXT_PUBLIC_AUTHOR_EMAIL;

  const handleSignOut = async () => {
    const signOutConfirm = confirm("Are you sure you want to sign out?");

    if (signOutConfirm) {
      await signOut(auth);
    } else {
      return;
    }
  };

  return (
    <div className="flex justify-between md:flex-row flex-col items-center mt-5 ">
      <div className="flex items-center gap-2">
        <Image
          src={user?.photoURL}
          alt={user?.displayName}
          width={50}
          height={50}
          className="rounded-full w-[40px] h-[40px] "
        />
        <div className="space-y-1">
          <div className="flex gap-2 text-sm items-center">
            <p className="line-clamp-1">{user?.displayName}</p>
            {user?.email === authorEmail && (
              <MdVerified className="text-blue-500" />
            )}
          </div>
          <div className="flex gap-2">
            {emailShow ? (
              <p className="cursor-pointer text-xs">{user?.email}</p>
            ) : (
              <div className="w-40  h-5 rounded-lg bg-neutral-200 dark:bg-neutral-700"></div>
            )}
            <div>
              {emailShow ? (
                <BiHide
                  size={24}
                  className="cursor-pointer"
                  onClick={() => setEmailShow(false)}
                />
              ) : (
                <BiShow
                  size={24}
                  className="cursor-pointer"
                  onClick={() => setEmailShow(true)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={handleSignOut}
        className="cursor-pointer md:text-red-500 text-white flex gap-1 items-center text-sm px-3 md:p-0 py-1 rounded-lg md:bg-transparent bg-red-500 mt-2 md:mt-0"
      >
        Sign out
        <BiExit size={20} />
      </button>
    </div>
  );
};

export default Logout;
