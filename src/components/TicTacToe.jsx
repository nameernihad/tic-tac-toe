import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Board from './Board';
import GameOver from './GameOver';
import GameState from './GameState';
import Reset from './Reset';
import PlayerTab from './PlayerTab';
import gameOverSoundAsset from '../../src/sounds/259564774-ef9d675c-da4a-4ab4-9aec-7861f3a4869a.wav';
import clickSoundAsset from '../../src/sounds/259564660-d64f7059-a360-4421-b6d0-8c4d01a2b9a0.wav';
import Confetti from 'react-confetti';

const gameOverSound = new Audio(gameOverSoundAsset);
gameOverSound.volume = 1;
const clickSound = new Audio(clickSoundAsset);
clickSound.volume = 0.5;

const PLAYER_X = 'X';
const PLAYER_O = 'O';

const winningCombo = [
  // rows
  { combo: [0, 1, 2], strikeClass: 'strike-row-1' },
  { combo: [3, 4, 5], strikeClass: 'strike-row-2' },
  { combo: [6, 7, 8], strikeClass: 'strike-row-3' },
  // columns
  { combo: [0, 3, 6], strikeClass: 'strike-col-1' },
  { combo: [1, 4, 7], strikeClass: 'strike-col-2' },
  { combo: [2, 5, 8], strikeClass: 'strike-col-3' },
  // diagonals
  { combo: [0, 4, 8], strikeClass: 'strike-diagonal-1' },
  { combo: [2, 4, 6], strikeClass: 'strike-diagonal-2' },
];

function checkWinner(tiles, setStrikeClass, setGameState) {
  for (const { combo, strikeClass } of winningCombo) {
    const tileValue1 = tiles[combo[0]];
    const tileValue2 = tiles[combo[1]];
    const tileValue3 = tiles[combo[2]];

    if (
      tileValue1 !== null &&
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3
    ) {
      setStrikeClass(strikeClass);
      if (tileValue1 == PLAYER_X) {
        setGameState(GameState.playerXWin);
      } else {
        setGameState(GameState.playerOWin);
      }
      return;
    }
  }

  const tileFullFilled = tiles.every((tile) => tile !== null);
  if (tileFullFilled) {
    setGameState(GameState.draw);
  }
}

function TicTacToe() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState();
  const [gameState, setGameState] = useState(GameState.inProgress);
  const [popperOn, setPopperOn] = useState(false);
  

  const handleReset = () => {
    setGameState(GameState.inProgress);
    setTiles(Array(9).fill(null));
    setPlayerTurn(PLAYER_X);
    setStrikeClass(null);
    setPopperOn(false)

  };

  const handleClick = (index) => {
    if (gameState !== GameState.inProgress) {
      return;
    }

    if (tiles[index] != null) {
      return;
    }

    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);
    if (playerTurn == PLAYER_X) {
      setPlayerTurn(PLAYER_O);
    } else {
      setPlayerTurn(PLAYER_X);
    }
  };

  useEffect(() => {
    checkWinner(tiles, setStrikeClass, setGameState);
  }, [tiles]);

  useEffect(() => {
    if (tiles.some((tile) => tile !== null)) {
      clickSound.play();
    }
  }, [tiles]);

  useEffect(() => {
    if (gameState != GameState.inProgress) {
      gameOverSound.play();
      setPopperOn(true)

    }
  }, [gameState]);

  return (
    <>
    {popperOn && (
      <Confetti speed="fast" quantity={200}/>
    )}
    <div className="text-customSize">
      <h1>TicTacToe</h1>
      <PlayerTab playerTurn={playerTurn} />
      <Board
        strikeClass={strikeClass}
        playerTurn={playerTurn}
        tile={tiles}
        onTileClick={handleClick}
      />
      <motion.div
        className="flex justify-center"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <GameOver gameState={gameState} />
      </motion.div>
      <motion.div
        className="flex justify-center"
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Reset gameState={gameState} onReset={handleReset} />
      </motion.div>
    </div>
    </>
  );
}

export default TicTacToe;
