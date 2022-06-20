import React, { useState, useEffect } from 'react'
import { getWidgets } from '../apiClient'
 


function App() {
  const [Widgets, setWidgets] = useState([])

  useEffect(() => {
    console.log('using the effect')
    getWidgets()
    .then((seeWidgets)=> console.log(seeWidgets))
  }, [])
  
  return (
    <div>
      <h1>Widgets for the win!</h1>
    </div>
  )
}

export default App
