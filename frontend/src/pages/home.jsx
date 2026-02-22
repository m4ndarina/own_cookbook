import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getRecetas } from '../services/api';

function Home() {
  const [recetas, setRecetas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarRecetas = async () => {
      try {
        const response = await getRecetas();
        setRecetas(response.data);
        console.log('response.data:', response.data);
      } catch (error) {
        console.error('Error al cargar recetas:', error);
      } finally {
        setLoading(false);
      }
    };
    cargarRecetas();
  }, []);

  if (loading) return <div>Cargando...</div>;

  return (
    <div>
      <h2>Lista de recetas</h2>
      {recetas.length === 0 ? (
        <p>No hay recetas aún</p>
      ) : (
        <ul>
          {recetas.map((receta) => (
            <li key={receta._id}>
              <Link to={`/recipe/${receta._id}`}>{receta.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;