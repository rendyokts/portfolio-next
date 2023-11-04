'use client'
import ProjectCard from './ProjectCards'
import DashedDivider from "@/app/commons/components/elements/DashedDivider";
import SectionHeading from "@/app/commons/components/elements/SectionHeading";
import SectionSubHeading from "@/app/commons/components/elements/SectionSubHeading";



export default function ProjectsLists() {
  return (
    <div className=''>
      <div className='space-y-6'>
    <div className='space-y-2'>
      <SectionHeading title='Projects'/>
      <SectionSubHeading>
        <p className='dark:text-neutral-400'>Showcasing my passion for technology, design, and problem-solving through code.</p>
      </SectionSubHeading>
    </div>
    <DashedDivider />
      <div
    className='grid sm:grid-cols-2  justify-center gap-5 mb-10'>
      <ProjectCard/>
    </div>
  </div>
    </div>
  
    
  )
}