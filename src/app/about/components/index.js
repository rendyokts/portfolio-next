import { Divider } from "@nextui-org/react";
import ContainerAOS from './../../commons/components/elements/ContainerAOS';
import Header from './Header'
import Education from './Education'

export default function Index() {
  return(
    <ContainerAOS>
      <div className='h-full md:h-screen'>
        <Header/>
      <Divider orientation='horizontal' className='my-4'/>
        <Education/>
      </div>
    </ContainerAOS>
  )
}