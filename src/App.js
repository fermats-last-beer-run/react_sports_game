import React, {useState} from 'react';
import Team1 from './Components/Team1'
import Team2 from './Components/Team2'

const App = () => {
  const [goals_t1, setGoals_t1] = useState(0)
  const [shotsTaken_t1, setShotsTaken_t1] = useState(0)

  const [goals_t2, setGoals_t2] = useState(0)
  const [shotsTaken_t2, setShotsTaken_t2] = useState(0)

  const [resets, setResets] = useState(0)
  
  const reset = () => {
    setGoals_t1(0)
    setShotsTaken_t1(0)
    setGoals_t2(0)
    setShotsTaken_t2(0)
    setResets(resets + 1)
  }
  const headerStyle = {
    margin: '15px',
    textAlign: 'center'
  }
  const rootStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }

  return(
    <div id="root">
      <h1 style={headerStyle}>My JS Game</h1>
      <div style={rootStyle}>
        <Team1 
          goals = {goals_t1}
          setGoals = {setGoals_t1}
          shots = {shotsTaken_t1}
          setShots = {setShotsTaken_t1}
        />
        <div id="reset">
          <button onClick={ () => reset()} >
          RESET
          </button>
          <p>NUMBER OF RESETS: {resets}</p>
        </div>
        <Team2 
          goals={goals_t2}
          setGoals={setGoals_t2}
          shots={shotsTaken_t2}
          setShots={setShotsTaken_t2} 
        />
    </div>
  </div>
  )
}

export default App;
