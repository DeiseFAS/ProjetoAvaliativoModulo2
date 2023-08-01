import styled from 'styled-components'

export const App = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #efefef;
`

export const Main = styled.main`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  height: 100%;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  color: #666;
  flex: 1;
  width: 100%;
  padding: 10px;
`

export const ContentPatientsList = styled.section`
  background-color: #fff;
  color: #666;
  flex: 1;
  width: 100%;
  transition: all ease-in 0.3s;
  @media (max-width: 480px) {
      padding-bottom:100px
    }
  h2 {
    text-align: center;
    padding: 10px;
  }
  ul {
    display: flex;
    margin-top: 30px;
    flex-wrap: wrap;
    list-style: none;
    justify-content: space-between;
    @media (max-width: 480px) {
      justify-content:center
    }
    li {
      padding: 5px;
      border: 1px solid #e6e6e6;
      border-radius: 5px;
      box-shadow: 0 0 5px #aaa;
      margin: 10px;
      width: 300px;
      text-align: center;
      line-height: 1.5;
      font-size: 18px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      p {
        &.photo {
          font-size: 50px;
        }
      }
      a {
        display: block;
        background: #3c4b64;
        width: 100%;
        margin-top: 10px;
        padding: 5px;
        border-radius: 5px;
        box-shadow: 0 0 5px;
        color: #eee;
        text-decoration: none;
        &:hover{
          background: #4c5e7e;
        }
      }
    }
  }
`
