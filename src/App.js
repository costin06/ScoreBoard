import React, { Component } from "react";
import "./App.css";
import Player from "./componets/Player";
import { PLAYERS } from "./shared/players";
import Header from "./componets/Header";
import AddPlayer from "./componets/AddPlayer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: PLAYERS
     };
  }




  removePlayer = e => {
    this.setState(prevState => ({
      players: prevState.players.filter(item => item.id !== e)
    }));
  };

  handleScoreChange = (index, direction) => {
    if (direction === "decrement") {
      this.setState({
        players: this.state.players.map(item => {
          if (item.id === index) {
            item.score -= 1;
          }
          return item;
        })
      });
      console.log("decr");
    } else if (direction === "increment") {
      this.setState({
        players: this.state.players.map(item => {
          if (item.id === index) {
            item.score += 1;
          }
          return item;
        })
      });
      console.log("incr");
    }
  };

  addPlayer=(name)=>{
    //gerenereaza un id nou,mai mare cu 1 fata de cel mai mare id existent
    const uniqueId=()=>1+Math.max(...this.state.players.map(player=>player.id));
    this.setState(prevState=>( 
      { players: [...prevState.players, {name:name, id:uniqueId(), score: 0}] }
      )
    )
  }; 





  render() {
    var largest= 0;

    const myPlayers=this.state.players;
   

  const max= Math.max.apply(Math, myPlayers.map(function(o) { return o.score; }))
    console.log(max);


    return (
      <div className="App">
        <Header
         players={ this.state.players.length} 
         playersTot={this.state.players}
         
         />

        {this.state.players.map((el, index) => (
          <Player
            key={el.id.toString()}
            playerName={el.name}
            id={el.id}
            score={el.score}
            idx={index}
            changeScore={this.handleScoreChange}
            myMeth={this.removePlayer}
            isHighScore={ ()=>{if(el.score===max&&el.score<0)return true;}
              

            }
          />
        ))}

        <AddPlayer 
         addPlayer={this.addPlayer}
         />
      </div>
    );
  }
}

export default App;
