import React, { Component } from 'react';


class Contador extends Component {

    constructor(props){
        super(props);

        this.state ={
            contador:0
        };
        this.acionar = this.acionar.bind(this);
    }

    acionar (){
        this.setState({
            contador: this.state.contador + 1
        });
    }
    render() {
      return (
        <div >
            <h1>O comando foi acionado {this.state.contador}  vezes</h1>
            <button type="button" onClick={this.acionar}>Clique Aqui !!!!!!</button>
        </div>
      );
    }
  }
  
  export default Contador;