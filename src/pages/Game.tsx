import React from 'react';
import { useParams } from 'react-router-dom';
import { GameFrame } from '../components/game/GameFrame';
import { GameInfo } from '../components/game/GameInfo';
import { GameControls } from '../components/game/GameControls';
import { games } from '../data/games';

export function GamePage() {
  const { id } = useParams();
  const game = Object.values(games)
    .flat()
    .find(g => g.id === id);

  if (!game) {
    return <div className="pt-24 px-4 text-center text-white">Game not found</div>;
  }

  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,380px] gap-8">
        <div className="space-y-8">
          <GameFrame gameId={game.id} />
          <GameInfo game={game} />
        </div>
        
        <aside className="space-y-6">
          {game.controls && <GameControls controls={game.controls} />}
          
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Similar Games</h3>
            {/* Similar games component here */}
          </div>
        </aside>
      </div>
    </div>
  );
}