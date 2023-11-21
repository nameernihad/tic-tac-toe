import React from 'react'
import GameState from './GameState'

function GameOver({gameState}) {
    switch (gameState) {
        case GameState.inProgress:
          return <></>
        case GameState.playerOWin:
            return <div className="game-over">Player O Wins</div>
        case GameState.playerXWin:
            return <div className="game-over">Player X Wins</div>
        case GameState.draw:
            return <div className="game-over">Draw</div>
        default:
            return <></>
    }

}

export default GameOver