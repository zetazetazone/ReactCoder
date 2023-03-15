import { FaShoppingCart } from 'react-icons/fa'

const CartWidget = () => {
    return(
        <div className='cartWidget flex ml-auto pr-4 '>
            <div className='p-2'>{0}</div>
            <button><FaShoppingCart/></button>
        </div>
        
    )
}

export default CartWidget