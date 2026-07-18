import React from 'react';

export default function CharacterCard({ character, onClick }) {
  // Asignamos una clase de color dependiendo del estado para un mejor diseño visual
  const statusClass = character.status.toLowerCase();

  return (
    <div className="character-card" onClick={() => onClick(character)}>
      <img src={character.image} alt={`Imagen de ${character.name}`} loading="lazy" />
      
      <div className="character-info">
        <h3>{character.name}</h3>
        
        <p className="status">
          <span className={`status-indicator ${statusClass}`}></span>
          {character.status} - {character.species}
        </p>
        
        <p className="detail"><strong>Género:</strong> {character.gender}</p>
      </div>
    </div>
  );
}