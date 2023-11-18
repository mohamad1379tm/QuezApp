import React, { useEffect, useState } from 'react'

export default function Timers({setCont , number}) {
    const [Timer , setTimer] = useState(30)

    useEffect(()=>{
        if(Timer == 0) return setCont(false)
        const SetInterval = setInterval(() => {
            setTimer((Timer)=>Timer - 1)
        }, 1000);
        return ()=> clearInterval(SetInterval)
    },[Timer , setCont])

    useEffect(()=>{
        setTimer(30)
    },[number])

  return (
    <div>{Timer}</div>
  )
}
