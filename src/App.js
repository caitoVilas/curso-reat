import React from "react";
import logo from './logo.svg';
import './App.css';
import Componente from './Components/componente'
import Propiedades from "./Components/Propiedades";
import Estado from "./Components/Estado";
import RenderizadoCondicional from "./Components/RenderizadoCondicional";
import RenderizadoElementos from "./Components/RenderizadoElementos";
import Eventos from "./Components/Eventos";
import EventosAutoBinding from "./Components/EventosAutoBinding";
import MasSobreEventos from "./Components/MasSobreEventos";
import ComunicacionComponentes from "./Components/ComunicacionComponentes";
import CicloVida from "./Components/CicloVida";
import AjaxApis from "./Components/AjaxApis";
import ContadorHooks from "./Components/ContadorHooks";
import ScroolHooks from "./Components/ScroolHooks";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <section><Componente msg="Hola soy un componente desde una prop"></Componente>
      <br></br>
      <hr></hr>
      <Propiedades
        cadena = "Esto es una cadena de texto"
        numero = {19}
        booleano = {true}
        arreglo = {[1,2,3]}
        objeto = {{nombre : "Caito", correo: "caitocd@gmail.com"}}
        elemento = {<i>Esto es un elemento react</i>}
        funcion = {(num) => num * num}
        componenteReact = {<Componente msg="Soy un componente pasado como props"></Componente>}
      ></Propiedades>
      <br></br>
      <hr></hr>
      <Estado></Estado>
      <br></br>
      <hr></hr>
      <RenderizadoCondicional></RenderizadoCondicional>
      <br></br>
      <hr></hr>    
      <RenderizadoElementos></RenderizadoElementos>
      <br></br>
      <hr></hr>
      <Eventos />
      <br></br>
      <hr></hr>
      <EventosAutoBinding />
      <br></br>
      <hr></hr>
      <MasSobreEventos />
      <br></br>
      <hr></hr>
      <ComunicacionComponentes />
      <br></br>
      <hr></hr>
      <CicloVida />
      <br></br>
      <hr></hr>
      <AjaxApis />
      <br></br>
      <hr></hr>
      <ContadorHooks />
      <br></br>
      <hr></hr>
      <ScroolHooks />
      <br></br>
      <hr></hr>
      </section>
      </header>
    </div>
  );
}

export default App;
