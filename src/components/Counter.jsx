import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }

      this.incrementFive = this.incrementFive.bind(this)
    }
  increment(){
    // this.setState({
    //     count: this.state.count + 1
    // }, ()=> {console.log('Callback:',this.state.count)})
    
    // console.log(this.state.count)



    this.setState(prevState => ({
        count: prevState.count + 1
    }), ()=> {console.log('Callback:',this.state.count)})
    
    console.log(this.state.count)
  }
  incrementFive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }
  render() {
    return (
      <>
        <div>Counter:{this.state.count}</div>
        <button onClick={()=> this.increment()}>Increment</button>
        <button onClick={()=> this.incrementFive()}>Increment5</button>
        <button onClick={this.incrementFive.bind(this)}>Increment5</button>
        <button onClick={this.incrementFive}>Increment5</button>
      </>
    )
  }
}

export default Counter