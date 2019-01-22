import React, { Component } from 'react';

class Stats extends Component {
    state = {  }
    render() { 
        let totalScore = 0;
    this.props.playersTot.forEach(el=> {
      totalScore += el.score;
    });
        return ( 
            <table className="stats">
              <tbody>
                <tr>
                  <td>Players:</td>
                  <td>{this.props.players}</td>
                </tr>
                <tr>
                  <td>Total Points:</td>
                  <td>{totalScore}</td>
                </tr>
              </tbody>
            </table> );
    }
}
 
export default Stats;