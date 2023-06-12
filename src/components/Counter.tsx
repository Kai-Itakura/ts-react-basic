import React, { useReducer } from 'react'

type CounterProps = {
  initialValue: number
}

// reducerが受け取るactionの型を定義
type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET'

// 現在の状態とactionに基づいて次の状態を返す
const reducer = (currentCount: number, action: Action) => {
  switch (action) {
    case 'DECREMENT':
      return currentCount - 1
    case 'INCREMENT':
      return currentCount + 1
    case 'DOUBLE':
      return currentCount * 2
    case 'RESET':
      return 0
    default:
      return currentCount
  }
}

const Counter = (props: CounterProps) => {
  const { initialValue } = props
  const [count, despatch] = useReducer(reducer, initialValue)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => despatch('DECREMENT')}>-</button>
      <button onClick={() => despatch('INCREMENT')}>+</button>
      <button onClick={() => despatch('DOUBLE')}>×2</button>
      <button onClick={() => despatch('RESET')}>Reset</button>
    </div>
  )
}

export default Counter
