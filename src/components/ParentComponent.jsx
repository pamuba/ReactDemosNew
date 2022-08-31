import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       parentName: "John Wick"
    }
    this.greetParent = this.greetParent.bind(this)
  }
  greetParent(){
    alert(`Hello ${this.state.parentName}`)
  }
  render() {
    return (
      <>
        <ChildComponent greetHandler={this.greetParent}/>
      </>
    )
  }
}

export default ParentComponent