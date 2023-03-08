import { useState } from "react";

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>;

const Statistics = ({text, stats, unit}) => <p>{text} {stats} {unit}</p>;

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const GOOD_WEIGHT = 1;
  const NEUTRAL_WEIGHT = 0;
  const BAD_WEIGHT = -1;

  const countAll = good + neutral + bad;

  const average = countAll
    ? (good * GOOD_WEIGHT + neutral * NEUTRAL_WEIGHT + bad * BAD_WEIGHT) / countAll
    : 0;

  const percentPositive = countAll
    ? good / countAll * 100
    : 0;

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text={'good'}/>
      <Button handleClick={() => setNeutral(neutral + 1)} text={'neutral'}/>
      <Button handleClick={() => setBad(bad + 1)} text={'bad'}/>
      <h2>statistics</h2>
      <Statistics text={'good'} stats={good} />
      <Statistics text={'neutral'} stats={neutral} />
      <Statistics text={'bad'} stats={bad} />
      <Statistics text={'all'} stats={countAll} />
      <Statistics text={'average'} stats={average} />
      <Statistics text={'positive'} stats={percentPositive} unit={'%'}/>
    </div>
  );
};

export default App;
