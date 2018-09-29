import React, { Component } from 'react';

class IteradorJason extends Component{
    constructor(props){
        super(props);

    this.state={
        dados:[
            {nome: 'Philipe', idade: 30},
            {nome: 'Luisa', idade: 27},
            {nome: 'Pedro', idade: 29},
            ]
        }
    }
    exibirItens(){
        return(
            <ul>
                {
                    this.state.dados.map((item, indice) => {
                        return <li key={indice}>Nome: {item.nome} ({item.idade} anos)</li>
                    })
                }
            </ul>
        )
    }
    render(){
        return (this.exibirItens());
    }
}
export default IteradorJason;