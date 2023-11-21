import React from "react";
import Tile from "./Tile";
import Strick from "./Strick";

function Board({ tile, onTileClick,playerTurn,strikeClass }) {
  return (
    <div className="board grid cursor-pointer relative">
      <Tile
      playerTurn={playerTurn}
        onClick={() => onTileClick(0)}
        value={tile[0]}
        className=" border-r-4 border-r-blue-500 border-b-4  border-b-blue-500"
      />
      <Tile
      playerTurn={playerTurn}
        onClick={() => onTileClick(1)}
        value={tile[1]}
        className=" border-r-4 border-r-blue-500 border-b-4  border-b-blue-500"
      />
      <Tile
      playerTurn={playerTurn}
        onClick={() => onTileClick(2)}
        value={tile[2]}
        className=" border-b-4  border-b-blue-500"
      />
      <Tile
      playerTurn={playerTurn}
        onClick={() => onTileClick(3)}
        value={tile[3]}
        className=" border-r-4 border-r-blue-500 border-b-4  border-b-blue-500"
      />
      <Tile
      playerTurn={playerTurn}
        onClick={() => onTileClick(4)}
        value={tile[4]}
        className=" border-r-4 border-r-blue-500 border-b-4  border-b-blue-500"
      />
      <Tile
      playerTurn={playerTurn}
        onClick={() => onTileClick(5)}
        value={tile[5]}
        className=" border-b-4  border-b-blue-500"
      />
      <Tile
      playerTurn={playerTurn}
        onClick={() => onTileClick(6)}
        value={tile[6]}
        className=" border-r-4 border-r-blue-500 "
      />
      <Tile
      playerTurn={playerTurn}
        onClick={() => onTileClick(7)}
        value={tile[7]}
        className=" border-r-4 border-r-blue-500 "
      />
      <Tile
      playerTurn={playerTurn} onClick={() => onTileClick(8)} value={tile[8]} className="" />

      <Strick strikeClass={strikeClass} />
    </div>
  );
}

export default Board;
