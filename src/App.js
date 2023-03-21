import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import NavBar from './componentes/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        {/* <ItemListContainer greeting={'Bienvenidos'}/> */}
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Todos nuestros productos'} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrados por categoria'} />} />
          <Route path='/category/:categoryId/subcategory/:subcategoryId' element={<ItemListContainer greeting={'Productos filtrados por categoria'} />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
