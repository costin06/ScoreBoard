import React, { Component } from 'react';
class AddPlayer extends Component {
    state = { 
        value:''
     }

     handleChange2 = (event) => {
        this.setState(  
             {value: event.target.value}
        );

     }

     handleSubmit=(event)=>{
        event.preventDefault();
        this.props.addPlayer(this.state.value);
        this.setState({value:""})

      }
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
            
            <input type='text' onChange={this.handleChange2} name="ddd" value={this.state.value}></input>
            <input type='submit' value="Add Player"></input>
        
            </form>
         );
    }
}
 
export default AddPlayer;