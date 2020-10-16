import { useRef } from 'react'

export default (callback, delay) => {
  const timer = useRef()

  return (...args) => {
    // Stop the timer before it completes.
    clearTimeout(timer.current)

    // Retrieve the id returned by setTimeout and restart timer.
    timer.current = setTimeout(() => callback(...args), delay)
  }
}