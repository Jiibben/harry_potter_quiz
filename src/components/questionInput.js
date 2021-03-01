import React from 'react';
import './questionInput.css'
class QuestionInput extends React.Component{
  render(){
    return(
      <input onChange={this.props.handleChange}type="text"></input>)
  }
}

export default QuestionInput;