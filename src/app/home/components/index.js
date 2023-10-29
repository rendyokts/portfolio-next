import { Divider } from "@nextui-org/react";
import HeaderHome from './Head'
import Career from './Career'
import SkillLists from './SkillList'
import ContainerAOS from './../../commons/components/elements/ContainerAOS';

export default function Index() {
  return(
    <ContainerAOS>
      <div className='h-full'>
      <HeaderHome/>
      <Divider orientation='horizontal' className='my-4'/>
      <Career/>
      <Divider orientation='horizontal' className='my-4'/>
      <SkillLists/>
    </div>
    </ContainerAOS>
    
  )
}