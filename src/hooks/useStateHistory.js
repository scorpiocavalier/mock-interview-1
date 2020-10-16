import { useRef, useState } from 'react'
import useOnChange from './useOnChange'

export default ({ initialValue = '', maxHistoryLength = 5 }) => {
  const [ result, setResult ] = useState(initialValue)
  const resultsHistory = useRef([])
  const resultRef = useRef()

  useOnChange(() => {
    // If the array already has 5, remove the last element.
    if (resultsHistory.current.length >= maxHistoryLength)
      resultsHistory.current.pop()

    // Add the result to the beginning of the array.
    resultsHistory.current.unshift(result)

    // Keep a reference of the result to display.
    resultRef.current = result

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ result ])

  return [ resultRef.current, setResult, resultsHistory.current ]
}

