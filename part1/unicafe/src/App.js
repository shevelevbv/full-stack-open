import {useState} from "react";

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Stats = ({text, stats}) => {
  return (
    <>
      <p>{text} {stats}</p>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text={'good'}/>
      <Button handleClick={() => setNeutral(neutral + 1)} text={'neutral'}/>
      <Button handleClick={() => setBad(bad + 1)} text={'bad'}/>
      <h2>statistics</h2>
      <Stats text={'good'} stats={good} />
      <Stats text={'neutral'} stats={neutral} />
      <Stats text={'bad'} stats={bad} />
    </div>
  );
}

export default App;
