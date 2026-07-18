# 🛸 Rick and Morty API - React App

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