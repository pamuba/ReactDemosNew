import React, { Component } from 'react'
import axios from 'axios'

export class HttpDemo extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts: [],
       errMesage :''
    }
  }
  componentDidMount(){
    // axios is a promise based library
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            this.setState({
                posts: res.data
            })
        })
        .catch(err=>this.setState({errMesage:err.message}))
  }
  render() {
    const {posts, errMesage} = this.state
    return (
      <div>
        Lists of Posts:
        {
            posts.length ? 
            posts.map(post => <div key={post.id}>{post.title}</div>):
            errMesage
        }
      </div>
    )
  }
}

export default HttpDemo