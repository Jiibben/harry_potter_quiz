import React from 'react';

class QuestionInput extends React.Component{
  render(){
    return(<div>
      <input onChange={this.props.handleChange}type="text"></input>
    </div>)
  }
}

export default QuestionInput;