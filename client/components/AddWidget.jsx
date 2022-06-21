import { text } from 'express'
import React, { useState } from 'react'

import { addWidget } from '../apiClient'

function AddWidget (props) {
  const [widget, setWidget] = useState({})

  const handleSubmit = (evt) => {
    evt.preventDefault()

    const newWidget = {
      widgetName,
      // price,
      mfg,
      // inStock
    }

    addWidget(newWidget)
    .then(() => {
      props.refreshWidget()
    })
  }

  return (
    <>
      <p>Name: {widgetName}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input id='name' type='text' onChange={(evt) => setWidget(evt.target.value)} />

        {/* <label htmlFor='price'>Price:</label>
        <input id='price' type={number} onChange={(evt) => setWidget(evt.target.value)} /> */}

        <label htmlFor='mfg'>Mfg:</label>
        <input id='mfg' type='text' onChange={(evt) => setWidget(evt.target.value)} />

        {/* <label htmlFor='inStock'>In Stock:</label>
        <input id='inStock' type={number} onChange={(evt) => setWidget(evt.target.value)} /> */}

      </form>
    </>
  )
}

export default AddWidget