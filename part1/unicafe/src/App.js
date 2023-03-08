import { useState } from "react";

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>;

const StatisticLine = ({text, value, unit}) => (
  <tr>
    <td>{text}</td>
    <td>{value} {unit}</td>
  </tr>
);

const Statistics = ({good, neutral, bad}) => {
  const GOOD_WEIGHT = 1;
  const NEUTRAL_WEIGHT = 0;
  const BAD_WEIGHT = -1;

  const countAll = good + neutral + bad;
  const average = (good * GOOD_WEIGHT + neutral * NEUTRAL_WEIGHT + bad * BAD_WEIGHT) / countAll;
  const percentPositive = good / countAll * 100;

  if (!countAll) {
    return <p>No feedback given</p>;
  }
  return (
    <table>
      <tbody>
        <StatisticLine text={'good'} value={good}/>
        <StatisticLine text={'neutral'} value={neutral}/>
        <StatisticLine text={'bad'} value={bad}/>
        <StatisticLine text={'all'} value={countAll}/>
        <StatisticLine text={'average'} value={average}/>
        <StatisticLine text={'positive'} value={percentPositive} unit={'%'}/>
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text={'good'}/>
      <Button handleClick={() => setNeutral(neutral + 1)} text={'neutral'}/>
      <Button handleClick={() => setBad(bad + 1)} text={'bad'}/>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
