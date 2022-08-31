import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={props.greetHandler}>ALERT</button>
    </div>
  )
}

export default ChildComponent