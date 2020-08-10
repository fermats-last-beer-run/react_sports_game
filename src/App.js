import React from 'react';
import Game from './Components/Game'


const App = () => {
  const hunter = {
    name: 'Chengdu Hunters',
    logo: "/img/cdhu.png"
  }

  const excelsior = {
    name: 'New York Excelsior',
    logo: "/img/nyxl.png"
  }

  const rootStyle = {
    fontSize: "21px",
    background: 'linear-gradient(135deg, #1b2036 52%,#b4926a 48%)',
    color: '#fff',
    height: '1000px'
  }

  return (
    <div id="root" style={rootStyle}>
      <Game
        venue="Hammerstein Ballroom"
        home={excelsior}
        away={hunter} 
      />
    </div>
  )
}

export default App;
