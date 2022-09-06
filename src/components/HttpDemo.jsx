import React, { Component } from 'react'
import axios from 'axios'

export class HttpDemo extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts: []
    }
  }
  componentDidMount(){
    // axios is a promise based library
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
        })
        .catch(err=>console.log(err.message))
  }
  render() {
    return (
      <div>
        Lists of Posts:
      </div>
    )
  }
}

export default HttpDemo