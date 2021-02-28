import React from 'react';

class Submit extends React.Component{
  render(){
    return(<button  onClick={() => this.props.handleClick()} disabled={this.props.state}>Submit</button>)
  }
}

export default Submit;