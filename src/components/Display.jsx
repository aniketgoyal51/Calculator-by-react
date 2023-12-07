import React from 'react'

const Display = (props) => {

  return (
    <div>
        <input type="text" defaultValue={props.name}/>
    </div>
  )
}

export default Display