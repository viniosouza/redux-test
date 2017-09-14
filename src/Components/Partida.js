import React, {Component} from 'react';

class Partida extends Component{
    render(){
        return(
          <div>
              {/* Estatic */}
              <h2>Estádio</h2>
              <div>
                  <span>{this.props.data}</span>
                  <span>-</span>
                  <span>{this.props.horario}</span>
              </div>
          </div>  
        );
    }

}

export default Partida;