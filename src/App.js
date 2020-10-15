import React, { useState } from 'react'
import { useOnChange } from './hooks/useOnChange'
import './App.css'

function App () {
  const [ input, setInput ] = useState('')

  useOnChange(() => {
    console.count('useEffect for input')
  }, [ input ])

  return (
    <div>
      <input
        type="text"
        value={ input }
        onChange={ e => setInput(e.target.value) }
      />
    </div>
  )
}

export default App
