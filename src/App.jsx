import { useEffect, useMemo, useState } from 'react';
import './app.css'
import Trivia from './Components/Trivia';
import Timer from './Components/Timer';
import Start from './Components/Start';
import data from './data'; // Import the data file

function App() {

  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1)
  const [timeOut, setTimeOut] = useState(false);
  const [earned, setEarned] = useState("$ 0")
  const [isWinner, setIsWinner] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);



  //amounts
  const moneyPyramid = useMemo(() =>
    [
      { id: 1, amount: "₹ 100" },
      { id: 2, amount: "₹ 200" },
      { id: 3, amount: "₹ 300" },
      { id: 4, amount: "₹ 500" },
      { id: 5, amount: "₹ 1,000" },
      { id: 6, amount: "₹ 2,000" },
      { id: 7, amount: "₹ 4,000" },
      { id: 8, amount: "₹ 8,000" },
      { id: 9, amount: "₹ 16,000" },
      { id: 10, amount: "₹ 32,000" },
      { id: 11, amount: "₹ 64,000" },
      { id: 12, amount: "₹ 125,000" },
      { id: 13, amount: "₹ 250,000" },
      { id: 14, amount: "₹ 500,000" },
      { id: 15, amount: "₹ 1,000,000" },
    ].reverse(),
    [])

  useEffect(() => {
    if (questionNumber > 15) {
      setIsWinner(true);
      setTimeOut(true);
    } else {
      const currentAmount = moneyPyramid.find((m) => m.id === questionNumber - 1);
      if (currentAmount) {
        setEarned(currentAmount.amount);
      }
    }
  }, [moneyPyramid, questionNumber]);

  const handleExitGame = () => {
    window.location.reload(); // Refresh the page
  };



  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">
                {isWinner ? `Congratulations! You are the winner!` : `You earned : ${earned}`} <br />
                <div className="text-center mt-3">
                  <button className='btn bg-none border border-light text-light' onClick={handleExitGame}>Exit Game</button>
                </div>
              </h1>

            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">

            <ul className='moneyList'>
              <li className='welcome'>{`WELCOME ${username}`}</li>
              {
                moneyPyramid.map((m) => (

                  <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
                    <span className='moneyListItemNumber'>{m.id}</span>
                    <span className='moneyListItemAmount'>{m.amount}</span>
                  </li>
                ))
              }

            </ul>
          </div>
        </>

      )}
    </div>

  )
}

export default App;
