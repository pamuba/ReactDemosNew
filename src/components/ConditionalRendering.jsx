import React, { Component } from 'react'

export class ConditionalRendering extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: false
    }
  }
  render() {
    // if(this.state.isLoggedIn){
    //     return <div>Welcome Red</div>
    // }
    // else{
    //     return <div>Welcome Green</div>
    // }
    
//     return this.state.isLoggedIn ? 
//       (<div>Welcome Red</div>):
//       (<div>Welcome Green</div>)
//   }


   return this.state.isLoggedIn && <div>Welcome Red</div>
  }
}

export default ConditionalRendering