import React, { Component } from 'react';

class Square extends Component {
    constructor(props){
        super(props);
        this.state = {
            color:''
        }
Square = ({ color }) => (
  <div style={{
    backgroundColor: color,
    height: '100px',
    width: '100px'
  }} />
)
}
render () {
    return (
      <div className='container' onClick = {
          (e) => {
              alert('Clicou no Quadrado')
          }
      }>
        {['blue', 'red', 'green', 'black'].map((square, index) => (
          <Square key={index} color={square} />
        ))}
      </div>
      )
    }
}

export default Square