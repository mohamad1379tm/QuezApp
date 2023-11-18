import React, { useEffect, useState } from 'react'

export default function Timer({setStop , qustionNumber}) {
    const [Timer , setTimer] = useState(30)

    useEffect(()=>{
        if(Timer == 0 ) return setStop(true)






        const interval = setInterval(() => {
            setTimer((item)=>item - 1)
        }, 1000);







        return ()=> clearInterval(interval)
    },[setStop , Timer])
    
    useEffect(()=>{
        setTimer(30)    
    },[qustionNumber])

  return (
    <div>{Timer}</div>
  )
}
