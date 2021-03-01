import React from 'react';
import './character.css'
class Character extends React.Component{
  render(){
    return(<div className="char-wrapper">
      <img src={this.props.image}></img>
    </div>)
  }
}

export default Character;