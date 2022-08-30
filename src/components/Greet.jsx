import React from 'react'

const Greet = (props) => {
  return (
   <>
     <div>Hello James {props.name} aka {props.heroName}</div>
     <div>{props.children}</div>
   </>
  )
}

export default Greet