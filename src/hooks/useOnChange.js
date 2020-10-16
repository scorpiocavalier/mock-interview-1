import { useEffect, useRef } from 'react'

export const useOnChange = (cb, dp) => {
  // Set ref to false so that the first render does nothing.
  const ref = useRef(false)

  useEffect(() => {
    // Call the callback everytime the input changes.
    ref.current ? cb() : ref.current = true
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dp)
}