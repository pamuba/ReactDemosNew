import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

export class ClickCounter extends Component {
  render() {
    const {  count, incrementCount} = this.props
    return (
      <button onClick={incrementCount}>Clicked {count}</button>
    )
  }
}

export default UpdatedComponent(ClickCounter)