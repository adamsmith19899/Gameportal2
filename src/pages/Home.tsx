import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { GameGrid } from '../components/sections/GameGrid';
import { games } from '../data/games';

export function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 space-y-12">
      <HeroSection featuredGame={games.featured[0]} />
      <GameGrid title="You May Like" games={games.featured} />
      <GameGrid title="New Unblocked Games 2025" games={games.new} />
      <GameGrid title="Popular Unblocked Games" games={games.popular} />
    </main>
  );
}