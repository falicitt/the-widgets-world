import React, { useState } from "react"

import UpdateWidget from "./UpdateWidget"

import { deleteWidget } from '../apiClient'

function Widgets(props) {

  //function to delete widget
  const handleDelete = (widgetId) => {
    deleteWidget(widgetId)
    .then(()=> props.refreshWidgets())
    .catch(err=> console.log(err))
  }

  //function to update widget
  const [activeIndex, setActiveIndex] = useState(null)

  const handleClick = (i)=>{ setActiveIndex(i) }

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
     
        <button onClick={() => handleDelete(widget.id)}>Delete Widget</button>
        <button onClick={() => handleClick(widget.id)}>Update Widget</button>
        {activeIndex === widget.id ? <UpdateWidget id={widget.id} /> : ''}
        
        </li>)}
       </ol>
    </>
  )
}

export default Widgets
