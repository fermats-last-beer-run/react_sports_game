import React from 'react'

const Team1 = ({goals, setGoals, shots, setShots}) => {


    const getRandom = (min, max) => {
        return Math.random() * (max - min) + min
      }
      
    const getBinaryRandom = () => {
        return Math.floor(getRandom(0,2))
      }
    
    const Team = ({name, shots, goals}) => {
        return (
          <div>
            <p>Team {name} Shots: {shots}</p>
            <p>Team {name} Goals: {goals}</p>
          </div>
        )
    }
    
    const makeShot_t1 = () => {
        setShots(shots + 1)
        if(getBinaryRandom()) {
          setGoals(goals + 1)
        }
      }
    
    return(
        <div id="team1">
            <Team 
            name = {1}
            shots ={shots}
            goals ={goals}
            />
            <button onClick= {() => makeShot_t1()} >
            SHOOT
            </button>
        </div>
    )
}

export default Team1

