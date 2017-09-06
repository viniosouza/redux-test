import React, {Component} from 'react';
class BotaoGol extends Component{
    handlerClick(event){
        event.preventDefault();
       this.props.marcarGol();
    }

    refreshClick(event){
        event.preventDefault();
        this.props.refresh();
    }

    render(){
        return(
            <button onClick={this.handlerClick.bind(this)}>{this.props.botaoName.nome}</button>
            <button onClick={this.refreshClick.bind(this)}>{this.props.botaoRefresh.nome}</button>


        );
    }
}
export default BotaoGol;