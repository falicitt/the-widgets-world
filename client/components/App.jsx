import React, { useState, useEffect } from 'react'
import { getWidgets } from '../apiClient'
import AddWidget from './AddWidget'
 


function App() {
  const [widgets, setWidgets] = useState([])

  useEffect(() => {
    console.log('using the effect')
    getWidgets()
    .then((widgetsArr)=> {
      console.log(widgetsArr)
      setWidgets(widgetsArr)})
  }, [])


  

  
  return (
    <div>
      <h1>Widgets for the win!</h1>
      <ul>
        {widgets.map(widget => <li key={widget.id}>{widget.name}</li>)}
      </ul>
      <AddWidget />
    </div>
  )
}

export default App
