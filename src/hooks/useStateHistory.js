import { useRef, useState } from 'react'
import { useOnChange } from './useOnChange'

export const useStateHistory = ({
  initialValue = '',
  maxHistoryLength = 5,
}) => {
  const [ result, setResult ] = useState(initialValue)
  const resultsHistory = useRef([])

  useOnChange(() => {
    if (resultsHistory.current.length >= maxHistoryLength)
      resultsHistory.current.pop()

    resultsHistory.current.unshift(result)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ result ])

  return [ result, setResult, resultsHistory.current ]
}

