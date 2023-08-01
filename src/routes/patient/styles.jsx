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
  @media (max-width: 480px) {
    padding-bottom:100px
  }
`;

export const Content = styled.div`
  
  background-color: #fff;
  color: #666;
  flex: 1;
  width: 100%;
`
