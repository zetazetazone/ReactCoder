import { FaShoppingCart } from 'react-icons/fa'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return(
        <button className='cartWidget flex ml-auto pr-4 items-center'>
            <div className='p-2'>{totalQuantity}</div>
            <button><FaShoppingCart/></button>
        </button>
        
    )
}

export default CartWidget