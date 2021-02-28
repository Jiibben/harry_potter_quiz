import React from 'react';

class Next extends React.Component{
  render(){
    return(<button onClick={() => this.props.handleClick()}>pass</button>)
  }
}

export default Next;