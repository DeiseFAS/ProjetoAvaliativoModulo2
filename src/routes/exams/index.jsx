import * as C from './styles'


//components
import Toolbar from "../../components/Toolbar"
import SideMenu from "../../components/SideMenu"
import ExamsForm from "../../components/ExamsForm"


export default function Dashboard () {
  return (
    <>
    <section>
      <C.App>
        <SideMenu/>
      
        <C.Main>
          <Toolbar title="Cadastro de exame" />
          
         

          <C.Content>
              
              <ExamsForm/>
          </C.Content>

            
        </C.Main>
  
      
      
      </C.App>
      </section>
    </>
  )
}
