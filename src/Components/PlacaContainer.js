import React, { Component } from 'react';
import Time from './Time';
import Partida from './Partida';


class PlacaContainer extends Component {
    constructor() {
        super();
        this.state = {
            gols_casa: 0,
            gols_visitante:0,
        };
    }

    marcarGolCasa(){
        this.setState({
            gols_casa: this.state.gols_casa + 1
        });
    }

    marcarGolVisitante(){
        this.setState({
        gols_visitante: this.state.gols_visitante + 1
    });

}
    refresh(){
        this.setState({
            gols_casa: this.state.gols_casa = 0,
            gols_visitante: this.state.gols_visitante = 0,

        });
    }


    render() {
        // Estração de dados

        const { partida, casa, visitante} = this.props;
        const estilo = {float: "left", "marginRight":"20px"};

        return (
            <div>
                <div style={estilo}>
                    <h3>Casa</h3>
                    <Time nome={casa.nome } gols={this.state.gols_casa} marcarGol={this.marcarGolCasa.bind(this)} />
                </div>
                <div style={estilo}>
                  <Partida {...partida} />
                </div>

                <div style={estilo}>
                    <h3>Visitantes</h3>
                    <Time nome={visitante.nome} gols={this.state.gols_visitante} marcarGol={this.marcarGolVisitante.bind(this)} />
                </div>
                <div>{this.props.clima}</div>
                <div style={{clear: "both"}}></div>
            </div>
        );
    }
}


//Propriedades que eu sou obrigado a passar

PlacaContainer.propTypes = {
   clima: React.PropTypes.string,
   tempo: React.PropTypes.string,


};

PlacaContainer.defaultProps = {
    clima: 'Ensolado',

};
export default PlacaContainer;