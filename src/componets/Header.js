import React, { Component } from 'react';
import Stats from "./Stats";
import StopWatch from './StopWatch';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 

            name:''
         }
    }
    render() { 
        return ( 
            <header>
                <Stats
                players={this.props.players}
                playersTot={this.props.playersTot}
                />
                
            <h1>Scoreboard</h1>

            <StopWatch/>

          </header>

         );
    }
}
 
export default Header ;