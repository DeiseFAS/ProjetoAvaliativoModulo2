import * as C from './styles'


//components
import Toolbar from "../../components/Toolbar"
import SideMenu from "../../components/SideMenu"
import PatientDetails from "../../components/PatientDetails"


export default function Dashboard () {
  return (
    <>
    <section>
      <C.App>
        <SideMenu/>
      
        <C.Main>
          <Toolbar title="Informações do Paciente" />
          
         

          <C.Content>
              
              <PatientDetails/>
          </C.Content>

           
        </C.Main>
  
      
      
      </C.App>
      </section>
    </>
  )
}
