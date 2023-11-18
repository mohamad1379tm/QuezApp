import React, { useEffect, useReducer } from 'react'
import { dataItem } from '../Product'

const Item = {
    QuzeItemName: [],
    selectedAnswer: null,
    claname : 'answer'
}
function reducer(state, action) {
    switch (action.type) {
        case 'item':
            return {
                QuzeItemName: action.payload
            }
        case 'selectedAnswer':
            return {
                ...state,
                selectedAnswer: action.selectedAnswer
            }
            case 'answer':
                return {
                    ...state,
                    answer: action.answer
                }

        default:
            return state
    }
}
export default function QuzeItem({ number , setNumber , setCont}) {
    const [state, dispatch] = useReducer(reducer, Item)

    useEffect(() => {
        dispatch({ type: 'item', payload: dataItem[number - 1] })
    }, [number, dataItem])

    function handclick(item) {

        dispatch({ type: 'selectedAnswer', selectedAnswer: item })

        if(item.correct){
            dispatch({ type: 'answer', answer: 'answer correct' })

            setTimeout(() => {
                setNumber(number + 1)
            }, 3000);
        }else{
            dispatch({ type: 'answer', answer: 'answer wrong' })
            setTimeout(() => {
                setCont(false)
            }, 3000);
        }
        console.log(state.selectedAnswer);
    }
    // let mohamad = state.answer

    return (
        <div className="bottom">
            <div className='trivia'>
                <div className="question fw-bold">{state?.QuzeItemName?.question}</div>
                <div className="answers">
                    {state.QuzeItemName?.answers?.map((item) => (
                        <div onClick={() => handclick(item)} className={`${state.selectedAnswer == item ?  state.answer : 'answer'} fw-bold`}>{item.text}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}
