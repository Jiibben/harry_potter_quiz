import React from 'react';
import './next.css'
class Next extends React.Component{
  render(){
    return(<button className="next" onClick={() => this.props.handleClick()}>-></button>)
  }
}

export default Next;