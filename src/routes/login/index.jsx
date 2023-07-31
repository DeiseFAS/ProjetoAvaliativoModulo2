import React, { useState } from 'react';
import * as C from './styles';
import ImageGraphic from '../../assets/imgs/graphic.png';
import LoginForm from '../../components/LoginForm';

import { Navigate, redirect } from 'react-router-dom';

export default function Login() {

  return (
    <>
      <section>

        <C.Container>
          <C.Content>
            <C.ContentLeftLogin>
              <img src={ImageGraphic} className="grafico" alt="Gráfico" />
            </C.ContentLeftLogin>
            <C.ContentRightLogin>
              <LoginForm />
            </C.ContentRightLogin>
          </C.Content>
        </C.Container>
      </section>
    </>
  );
}
