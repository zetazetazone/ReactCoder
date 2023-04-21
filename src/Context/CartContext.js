import { createContext , useState} from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
          setCart(prev => [...prev, productToAdd])
        }
        else{
          console.log('El producto ya esta agregado')
          console.log(cart) 
        }
      }

    const isInCart = (id) => {
    return cart.some(prod => prod.id === id)
    }
    
    console.log(cart) 
      

    return(      
        <CartContext.Provider value={{cart, addItem}}>
            { children }
        </CartContext.Provider>
    )
}