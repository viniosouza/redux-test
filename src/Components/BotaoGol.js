import React, { Component } from 'react';

class BotaoGol extends Component {
    handlerClick(event) {
        event.preventDefault();
        this.props.marcarGol();
    }

    refreshClick(event) {
        event.preventDefault();
        this.props.refresh();
    }

    render() {
        return (

            <div>
                {/* //I can't build a button without have a div */}
                <button onClick={this.handlerClick.bind(this)}>Gol!</button>

            </div>
        );
    }

}

export default BotaoGol;