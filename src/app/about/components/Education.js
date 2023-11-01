import SectionHeading from './../../commons/components/elements/SectionHeading';
import SectionSubHeading from './../../commons/components/elements/SectionSubHeading';
import EducationCard from './EducationCard'
import EDULISTS from '../../commons/constants/EducationList'
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
          <EducationCard />
    </div>
    
    </>
  )
}