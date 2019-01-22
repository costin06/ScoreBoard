import React, { Component } from 'react';


class Counter extends Component {
   
    render() { 
        return (
        <div className="counter">
        <button onClick={() => this.props.changeScore(this.props.id,'decrement')} className="counter-action decrement">-</button>
        <span className="counter-score">{this.props.score}</span>
        <button onClick={() => this.props.changeScore(this.props.id,"increment")} className="counter-action increment">+</button>
      </div> );
    }
}
 
export default Counter;