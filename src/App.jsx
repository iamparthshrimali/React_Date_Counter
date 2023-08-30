import React, { useState } from 'react'

const App = () => {
  return (
    <>
      <DateCounter />
    </>
  )
}


const DateCounter = () => {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(0)
  const date = new Date();
  date.setDate(date.getDate() + count);
  const handleMinus = () => {
    setCount(count => count - step)
  }
  const handlePlus = () => {
    setCount(count => count + step)
  }
  const handleReset = () => {
    setCount(0);
    setStep(0);
  }
  return (
    <>
      <div className="container" style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <div style={{ marginTop: "20px", gap: "10px" }}>
          <div>
            <input type="range"
              min="0"
              max="10"
              value={step}
              onChange={(e) => setStep(Number(e.target.value))} />
            <span>{step}</span>
          </div>
          <div style={{ display: "flex" }}>
            <button onClick={() => handleMinus()}>-</button>
            <input type="number" name="" id="" value={count} onChange={(e) => setCount(Number(e.target.value))} />
            <button onClick={() => handlePlus()}>+</button>
          </div>

        </div>
        <div style={{ display: "flex", justifyContent: "center" }} >
          {count > 0 && <p>{count} days from is today is {<span>{date.toDateString()}</span>}</p>}
          {count < 0 && <p>{Math.abs(count)} days ago from today was {<span>{date.toDateString()}</span>}</p>}

        </div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  )
}
export default App