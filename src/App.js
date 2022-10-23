import getCardByName from './components/apiCall.js'
import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const cardName = "Brainstorm"
  
  const [ card, setCard ] = useState(null)
  
  useEffect(() => {
    getCardByName(cardName).then(setCard)
    },[])
  
  return (
    <div >
      Code:{card?.name}
    </div>
  )
}

export default App
