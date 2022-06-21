import React from "react"
// import { Link } from 'react-dom'

function Widgets(props) {

  return (
    <>
      <h3>All Widgets</h3>
      <ul>
      {props.widgets.map(widget => <li key={widget.id}>{widget.name}</li>)}
       </ul>
    </>
  )
}

export default Widgets
