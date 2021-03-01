import React from 'react';
import './counter.css'
class Counter extends React.Component{
  render(){
    return(
    <div className="counter">
        <ul>
            <li>Score: {this.props.right}/{this.props.total}</li>
            <li>Left:  {this.props.total - this.props.wrong -this.props.right}</li>
        </ul>
    </div>)
  }
}

export default Counter;