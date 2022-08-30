import React, { Component } from 'react'

export class Welcome extends Component {
  //state
  render() {
    // this.props.name = "New Name"
    return (
      <div>Hello {this.props.name} aka {this.props.heroName}</div>
    )
  }
}

export default Welcome