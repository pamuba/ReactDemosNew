import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

export class HoverCounter extends Component {
  render() {
    const {  count, incrementCount} = this.props
    return (
        <h2 onMouseOver={incrementCount}>Clicked {count}</h2>
      )
  }
}

export default UpdatedComponent(HoverCounter)