import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//Importar Componentes

import MiComponente from "./components/MiComponente";
import Estadisticas from "./components/Estadisticas";

function HolaMundo(nombre){
var presentacion=(
  <div>
    <h2>"Hello there, I'm {nombre}"</h2>
    <h3>No se que decir equis de</h3>
  </div>
    
)
  return presentacion;
}

function App() {  
  var nombre="Javier de Jesus"
  return (
    <div className="App">
       {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {HolaMundo(nombre)}
  </header>*/}
      <section className="componentes">
        <Estadisticas></Estadisticas>
      </section>
    </div>
  );
}

export default App;
