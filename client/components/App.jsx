/* eslint-disable promise/catch-or-return */
import React, { useState, useEffect } from 'react'
// import { Routes, Route } from 'react-router-dom'


import { getWidgets } from '../apiClient'
import AddWidget from './AddWidget'
import Widgets from './Widgets'
 


function App() {
  const [widgets, setWidgets] = useState([])

  useEffect(() => { handleSubmit() }, [])

  const handleSubmit = () => {
    getWidgets()
      .then((widgetsArr)=> {
        // console.log(widgetsArr)
        setWidgets(widgetsArr)
      }) 
  }

  const [showForm, setShowForm] = useState(false)

  const handleClick = () => {
    setShowForm(!showForm)
  }
    
  
  return (
    <div>
      <h1>Widgets for the win!</h1>  
      <button onClick={handleClick}>{showForm ? 'hide form' : 'Add Widget' }</button>
      {showForm && (<AddWidget refreshWidgets={handleSubmit} />)}

      <Widgets widgets={widgets} />
      
    </div>
  )
}

export default App
