import React from 'react';

export default function Filters({ nameFilter, setNameFilter, statusFilter, setStatusFilter }) {
  return (
    <div className="filters-container">
      {/* Buscador por nombre */}
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
        className="search-input"
      />

      {/* Selector de estado */}
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="status-select"
      >
        <option value="">Todos los estados</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
}