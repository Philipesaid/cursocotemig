import React, { Component } from 'react';


class TextoConcatenado extends Component {
    
    constructor(props){
        super(props);
        
    }
  primeiraPalavra (event){
        this.setState({
            pPalavra: event.target.value
       });
    }
    segundaPalavra (event){
        this.setState({
            sPalavra: event.target.value
        });
    }
    render() {
      return (
        <div >
            
            <p>Escreva primeira palavra : 
                <input type= "text" onChangeText = {(priPalavra)=> this.setState(priPalavra)}/>
            </p>
            <p>Escreva segunda palavra : 
                <input type= "text" onChangeText = {(segPalavra)=> this.setState(segPalavra)}/>
            </p>
                
            <label>O texto completo e : </label><input type="text"  />
            
        </div>
      );
    }
  }
  
  export default TextoConcatenado;