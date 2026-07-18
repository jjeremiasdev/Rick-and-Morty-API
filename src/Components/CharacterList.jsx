import React from 'react';
import CharacterCard from './CharacterCard';

export default function CharacterList({ characters, onCharacterSelect }) {
  if (characters.length === 0) {
    return <p className="no-results">No se encontraron personajes.</p>;
  }

  return (
    <div className="character-grid">
      {characters.map((char) => (
        <CharacterCard 
          key={char.id} 
          character={char} 
          onClick={onCharacterSelect} 
        />
      ))}
    </div>
  );
}