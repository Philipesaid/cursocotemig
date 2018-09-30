import React, { Component } from 'react';
import axios from 'axios';

class IteradorJsonBackEndAlunos extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts:[]
        }

        this.recuperarPosts = this.recuperarPosts.bind(this);
        this.exibirPosts = this.exibirPosts.bind(this);
    }

    recuperarPosts(){
        axios.get('https://jsonplaceholder.typicode.com/users/')
        .then(res => {
            const posts = res.data;
            this.setState({ posts});
        })
    }

    exibirPosts(){
        return (
            <ul>
                {
                    this.state.posts.map((item, indice) => {
                        return <li key = {indice}> <b>Nome : </b> { item.name} <b>Email:</b>{item.email})</li>
                    })
                }
            </ul>
        );
    }

    render (){
        let r = this.exibirPosts();
        return (
            <div>
                <hi> Acione o comando para recuperar dados</hi>
                <button type="button" onClick={this.recuperarPosts}>Ver dados</button>
                {r}
            </div>
        );
    }
}

export default IteradorJsonBackEndAlunos;