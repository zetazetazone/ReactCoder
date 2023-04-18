import { useState } from 'react'
import { Button } from '@mui/material'

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
   const [quantity, setQuantity] = useState(initial)

   const increment = () => {
       if(quantity < stock) {
           setQuantity(quantity+1)
       }
   }

   const decrement = () => {
       if(quantity > 1) {
           setQuantity(quantity - 1)
       }     
   }

   return(
    <div className='flex items-center'>
        <Button variant='contained' onClick={decrement}>-</Button>
        <p className='p-2'>{quantity}</p>
        <Button variant='contained' onClick={increment}>+</Button>
        <Button variant='contained' onClick={() => onAdd(quantity)}>Agregar al carrito</Button>
    </div>
   )

}
export default ItemCount