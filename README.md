# 🛸 Rick and Morty API - React App
Creador: Wilson Tandazo 
License Creative Commons 
## Descripción de la aplicación
Esta es una aplicación web desarrollada en React que consume la API REST pública de "Rick and Morty". Permite a los usuarios visualizar un listado completo de los personajes de la serie. La interfaz incluye un buscador en tiempo real para filtrar personajes por su nombre y un selector para filtrarlos según su estado vital (Alive, Dead, Unknown). Además, cuenta con un sistema de paginación/modal que permite hacer clic en cualquier personaje para visualizar información detallada adicional (origen, ubicación actual y cantidad de episodios en los que aparece).

## Tecnologías utilizadas
* **React 18** (Inicializado con Vite)
* **JavaScript (ES6+)**
* **CSS3** (Flexbox y CSS Grid para diseño responsivo)
* **Fetch API** (Para el consumo de datos externos)

---

## Evidencia del uso de `useState`
El hook `useState` se utilizó principalmente en el componente contenedor (`App.jsx`) para manejar los diferentes estados globales de la interfaz y la data. 

## Evidencia del uso de `useEffect`

El hook `useEffect` fue fundamental para realizar los "efectos secundarios", específicamente para conectar la aplicación con la API REST externa y evitar problemas de rendimiento (renderizados infinitos).

## Conclusiones personales
La implementación de una arquitectura basada en componentes me permitió aplicar los principios SOLID, logrando que piezas como CharacterCard, Filters y Modal funcionen de manera modular y escalable.
A nivel de control de estado, trabajar con useState y useEffect afianzó mi comprensión sobre el ciclo de vida de React y la correcta gestión de asincronía al consumir APIs externas (incluyendo el manejo de errores HTTP y la optimización de rendimiento mediante debounce). Finalmente, diseñar una UI inmersiva con requerimientos de densidad visual demostró la potencia de dominar CSS puro, reafirmando mi capacidad técnica para estructurar soluciones robustas desde la extracción de datos hasta la experiencia final de usuario.

Se crearon estados para almacenar el arreglo de personajes, controlar el indicador de carga, manejar los errores y guardar los valores de los inputs de búsqueda:

```javascript
// Ejemplo del uso de useState en App.jsx
const [characters, setCharacters] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

// Estados para los filtros (Buscador y Select)
const [nameFilter, setNameFilter] = useState('');
const [statusFilter, setStatusFilter] = useState('');

// Estado para manejar el modal
const [selectedCharacter, setSelectedCharacter] = useState(null);

//Ejemplo del uso del useEffect en App.jsx

useEffect(() => {
  const fetchCharacters = async () => {
    setLoading(true);
    try {
      // La URL se construye dinámicamente con los estados de los filtros
      const url = `[https://rickandmortyapi.com/api/character/?name=$](https://rickandmortyapi.com/api/character/?name=$){nameFilter}&status=${statusFilter}`;
      const response = await fetch(url);
      
      if (response.status === 404) {
        setCharacters([]); // Manejo del error cuando la búsqueda no da resultados
      } else {
        const data = await response.json();
        setCharacters(data.results);
        setInfo(data.info);
      }
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    } finally {
      setLoading(false);
    }
  };

