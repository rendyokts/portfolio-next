'use client'

import useHasMounted from "@/app/commons/components/hooks/useHasMounted"
import {PROJECTSLISTS } from "@/app/commons/constants/ProjectsLists"
import { motion } from "framer-motion"
import Link from 'next/link'


export default function ProjectsCards() {
  const mounted = useHasMounted();
  if (!mounted) return null;

  return (
    <>
    {PROJECTSLISTS.map((item,Index) => {
      return (
      <Link key={Index} href={`/projects/${item.slug}`}>
    <div  className="rounded-xl transition-all duration-300 shadow-sm lg:hover:shadow-md relative border dark:bg-neutral-800 border-neutral-200 dark:border-neutral-800 lg:hover:scale-[102%]  cursor-pointer ">
      {item.is_featured && (
          <div
          className='rounded-tr-xl rounded-bl-xl bg-green-400 px-2 py-1 right-0 absolute text-xs text-center z-[2] text-neutral-700'>Featured</div>
        )}
        <div className="flex flex-col">
        <div className='h-40 overflow-hidden w-auto rounded-t-xl'>
          <motion.img
          initial={{ filter: 'blur(20px)' }}
          animate={{ filter: 'blur(0px)' }}
          transition={{ duration: 0.5, delay: 0.5 }}
          src={item.image} alt={item.title} width={400} height={400} className='rounded-xl '></motion.img>
        </div>
        <div className='px-5 py-6 space-y-5 '>
          <h1 className="text-xl">{item.title}</h1>
          <p className="line-clamp-2">{item.description}</p>
          <p className='flex gap-2 mt-4'>
              {item.tech_stack.map((children) => {
              return children
            })}
            
          </p>
        </div>
      </div>
    </div>
    </Link>
      )
    })}
    
    </>
  )
}