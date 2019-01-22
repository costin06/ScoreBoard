import React, { Component } from 'react';

class StopWatch extends Component {
  
  state = {
     totalTime:0,
     isRunning:false  
  }

  handleStart = ()=>{    

      if(this.state.isRunning===false){

        this.setState(
          {isRunning: false }
          );
    
      }
      else if(this.state.isRunning===true){

        this.setState({isRunning:true});
      }
    

  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  tick(){

    this.setState({totalTime:this.state.totalTime+1})
  }

  componentWillUnmount(){
    clearInterval(this.timerID);

  }

  render() { 
   
   
    return (  
   
      <div className="stopwatch">
      <h2>Stopwatch</h2>
      <span className="stopwatch-time">0</span>
      <button onClick= {this.handleStart } >{this.state.isRunning?"Stop":"Start"}</button> 
      <button>Reset</button>
    </div>


    );
  }
}
 
export default StopWatch;