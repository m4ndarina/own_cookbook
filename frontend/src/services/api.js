import axios from 'axios';

const API_URL = 'http://localhost:5000/api/recetas';

export const getRecetas = () => axios.get(API_URL);
export const getReceta = (id) => axios.get(`${API_URL}/${id}`);
export const createReceta = (nuevaReceta) => axios.post(API_URL, nuevaReceta);
export const updateReceta = (id, recetaActualizada) => axios.put(`${API_URL}/${id}`, recetaActualizada);
export const deleteReceta = (id) => axios.delete(`${API_URL}/${id}`);