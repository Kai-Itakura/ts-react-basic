import React, { useImperativeHandle, useRef, useState } from 'react'

const Child = React.forwardRef((props, ref) => {
  const [message, setMessage] = useState<string | null>(null)

  // useImperativeHandleで親のrefから参照できる値を指定
  useImperativeHandle(ref, () => ({
    showMessage: () => {
      const date = new Date()
      const message = `Hello it's ${date.toLocaleString()} now!`
      setMessage(message)
    },
  }))

  return <div>{message !== null ? <p>{message}</p> : null}</div>
})

const UseImperativeHandle = () => {
  const childRef = useRef<{ showMessage: () => void }>(null)
  const onClick = () => {
    if (childRef.current !== null) {
      // 子のuseImperativeHandleで指定した値を参照
      childRef.current.showMessage()
    }
  }

  return (
    <div>
      <h2>#UseImperativeHandle</h2>
      <button onClick={onClick}>Show Message!!</button>
      <Child ref={childRef} />
    </div>
  )
}

export default UseImperativeHandle
