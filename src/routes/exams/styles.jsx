import styled from 'styled-components'

export const App = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #efefef;
`;

export const Main = styled.main`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  height: 100%;
`;

export const Content = styled.div`
 
  background-color: #fff;
  color: #666;
  flex: 1;
  width: 100%;
`

export const ContentPatientsList = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  color: #666;
  flex: 1;
  width: 100%;
  transition:all ease-in .3s;
  ul{
    display:flex;
    margin-top:30px;
    flex-wrap: wrap;
    list-style:none;
    li{
      padding: 5px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    box-shadow: 0 0 5px #AAA;
    margin: 10px;
    width:300px
    }
  }
`

export const Footer = styled.footer`
  height: 50px;
  background-color: grey;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;