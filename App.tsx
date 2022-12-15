import * as React from 'react';
import './style.css';
import theme from './styles/theme';
import PlayerCard from './PlayerCard/PlayerCard';

export default function App() {
  return (
    <div>
      
      <a
        href="https://www.figma.com/file/i9nWRlDrDbqruPpyaXhy8W/player-card?node-id=2%3A5665"
        target="_blank"
      >
        <h1>MUI II. Layout and theme</h1>
      </a>
      <PlayerCard />
    </div>
  );
}
