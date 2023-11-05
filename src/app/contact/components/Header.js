import SectionHeading from '@/app/commons/components/elements/SectionHeading'
import SectionSubHeading from '@/app/commons/components/elements/SectionSubHeading'
import React from 'react'

function Header() {
  return (
    <div className='space-y-6'>
      <div className='space-y-2'> 
      <SectionHeading title={'Contact'}/>
      <SectionSubHeading>
        <p>Lets get in touch.</p>
      </SectionSubHeading>
      </div>
    </div>
  )
}

export default Header