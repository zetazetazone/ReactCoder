import ItemCount from '../ItemCount/ItemCount';
import { useState , useContext} from 'react'
import { Button } from '@mui/material';
import { CartContext } from '../../App'
import { Link } from 'react-router-dom';


const ItemDetail = ({ id, name, category, price, stock, description}) => {
    const [quantity, setQuantity] = useState(0)
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }

        console.log('agregue al carrito: ', quantity)

        setQuantity(quantity)
        addItem(productToAdd)
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
                <p className="Info">
                    Stock: {stock}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {
                    quantity > 0 ? (
                        <Link to='/cart'>
                            <Button variant='contained'>Finalizar compra</Button> 
                        </Link>                    
                    ) : (
                        <ItemCount onAdd={handleOnAdd} stock={stock}/>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail