import { useEffect, useRef } from 'react'

export const useOnChange = (cb, dp) => {
  const ref = useRef(false)

  useEffect(() => {
    ref.current ? cb() : ref.current = true
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dp)
}

