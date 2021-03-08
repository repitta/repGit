import React from 'react';
import ReactDOM from 'react-dom';// forma de trabalhar com o browser
// se fosse utilizar para celular, seria react-native
import App from './App';

//essa função de desenha a tela
ReactDOM.render(
  // App é um componente
    <App />, // isso é jsx, é essa a sintaxe para utilizar html dentro do javascript
   document.getElementById('root') // buscar do html um elemento que tem um id root e dentro dele, coloca essa código htlm, que sã componentes do React
);


