import React from "react"
// import { Link } from 'react-dom'

import { deleteWidget } from '../apiClient'

function Widgets(props) {

  const handleClick = (widgetId) => {
    // evt.preventDefault()

    deleteWidget(widgetId)
    .then(()=> props.refreshWidgets())
    // .then(()=> getWidgets())
    .catch(err=> console.log(err))
  }

  return (
    <>
      <h3>All Widgets</h3>
      <ol>
      {props.widgets.map(widget => 
      <li key={widget.id}>
        <h3>{widget.name}</h3>
        <p>price: ${widget.price}</p>
        <p>mfg: {widget.mfg}</p>
        <p>number in stock: {widget.inStock}</p>
        {/* <button onClick={() => deleteWidget(widget.id)}>Delete Widget</button> */}
          <button onClick={() => handleClick( widget.id )}>Delete Widget</button>
        </li>)}
       </ol>
    </>
  )
}

export default Widgets
