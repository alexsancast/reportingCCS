import { useState } from 'react'
import React from 'react'
import Mainlayout from './pages/Mainlayout'
import SignInSide from './pages/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    // <Mainlayout />
    <SignInSide />

  )
}

export default App
