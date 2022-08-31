import React, { Component } from 'react'

export class StateDemo extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Welcome James'
    }
  }
  changeMessage(){
    this.setState({
      message: "Good Morning James"
    })
  }
  render() {
    return (
      <>
         Message: {this.state.message}
         <button onClick={()=>this.changeMessage()}>CHANGE</button>
      </>
    )
  }
}

export default StateDemo