import React from 'react'

const Team = ({logo, name, goals, setGoals, shots, setShots}) => {

    const logoWidth = 200
    const logoHeight = 200

    const shotSound = new Audio('/audio/basket.wav')

    const getRandom = (min, max) => {
        return Math.random() * (max - min) + min
      }
      
    const getBinaryRandom = () => {
        return Math.floor(getRandom(0,2))
      }
    
    const imageStyle = {
        margin: '0',
        padding: '0'
    }

    const buttonStyle = {
        padding: '0.35em 1.2em',
        border: '0.1em solid #FFF',
        borderRadius: '0.12em',
        fontWeight: '300',
        margin: '1em 5em',
        textAlign: 'center',
        transition: 'all 0.2s'
    }
    const Team = ({name, shots, goals}) => {
        return (
          <div>
            <img src= {logo}
                 alt={name}
                 width={logoWidth}
                 height={logoHeight} 
                 style={imageStyle}
                 />
            <p>{name} Shots: {shots}</p>
            <p>{name} Goals: {goals}</p>
          </div>
        )
    }

    const Stats = () => {
        const shotPercentage = Math.round((goals / shots) * 100)
        if (shots) {
            return(
                <div>
                    Shooting % : {shotPercentage}
                </div>
            )
        }
        return null
    }
    
    const makeShot = () => {
        setShots(shots + 1)
        if(getBinaryRandom()) {
          setGoals(goals + 1)
        }
        shotSound.play()
      }
    
    return(
        <div id={name}>
            <Team 
            name = {name}
            shots ={shots}
            goals ={goals}
            />
            <Stats />
            <button style={buttonStyle} onClick= {() => makeShot()} >
            SHOOT
            </button>
        </div>
    )
}

export default Team

