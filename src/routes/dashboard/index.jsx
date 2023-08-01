//style
import * as C from './styles'



//components
import Toolbar from "../../components/Toolbar"
import SideMenu from "../../components/SideMenu"
import PatientsList from "../../components/PatientsList"

import PatientsCounter from "../../components/PatientsCounter"
import ConsultsCounter from "../../components/ConsultsCounter"
import ExamsCounter from "../../components/ExamsCounter"







export default function Dashboard () {
  return (
    <>
    <section>
      <C.App>
        <SideMenu/>
      
        <C.Main>
          <Toolbar title="Estatísticas e Informações" />
          
          <C.Content>
              <h2>Estatísticas do Sistema</h2>
              
          </C.Content>

          <C.Content>
              <PatientsCounter/>
              <ConsultsCounter/>
              <ExamsCounter/>
              
          </C.Content>

          <C.ContentPatientsList>
              
              <PatientsList/>
          </C.ContentPatientsList>

           
        </C.Main>
  
      
      
      </C.App>
      </section>
    </>
  )
}
