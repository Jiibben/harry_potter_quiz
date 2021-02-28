import React from 'react';

class Character extends React.Component{
  render(){
    return(<div>
      <h3>{this.props.name}</h3>
      <img src={this.props.image}></img>
    </div>)
  }
}

export default Character;