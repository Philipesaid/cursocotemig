import React, { Component } from 'react';


class TextoConcatenado extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            lName: '',
            fName: '',
        };
        this.handleFNameChange = this.handleFNameChange.bind(this)
        this.handleLNameChange = this.handleLNameChange.bind(this)
    }
    
        handleFNameChange(event){
        this.setState({fName: event.target.value});
}
 
        handleLNameChange(event){
        this.setState({lName: event.target.value});
}
    
    render() {
      return (
        <div >
            
            <p>Seu Primeiro Nome : <input type="text" value = {this.state.fName} onChange={this.handleFNameChange} /></p>
            <p> Seu Segundo Nome : <input type="text" value = {this.state.lName} onChange={this.handleLNameChange} /></p>
            <h3>Your full name is </h3> {this.state.fName} {this.state.lName}
        </div>
      )
    }
  }
  
  export default TextoConcatenado;