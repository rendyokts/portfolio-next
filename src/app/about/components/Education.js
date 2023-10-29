import SectionHeading from './../../commons/components/elements/SectionHeading';
import SectionSubHeading from './../../commons/components/elements/SectionSubHeading';
import { TbSchool } from "react-icons/tb";
import Image from 'next/image'
import Link from 'next/link'

export default function Education() {
  return (
    <>
    <div className='space-y-6'>
      <div className='space-y-2 '>
        <SectionHeading title='Education' icon={<TbSchool className='mr-1'/>}/>
        <SectionSubHeading>
          <p>My educational journey.</p>
        </SectionSubHeading>
      </div>
      <div className='rounded-xl transition-all duration-300 shadow-sm lg:hover:shadow-md flex items-center gap-5 py-4 px-6 border border-neutral-300 dark:border-neutral-800 dark:bg-neutral-800'>
          <div>
            <Image src='https://res.cloudinary.com/dxgsqxdi3/image/upload/f_auto,q_auto/foxg3o3lqmhr7cvbmsyl' width={70} height={70} ></Image>
          </div>
          <div className='flex flex-col space-y-2'>
            <Link href='https://www.smkn5solo.sch.id/' target='_blank' className='text-md font-medium'>SMK Negeri 5 Surakarta</Link>
            <div className='flex flex-col lg:flex-row space-x-0 lg:space-x-2 font-light text-xs md:text-sm text-neutral-500 dark:text-neutral-300'>
              <h1>Vocational High School</h1>
              <span className='hidden lg:flex'>•</span>
              <h1>Software and Game Development </h1>
            </div>
            <h1 className='font-light text-sm  text-neutral-500 dark:text-neutral-300'>2023 - 2026</h1>
          </div>
        </div>
    </div>
    
    </>
  )
}