import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  place-items: center;
  min-height: 100vh;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ContentLeftLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 50%;
  img {
    margin-left: auto;
  }
`

export const ContentRightLogin = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #aaa;
  margin-left: 10px;
  @media (max-width: 480px) {
    border-left: none;
  }
  h2 {
    color: #333;
    font-weight: 300;
    margin-bottom: 15px;
  }
  form {
    div {
      label {
        display: block;
        font-size: 12px;
        font-weight: 300;
        color: #333;
        margin: 10px 0 5px;
      }
      input {
        width: 100%;
        padding: 6px;
        border: 1px solid #aaa;
        font-size: 14px;
        border-radius: 5px;
      }
    }
    button[type='submit'] {
      margin-top: 15px;
      width: 100%;
      padding: 8px;
      border: none;
      background: #29d9c7;
      color: #fff;
      font-weight: 300;
      cursor: pointer;
      border-radius: 5px;
      &:hover {
        background: #112959;
      }
    }
  }
  .reset {
    a {
      color: #aaa;
      font-size: 12px;
      display: block;
      text-align: center;
      margin: 10px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .create {
    margin-top: 40px;
    @media (max-width: 480px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    span {
      font-size: 12px;
      margin-right: 10px;
    }
    button {
      border: 1px solid #112959;
      background: none;
      padding: 5px;
      color: #166275;
      border-radius: 5px;
      &:hover {
        background: #29d9c7;
        color: #fff;
      }
    }
  }
`
