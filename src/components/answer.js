import React from 'react';
import './answer.css'
class Answer extends React.Component{
  render(){
    return(<div className="rep">{this.props.text}</div>)
  }
}

export default Answer;
