/* eslint-disable promise/catch-or-return */
import React, { useState, useEffect } from 'react'


import { getWidgets } from '../apiClient'
import AddWidget from './AddWidget'
import Widgets from './Widgets'
import DeleteWidget from './deleteWidget'
 


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

  const [showDeleteForm, setShowDeleteForm] = useState(false)


  const handleDelete = () => {
    setShowDeleteForm(!showDeleteForm)
  }
    
  
  return (
    <div>
      <h1>Widgets for the win!</h1>  
      <button onClick={handleClick}>{showForm ? 'hide add' : 'Add Widget' }</button>
      {showForm && (<AddWidget refreshWidgets={handleSubmit} />)}
      <button onClick={handleDelete}>{showDeleteForm ? 'hide delete' : 'Delete Widget' }</button>
      {/* {showDeleteForm && (<DeleteWidget refreshWidgets={handleSubmit} />)} */}


      <Widgets widgets={widgets} refreshWidgets={handleSubmit} />

      
    </div>
  )
}

export default App
