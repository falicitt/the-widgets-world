import React, { useState } from 'react'

import { deleteWidget, getWidgets } from '../apiClient'

function DeleteWidget(props) {

  const [ widgetName, setWidgetName ] = useState('')

  const handleChange = (evt) => {
    setWidgetName(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()

    deleteWidget(widgetName)
    .then(()=> props.refreshWidgets())
    .then(()=> getWidgets())
    .catch(err=> console.log(err))
  }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Widget Name:</label>
        <input id='name' name='name' type='text' onChange={handleChange} />
        <input type="submit" value="Delete"/>
    </form>
  )
}

export default DeleteWidget