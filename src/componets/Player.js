import React, { Component } from "react";
import Counter from "./Counter";

import Icon from "./Icon"


class Player extends Component {
  render() {
    console.log(this.props.isHighScore());

    return (
      <div className="player">
        <span className="player-name">

      <Icon myfunc={ ()=>{

if(this.props.isHighScore==true){return "is-high-score"};
      }
        
                    


      }/>
          <button onClick={() => this.props.myMeth(this.props.id)} className="remove-player">✖</button>
          {this.props.playerName}
        </span>
        <Counter 
            score={this.props.score} 
            id={this.props.id}
            changeScore={this.props.changeScore} 
            />
      </div>
    );
  }
}

export default Player;
