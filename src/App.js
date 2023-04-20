import './App.css';
import { createContext , useState} from 'react';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import NavBar from './componentes/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const CartContext = createContext()

function App() {
const [cart, setCart] = useState([])

const addItem = (productToAdd) => {
  if(!isInCart(productToAdd.id)) {
    setCart(prev => [...prev, productToAdd])
  }
  else{
    console.log('El producto ya esta agregado')
  }
}

const isInCart = (id) => {
  return cart.some(prod => prod.id === id)
}

console.log(cart) 

return (
    <div>
      <CartContext.Provider value={{cart, addItem}}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Todos nuestros productos'} />} />
            <Route path='/ReactCoder' element={<ItemListContainer greeting={'Todos nuestros productos'} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrados por categoria'} />} />
            <Route path='/category/:categoryId/subcategory/:subcategoryId' element={<ItemListContainer greeting={'Productos filtrados por categoria'} />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
      
    </div>
  );
}

export default App;
