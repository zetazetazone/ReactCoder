import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react'


const ItemDetail = ({ id, name, category, price, stock, description}) => {
    const [quantity, setQuantity] = useState(0)



    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, quantity
        }

        console.log('agregue al carrito: ', quantity)

        setQuantity(quantity)
        
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
                    quantity === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock}/>
                    ) : (
                        <button>Finalizar compra</button>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail