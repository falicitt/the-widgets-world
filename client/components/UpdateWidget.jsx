import React, { useState } from 'react'

import { updateWidget, getWidgets } from '../apiClient'

function updateWidget(props) {



  return (
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
  )
}