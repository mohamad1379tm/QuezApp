import React, { useRef } from 'react'

export default function Start2({ setUsername }) {
  const Ref = useRef()
  function mohamad() {
    setUsername(Ref.current.value)
  }
  return (
    <div className='text-center'>
      <input ref={Ref} type="text" />
      <br />
      <button onClick={mohamad}>Start</button>
    </div>
  )
}
