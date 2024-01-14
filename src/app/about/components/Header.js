import SectionHeading from './../../commons/components/elements/SectionHeading';
import SectionSubHeading from './../../commons/components/elements/SectionSubHeading';
export default function Header() {
  return (
    <>
    <div className='space-y-6'>
      <div className='space-y-2'>
        <SectionHeading title='About' />
        <SectionSubHeading>
          <p className='text-md dark:text-neutral-400'>A short story of me, not important but seem better than nothing.</p>
        </SectionSubHeading>
      </div>
      <div className='border-b border-dashed border-neutral-600 dark:border-neutral-500'></div>
      <p className='font-light text-md leading-7'>
        Hi, my name is Rendi, also known as Rendi, is an aspiring front-end developer with just one month of experience. He has shown dedication and a 
        keen ability to master various web frameworks. Rendi's journey began with a solid foundation in HTML, CSS, and JavaScript, enabling 
        him to create basic web pages and delve into popular frameworks like TailwindCSS, React, and Angular.</p>
      <p className='font-light text-md leading-7'>
        What distinguishes Rendi is his quick adaptability to new challenges, making him a promising front-end developer. Despite his limited
        experience, he actively seeks resources and tutorials to stay up-to-date with web development's evolving landscape. Rendi's dedication
        and versatility mark him as a valuable addition to any web development team, and his journey has just begun. He's on the path to
        becoming a skilled professional adept at using a wide range of web frameworks.</p>
      <p className='font-light text-md leading-7'>
        I stay current with industry trends and best practices to provide innovative solutions that surpass company expectations. My strong 
        problem-solving skills and attention to detail drive innovation in every project I handle.</p>
    </div>
    </>
  )
}