import { useState, useEffect, useCallback, useMemo, useRef, MouseEvent, KeyboardEvent } from "react"

interface User {
  id: number
  username: string
}

type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
  if (n < 2) return n
  return fib(n - 1) + fib(n - 2)
}

const myNum: number = 27;

function App() {

  const [count, setCount] = useState<number>(0)
  const [user, setUser] = useState<User[] |null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    console.log("mounting")

    console.log("user", user)

    return () => {
      console.log("unmounting")
    }
  }, [user])

  const Add2 = useCallback((e: MouseEvent<HTMLButtonElement> | 
    KeyboardEvent<HTMLButtonElement>): void => setCount(prev => prev + 2), [])

  const result = useMemo<number>(() => fib(myNum), [])

    return (
    <div>
      <h1>{count}</h1>
      <button onClick= {Add2}>Add</button>
      <h2>{result}</h2>
      <input ref={inputRef} type="text" />
    </div>
  )
}

export default App
