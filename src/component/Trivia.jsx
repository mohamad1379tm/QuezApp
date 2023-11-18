import React, { useEffect, useState } from 'react'

export default function Trivia({data , setStop , setQustionNumber , qustionNumber}) {
    const [question , setQuestion] = useState(null)
    const [selectedAnswer , setSelectedAnswer] = useState(null)
    const [classname , setClassname] = useState('answer')
    
    useEffect(()=>{
        setQuestion(data[qustionNumber - 1])
    },[data , qustionNumber])

    const delay = (duration , callback)=>{
        setTimeout(() => {
            callback()
        }, duration);
    }

    function handleClick(item){
        setSelectedAnswer(item)
        setClassname('answer active')
        delay(3000,()=>
            setClassname(item.correct ? 'answer correct' : 'answer wrong')
        )
        delay(6000,()=>{
            if(item.correct){       
                setQustionNumber(qustionNumber + 1)
                // setSelectedAnswer(null)
            }else{
                setStop(true)
            }
        })
    }

  return (
    <div className='trivia'>
        <div className="question">{question?.question}</div>
        <div className="answers">
            {question?.answers.map((item)=>{
                return(
                    <div className={selectedAnswer == item ? classname : 'answer'} onClick={()=>handleClick(item)}>{item.text}</div>
                )
            })}
        </div>
    </div>
  )
}
