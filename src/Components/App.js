import React, { Component } from 'react';
import './styles/App.css';
import PlacaContainer from './PlacaContainer';

//We need create a store, Reducers and the action




const dados = {
  partida:{
    estadio : "Maracanã/RJ",
    data : "01/06/2016",
    horario: "19h",
  },

  casa:{
    nome: "Vasco",
  },
  visitante:{
    nome: "Flamengo",
  },


};

class App extends Component {
  render() {
    return (
      <div>
        <PlacaContainer {...dados}  />
      </div>

    );
  }
}

export default App;
