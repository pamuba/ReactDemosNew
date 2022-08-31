import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username:''
    }
  }
  handleChangeUserName = (event) => {
    this.setState({
        username: event.target.value
    })
  }
  render() {
    return (
        <form>
            <>
            <label>User Name</label>
            <input type="text" 
            value={this.state.username}
            onChange={this.handleChangeUserName}
            />
            <button onClick={()=>{alert(`USername:${this.state.username}`)}}>CLICK</button>

            {/* Textarea, dropdown, radio buttons */}
            </>
        </form>
    )
  }
}

export default Form