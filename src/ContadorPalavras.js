import React, { Component } from 'react';


class ContadorPalavras extends Component {

    constructor(props){
        super(props);

        this.state ={
            contador:0
        };
        this.contarLetras = this.contarLetras.bind(this);
    }

    contarLetras (e){
        this.setState({
            contador: e.target.value.length
        });
    }
    render() {
      return (
        <div >
            <p>Escreva um texto : 
                <input type= "text" onChange = {this.contarLetras}/>
            </p>
            <p> Numero de Carateres : {this.state.contador}</p>
        </div>
      );
    }
  }
  
  export default ContadorPalavras;