import { useState, useEffect } from 'react'

const useCounter = (changeValue = 1) => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + changeValue)
    }, 1000)

    return () => clearInterval(interval)
  }, [changeValue])

  return counter
}

export default useCounter
