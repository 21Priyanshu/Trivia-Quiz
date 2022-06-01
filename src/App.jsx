import {useEffect, useState} from "react";
import "./app.css";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {

  const [questionNumber , setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("₹ 0");

  const moneyPyramid = [
    { id: 1, amount:"$ 500" },
    { id: 2, amount:"$ 1000" },
    { id: 3, amount:"$ 2000" },
    { id: 4, amount:"$ 4000" },
    { id: 5, amount:"$ 8000" },
    { id: 6, amount:"$ 16000" },
    { id: 7, amount:"$ 3200" },
    { id: 8, amount:"$ 6400" },
    { id: 9, amount:"$ 12500" },
    { id: 10, amount:"$ 25000" },
    { id: 11, amount:"$ 50000" },
    { id: 12, amount:"$ 100000" },
    { id: 13, amount:"$ 200000" },
    { id: 14, amount:"$ 400000" },
    { id: 15, amount:"$ 800000" },
  ].reverse();

  useEffect(() => {
    questionNumber >1 &&
    setEarned(moneyPyramid.find((m) => m.id === questionNumber-1).amount);
  },[moneyPyramid,questionNumber]);

  return (
    <div className="app">
      <div className="main">
        {stop ? (<h1 className="endtext">You earned : {earned}</h1>) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer setStop = {setStop} questionNumber = {questionNumber} 
                />
              </div>
            </div>
            <div className="bottom">
              <Trivia
                setStop={setStop}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
              />
            </div>
          </>
        )}
      </div>

      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li
              className={
                questionNumber === m.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListNumber">{m.id}</span>
              <span className="moneyListAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
