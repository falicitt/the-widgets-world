import React, { useState } from 'react'

import { addWidget, getWidgets } from '../apiClient'
// import Widgsets from './Widgets'

function AddWidget(props) {
  
  const [widget, setWidget] = useState({
    name: '',
    price: 0,
    mfg: '',
    inStock:0
  })

  const handleSubmit = (evt) => {
    evt.preventDefault() 
    
    addWidget(widget)
    .then(() => {
      props.refreshWidgets()
    })
    .then(() => {
      getWidgets()
    })
    .catch(err=> console.log(err))
  }

  const handleChange = (evt) => {
    setWidget({
      ...widget,
      [evt.target.name]: evt.target.value
    })
  }

  return (
    <>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input id='name' name='name' type='text' onChange={handleChange} />

        <label htmlFor='price'>Price:</label>
        <input id='price' name='price' type='number' onChange={handleChange} />

        <label htmlFor='mfg'>Mfg:</label>
        <input id='mfg' name='mfg' type='text' onChange={handleChange} />

        <label htmlFor='inStock'>Number In Stock:</label>
        <input id='inStock' name='inStock' type='number' onChange={handleChange} />


        <input type="submit" value="Submit"/>

      </form>
    </>
  )
}

export default AddWidget