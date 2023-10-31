import Image from 'next/image'
import Link from 'next/link'
import EDULISTS from './../../commons/constants/EducationLists'

export default function EducationCard({logo,href,title,school,jurusan,year}) {
  return (
  <>
<div className='rounded-xl transition-all duration-300 shadow-sm lg:hover:shadow-md flex items-center gap-5 py-4 px-6 border border-neutral-300 dark:border-neutral-800 dark:bg-neutral-800'>
          <div>
            <Image src='https://res.cloudinary.com/dxgsqxdi3/image/upload/f_auto,q_auto/lfbq9tsqbpacfjy7xka3' width={70} height={70} ></Image>
          </div>
          <div className='flex flex-col space-y-2'>
            <Link href='https://zone.smpmuh7ska.sch.id/' target='_blank' className='text-md font-medium'>SMP Muhammadiyah 7 Surakarta</Link>
            <div className='flex flex-col lg:flex-row space-x-0 lg:space-x-2 font-light text-xs md:text-sm text-neutral-500 dark:text-neutral-300'>
              <h1>Junior High School</h1>
            </div>
            <h1 className='font-light md:text-sm text-xs text-neutral-500 dark:text-neutral-300'>2020 - 2023</h1>
          </div>
        </div>
<div className='rounded-xl transition-all duration-300 shadow-sm lg:hover:shadow-md flex items-center gap-5 py-4 px-6 border border-neutral-300 dark:border-neutral-800 dark:bg-neutral-800'>
          <div>
            <Image src='https://res.cloudinary.com/dxgsqxdi3/image/upload/f_auto,q_auto/foxg3o3lqmhr7cvbmsyl' width={70} height={70} ></Image>
          </div>
          <div className='flex flex-col space-y-2'>
            <Link href='https://www.smkn5solo.sch.id/' target='_blank' className='md:text-md text-sm font-medium'>SMK Negeri 5 Surakarta</Link>
            <div className='flex flex-col lg:flex-row space-x-0 lg:space-x-2 font-light text-xs md:text-sm text-neutral-500 dark:text-neutral-300'>
              <h1>Vocational High School</h1>
              <h1 className='hidden md:flex'>•</h1>
              <h1 className='mt-1 md:mt-0'>Software and Game Development</h1>
            </div>
            <h1 className='font-light md:text-sm text-xs  text-neutral-500 dark:text-neutral-300'>2023 - 2026</h1>
          </div>
        </div>
    
        </>
  )
}
