import { Divider } from "@nextui-org/react";
import HeaderHome from './Head'
import Career from './Career'
import SkillLists from './SkillList'
import ContainerAOS from './../../commons/components/elements/ContainerAOS';

export default function Index() {
  return(
    <ContainerAOS>
      <div className='h-full md:h-screen'>
      <HeaderHome/>
      <Divider orientation='horizontal' className='my-4'/>
      <Career/>
      <Divider orientation='horizontal' className='my-4'/>
      <SkillLists/>
      <Divider orientation='horizontal' className='my-4'/>
    </div>
    </ContainerAOS>
    
  )
}