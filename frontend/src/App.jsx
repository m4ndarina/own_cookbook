import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Recipe_detail from './pages/recipe_detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe_detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
