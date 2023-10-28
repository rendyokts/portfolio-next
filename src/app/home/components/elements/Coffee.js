import  Link  from 'next/link'
import { BiCoffee } from "react-icons/bi";
import React from 'react';

export default function Coffee() {
  return (
    <>
      <Link href='https://saweria.co/ryznoxy' target='_blank'>
        <BiCoffee size={24} className="text-3xl"/>
      </Link>
    </>
  )
}