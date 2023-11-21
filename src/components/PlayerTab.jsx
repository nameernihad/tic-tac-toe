import React, { useEffect, useState } from 'react';

const PlayerTab = ({playerTurn}) => {
  const [activeTab, setActiveTab] = useState('player-x');

useEffect(() => {
    if(playerTurn=="X"){
        setActiveTab('player-x')
    }else{
        setActiveTab('player-o')

    }
}, [playerTurn])

    
  

  return (
    <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center justify-center" id="player-tabs" role="tablist">
        <li className={`me-2 ${activeTab === 'player-x' ? 'border-b-4 border-amber-500' : ''}`} role="presentation">
          <button
            className="inline-block p-4 rounded-t-lg"
            id="player-x-tab"
            role="tab"
            aria-controls="player-x"
            aria-selected={activeTab === 'player-x'}
          >
            PLAYER X
          </button>
        </li>
        <li className={`${activeTab === 'player-o' ? 'border-b-4 border-amber-500' : ''}`} role="presentation">
          <button
            className="inline-block p-4 rounded-t-lg"
            id="player-o-tab"
            role="tab"
            aria-controls="player-o"
            aria-selected={activeTab === 'player-o'}
          >
            PLAYER O
          </button>
        </li>
      </ul>
    </div>
  );
};

export default PlayerTab;
