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
    
    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id) 
        setCart(cartUpdated)
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0
        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })
        return totalQuantity
    }

    const totalQuantity = getTotalQuantity()

    return(      
        <CartContext.Provider value={{cart, addItem, removeItem, totalQuantity}}>
            { children }
        </CartContext.Provider>
    )
}