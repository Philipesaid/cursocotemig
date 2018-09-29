import React, { Component } from 'react';


class TextoConcatenado extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            nome: '',
            sobrenome: '',
            
        };
        this.pNome = this.pNome.bind(this)
        this.sNome = this.sNome.bind(this)
        
    }
    
        pNome(e){
        this.setState({nome: e.target.value});
}
 
        sNome(e){
        this.setState({sobrenome: e.target.value});
}
   
    render() {
      return (
        <div >
            
            <p>SeunNome : <input type="text" value = {this.state.nome} onChange={this.pNome}/></p>
            <p> Seu Sobrenome : <input type="text" value = {this.state.sobrenome} onChange={this.sNome}/></p>
            <h3>Seu Nome Completo é : </h3> <label>{this.state.nome} {this.state.sobrenome} </label>
            
        </div>
      )
    }
  }
  
  export default TextoConcatenado;