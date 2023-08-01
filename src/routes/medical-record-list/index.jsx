//style

import * as C from './styles'


//components
import Toolbar from "../../components/Toolbar"
import SideMenu from "../../components/SideMenu"

import MedicalRecordList from "../../components/MedicalRecordList"


export default function Dashboard () {
  return (
    <>
    <section>
      <C.App>
        <SideMenu/>
      
        <C.Main>
          <Toolbar title="Listagem de Prontuários" />
          
         
          <C.ContentRecordList>
              
              <MedicalRecordList/>
          </C.ContentRecordList>

            
        </C.Main>
  
      
      
      </C.App>
      </section>
    </>
  )
}
