import React, { useRef } from 'react'

export default function Start({setUsername}) {
    const Ref = useRef()
    function mohamad(){
        setUsername(Ref.current.value)
    }
  return (
    <div>
        <input ref={Ref} type="text"/>
        <span onClick={mohamad}>Start</span>
    </div>
  )
}
