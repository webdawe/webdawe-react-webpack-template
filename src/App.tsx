import React from 'react';
import './styles.css';
import IMAGE from '../public/logo.png';
import { ClickCounter } from './ClickCounter';
export const App: React.FC = () => {
  return (
    <>
      <h1>React Typescript Template {process.env.NODE_ENV}</h1>
      <img src={IMAGE} width='100'></img>
      <ClickCounter />
    </>
  );
};
