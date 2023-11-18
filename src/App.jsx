
import { useEffect, useState } from 'react';
import './app.css'
import Trivia from './component/Trivia';
import Timer from './component/Timer';
import Start from './component/Start';
export default function App() {
  const [username, setUsername] = useState(null)
  const [qustionNumber, setQustionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState("$ 0")
  
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },

    {
      id: 4,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },

    {
      id: 5,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];


  const moneyPyramid = [
    { id: 1, amount: "$ 100" },
    { id: 2, amount: "$ 200" },
    { id: 3, amount: "$ 300" },
    { id: 4, amount: "$ 400" },
    { id: 5, amount: "$ 500" },
    { id: 6, amount: "$ 1000" },
    { id: 7, amount: "$ 2000" },
    { id: 8, amount: "$ 8000" },
    { id: 9, amount: "$ 16000" },
    { id: 10, amount: "$ 32000" },
    { id: 11, amount: "$ 64000" },
    { id: 12, amount: "$ 125000" },
    { id: 13, amount: "$ 250000" },
    { id: 14, amount: "$ 500000" },
    { id: 15, amount: "$ 1000000" },
  ].reverse()



  useEffect(() => {
    qustionNumber > 1 &&
      setEarned(moneyPyramid.find((item) => item.id == qustionNumber - 1).amount)
  }, [moneyPyramid, qustionNumber])

  // useEffect(()=>{
  //   moneyPyramid.find((item)=>{
  //     const m = qustionNumber - 1 == item.id
  //     if(m){
  //       setEarned(item.amount)
  //     }
  //   })
  // }, [moneyPyramid , qustionNumber])

  return (
    <div className="App">
      {username}
      {username ? (
        <>
          <div className="main">
            {stop ? (<h1>you earned : {earned}</h1>) :
              (
                <>
                  <div className="top">
                    <div className="timer"><Timer setStop={setStop} qustionNumber={qustionNumber} /></div>
                  </div>
                  <div className="bottom"><Trivia data={data} setStop={setStop} setQustionNumber={setQustionNumber}
                    qustionNumber={qustionNumber} /></div>
                </>
              )
            }
          </div>
          <div className="pyramid">
            <ul className='moneyList'>
              {moneyPyramid.map((item) => {
                return (
                  <li className={qustionNumber == item.id ? 'moneyListItem active' : 'moneyListItem'}>
                    <span className='moneyListItemNumber'>{item.id}</span>
                    <span className='moneyListItemAmount'>{item.amount}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </>
      ) : <Start setUsername={setUsername} />}

    </div>
  );
}