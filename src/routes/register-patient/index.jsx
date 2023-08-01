import * as C from './styles'


//components
import Toolbar from "../../components/Toolbar"
import SideMenu from "../../components/SideMenu"
import RegisterFormPatient from "../../components/RegisterFormPatient"


//style




export default function Dashboard () {
  return (
    <>
    <section>
      <C.App>
        <SideMenu/>
      
        <C.Main>
          <Toolbar title="Cadastro de Paciente" />
          
          <C.Content>
              <RegisterFormPatient/>
              
          </C.Content>

         

           
        </C.Main>
  
      
      
      </C.App>
      </section>
    </>
  )
}
