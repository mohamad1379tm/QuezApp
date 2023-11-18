import React, { useEffect, useState } from 'react'
import './App2.css'
import { data } from './Product'
import { dataItem } from './Product'
import QuzeItem from './component2/QuzeItem'
import Timer from './component/Timer'
import Timers from './component2/Timer'
import Start2 from './component2/Start2'

export default function App2() {
    const [username, setUsername] = useState(null)
    const [number, setNumber] = useState(1)
    const [cont, setCont] = useState(true)
    const [price, setPrice] = useState('$ 0')

    useEffect(() => {
        data.find((item) => {
            if (item.id == number - 1) {
                setPrice(item.amount)
            }
        })
    }, [number, cont])
    return (
        <div className='container-xxl d-flex position-relative container-main p-0'>
            {username ? (
                <>
                    <div className='Left col-12 col-sm-9 text-white fw-bold bg-warning h-100'>
                        {cont ? (
                            <Quze username={username} setCont={setCont} setNumber={setNumber} number={number} />
                        )
                            :
                            <h1>amount : {price}</h1>
                        }
                    </div>

                    <div className='Rigth col-5 col-sm-3 position-absolute top-0 end-0'>
                        <DeskTop number={number} />
                        <MobilFerst number={number} />
                    </div>
                </>
            ) : <div className='Start2 w-100'><Start2 setUsername={setUsername} /> </div>}

        </div>
    )
}

function DeskTop({ number }) {
    return (
        <div className='DeskTop col-12 d-none d-sm-flex d-flex justify-content-center align-items-center h-100 flex-column'>
            {data.map((item) => (
                <div key={item.id} className={`${number == item.id ? "moneyListItem active" : "moneyListItem"}d-flex fs-3 w-100`}>
                    <span className='text-white fw-bold col-3 ps-3 span'>{item.id}</span>
                    <span className='text-white fw-bold col-9 text-center span'>{item.amount}</span>
                </div>
            ))}
        </div>
    )
}


function MobilFerst({ number }) {
    return (
        <div className='MobilFerst col-12 d-sm-none d-flex d-flex justify-content-center align-items-center flex-column pt-3 pb-3'>
            {data.map((item) => (
                <div key={item.id} className={`${number == item.id ? "moneyListItem" : ""} d-flex fs-5 w-100`}>
                    <span className='text-white fw-bold col-3 ps-3 span'>{item.id}</span>
                    <span className='text-white fw-bold col-9 text-center span'>{item.amount}</span>
                </div>
            ))}
        </div>
    )
}





function Quze({ number, setNumber, setCont, username }) {
    return (
        <div className='QuezApp col-12 flex-column justify-content-sm-center align-items-sm-center d-flex flex-wrap'>
            <>
                <div className="top">
                    <div className='fw-bold Username'>Username : <br /> {username}</div>
                    <div className="timer text-sm-center fw-bold"><Timers setCont={setCont} number={number} /></div>
                </div>
                <QuzeItem setCont={setCont} setNumber={setNumber} number={number} />
            </>
        </div>

    )
}














{/* <div className='Rigth col-12 h-100 position-absolute flex-column d-none align-items-center justify-content-center'>
            {data.map((item)=>(
                <div key={item.id} className='pt-4 d-flex'>
                    <span className='text-warning fs-3 ps-3 span'>{item.id}</span>
                    <span className='text-warning fs-3 text-center w-100 span'>{item.amount}</span>
                </div>
            ))}
        </div> */}