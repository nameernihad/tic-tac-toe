import React from "react";

function Tile({ className, value, onClick, playerTurn }) {
  let hoverClass = null;
  if (value == null && playerTurn != null) {
    hoverClass = `${playerTurn.toLowerCase()}-hover`;
  }
  return (
    <div
      onClick={onClick}
      className={`text-customSize flex justify-center items-center ${className} ${hoverClass}`}
    >
      {value}
    </div>
  );
}

export default Tile;
