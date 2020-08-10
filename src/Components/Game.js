import React, {useState} from 'react'
import Team from './Team'

const Game = ({venue, home, away}) => {
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

    const gameWrapper = {
        width: '80%',
        margin: '0 auto'
    }
    const headerStyle = {
        fontSize: '50px',
        margin: '0 auto',
        padding: '1em',
        textAlign: 'center'
    }
    const gameStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }

    const buttonStyle = {
        padding: '0.35em 1.2em',
        border: '0.1em solid #FFF',
        borderRadius: '0.12em',
        fontWeight: '300',
        margin: '0 5em',
        textAlign: 'center',
        transition: 'all 0.2s'
    }
    
    return(
        <div style={gameWrapper}>
            <h1 style={headerStyle}>Welcome to {venue}</h1>
            <div style={gameStyle}>
            <Team
                name = {home.name}
                logo = {home.logo}
                goals = {goals_t1}
                setGoals = {setGoals_t1}
                shots = {shotsTaken_t1}
                setShots = {setShotsTaken_t1}
            />
            <div id="reset">
                <button style={buttonStyle} onClick={ () => reset()} >
                RESET
                </button>
                <p>NUMBER OF RESETS: {resets}</p>
            </div>
            <Team
                name = {away.name}
                logo = {away.logo}
                goals={goals_t2}
                setGoals={setGoals_t2}
                shots={shotsTaken_t2}
                setShots={setShotsTaken_t2} 
            />
            </div>
        </div>
    )

}

export default Game