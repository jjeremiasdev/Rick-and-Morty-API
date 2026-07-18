import React from 'react';

export default function Modal({ character, onClose }) {
  if (!character) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* Evitamos que el clic dentro del modal lo cierre */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        
        <img src={character.image} alt={character.name} className="modal-image" />
        
        <h2>{character.name}</h2>
        <div className="modal-details">
          <p><strong>Estado:</strong> {character.status}</p>
          <p><strong>Especie:</strong> {character.species}</p>
          <p><strong>Género:</strong> {character.gender}</p>
          <p><strong>Origen:</strong> {character.origin.name}</p>
          <p><strong>Ubicación actual:</strong> {character.location.name}</p>
          <p><strong>Apariciones:</strong> {character.episode.length} episodios</p>
        </div>
      </div>
    </div>
  );
}