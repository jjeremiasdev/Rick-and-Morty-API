import { useState, useEffect } from 'react';
import Filters from './Components/Filters';
import CharacterList from './Components/CharacterList';
import Modal from './Components/Modal';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [nameFilter, setNameFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  //Estado para guardar la URL de la siguiente página y el estado de carga del botón
  const [nextUrl, setNextUrl] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const url = `https://rickandmortyapi.com/api/character/?name=${nameFilter}&status=${statusFilter}`;
        const response = await fetch(url);
        
        if (response.status === 404) {
          setCharacters([]);
          setNextUrl(null); // Si no hay resultados, no hay siguiente página
          throw new Error('No se encontraron personajes en esta dimensión.');
        }

        if (!response.ok) throw new Error(`Error en la petición: ${response.statusText}`);

        const data = await response.json();
        setCharacters(data.results);
        
        // Guardamos la URL de la siguiente página que nos da la API
        setNextUrl(data.info.next); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchCharacters();
    }, 500);

    return () => clearTimeout(timeoutId);
    
  }, [nameFilter, statusFilter]);

  // NUEVA FUNCIÓN: Obtiene la siguiente página y la añade al array actual
  const loadMore = async () => {
    if (!nextUrl) return;
    
    setLoadingMore(true);
    try {
      const response = await fetch(nextUrl);
      const data = await response.json();
      
      // Concatena los personajes actuales con los 20 nuevos
      setCharacters((prevCharacters) => [...prevCharacters, ...data.results]);
      
      // Actualiza la URL para la siguiente vez que se presione el botón
      setNextUrl(data.info.next);
    } catch (err) {
      console.error("Error cargando más personajes:", err);
    } finally {
      setLoadingMore(false);
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>Rick and Morty API</h1>
      </header>

      <main>
        <Filters 
          nameFilter={nameFilter} 
          setNameFilter={setNameFilter}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />

        {loading && <div className="loader">Escaneando formas de vida...</div>}
        {error && !loading && <div className="error-message">{error}</div>}

        {!loading && !error && (
          <>
            <CharacterList 
              characters={characters} 
              onCharacterSelect={setSelectedCharacter} 
            />
            
            {/* NUEVO: Botón de Cargar Más que solo aparece si existe una siguiente página */}
            {nextUrl && (
              <div className="load-more-container">
                <button 
                  className="load-more-btn" 
                  onClick={loadMore} 
                  disabled={loadingMore}
                >
                  {loadingMore ? 'Extrayendo datos...' : 'Cargar más sujetos'}
                </button>
              </div>
            )}
          </>
        )}
      </main>

      <Modal 
        character={selectedCharacter} 
        onClose={() => setSelectedCharacter(null)} 
      />
    </div>
  );
}

export default App;