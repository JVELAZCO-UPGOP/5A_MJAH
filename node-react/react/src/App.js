import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./componentes/Nav";
import './App.css';
import Pagina from "./Pagina";


function App() {
  return (
    <div className="container">
      <Nav />
      <Switch>

        <Route exact path="/" component={(props) => (<Pagina {...props} titulo="Mascotas" entidad="mascotas" />)} />
        <Route path="/veterinarias" component={(props) => (<Pagina {...props} titulo="Veterinarias" entidad="veterinarias" />)} />
        <Route path="/consultas" component={(props) => (<Pagina {...props} titulo="Consultas" entidad="consultas" />)} />
        <Route path="/duenos" component={(props) => (<Pagina {...props} titulo="Dueños" entidad="duenos" />)} />
      </Switch>
    </div>
  );
}

export default App;
