import React, { Component } from 'react';
import axios from 'axios';

class IteradorJsonBackEnd extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts:[]
        }

        this.recuperarPosts = this.recuperarPosts.bind(this);
        this.exibirPosts = this.exibirPosts.bind(this);
    }

    recuperarPosts(){
        axios.get('https://jsonplaceholder.typicode.com/posts/')
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
                        return <li key = {indice}> <b>Titulo : </b> { item.title}</li>
                    })
                }
            </ul>
        );
    }

    render (){
        let r = this.exibirPosts();
        return (
            <div>
                <hi> Acione o comando para recuperar os posts</hi>
                <button type="button" onClick={this.recuperarPosts}>Ver posts</button>
                {r}
            </div>
        );
    }
}

export default IteradorJsonBackEnd;