import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getReceta } from '../services/api';

function Recipe_detail() {
  const { id } = useParams();
  const [receta, setReceta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarReceta = async () => {
      try {
        const response = await getReceta(id);
        setReceta(response.data);
      } catch (err) {
        setError('Error al cargar la receta');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    cargarReceta();
  }, [id]);

  if (loading) return <div>Cargando receta...</div>;
  if (error) return <div>{error}</div>;
  if (!receta) return <div>Receta no encontrada</div>;

  return (
    <div>
      <Link to="/">Volver a la lista</Link>
      
      <h1>{receta.name}</h1>
      {receta.imageUrl && <img src={receta.imageUrl} alt={receta.name} />}
      <p>{receta.description}</p>
      
      <h2>Ingredientes</h2>
      <ul>
        {receta.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
      
      <h2>Pasos</h2>
      <ol>
        {receta.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      
      <p><small>Creada: {new Date(receta.createdAt).toLocaleDateString()}</small></p>
    </div>
  );
}

export default Recipe_detail;
