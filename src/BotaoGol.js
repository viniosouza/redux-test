import React, {Component} from 'react';
class BotaoGol extends Component{
    handlerClick(event){
        event.preventDefault();
       this.props.marcarGol();
    }

    render(){
        return(
            <button onClick={this.handlerClick.bind(this)}>Gol!</button>
        );
    }
}
export default BotaoGol;