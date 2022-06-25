import React, { useState } from 'react'

import { updateWidget, getWidgets } from '../apiClient'

function UpdateWidget(props) {

  const [widget, setWidget] = useState({
    name: '',
    price: 0,
    mfg: '',
    inStock:0
  })

  const handleChange = (evt) => {
    setWidget({
      ...widget,
      [evt.target.name]: evt.target.value
    })
  }

  const handleSubmit = (id) => {
    
    updateWidget(id, widget)
    .then(() => {
      getWidgets()
    })
    .catch(err=> console.log(err))
  }

  return (
    <form onSubmit={handleSubmit(props.id)}>
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
  )
}

export default UpdateWidget