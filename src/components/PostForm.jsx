import React, { Component } from 'react'
import axios from 'axios'

export class PostForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userId : '',
       title:'',
       body:''
    }
  }
  chnageHandler = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }
  submitHandler = (e) => {
    e.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
        console.log(res);
        this.setState({
            userId:'',
            title:'',
            body:''
        })
    })
    .catch(err=>console.log(err.message))
  }
  render() {
    const {userId, title, body} = this.state
    return (
      <>
        <form onSubmit={this.submitHandler}>
            <div>
                <input type="text" name="userId" value={userId} onChange={this.chnageHandler}/>
            </div>
            <div>
                <input type="text" name="title" value={title} onChange={this.chnageHandler}/>
            </div>
            <div>
                <input type="text" name="body" value={body} onChange={this.chnageHandler}/>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
      </>
    )
  }
}

export default PostForm