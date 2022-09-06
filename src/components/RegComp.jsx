import React, { Component } from 'react'

export class RegComp extends Component {
  render() {
    console.log("========Regular Component===========")
    return (
      <div>
        Reg Component : {this.props.name}
      </div>
    )
  }
}

export default RegComp