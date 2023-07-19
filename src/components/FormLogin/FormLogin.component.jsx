import {Form} from "./FormLogin.style"

export const FormLoginComponent = () => {
  return (
    <>
      <Form>
        <div>
          <label htmlFor="">E-mail</label>
          <input type="email" />
        </div>
        <div>
          <label htmlFor="">Senha</label>
          <input type="password" />
        </div>

        <button type="submit">Emtrar</button>
      </Form>
    </>
  )
}