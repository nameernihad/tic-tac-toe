import React from 'react'
import GameState from './GameState'

function Reset({gameState,onReset}) {
    if(gameState==GameState.inProgress){
        return
    }
  return (
    <button onClick={onReset} className='reset-button rounded-3xl '>Reset</button>
  )
}

export default Reset