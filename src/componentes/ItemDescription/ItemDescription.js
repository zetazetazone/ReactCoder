import Button from '@mui/material/Button';
import Counter from '../Counter/Counter';

import { useState } from 'react'


const InputCount = ({onAdd, stock, initial= 1}) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if(e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }

    }

    const decrement = () => {
            setCount(count - 1)

    }

    return (
        <div>
            <p>{count}</p>
            <Button onClick={decrement}>-</Button>
            <Button onClick={increment}>+</Button>
            <Button onClick={() => onAdd(count)}>Agregar al carrito</Button>
        </div>
    )
}


const ItemDetail = ({ id, name, category, price, stock, description}) => {
    const [inputType, setInputType] = useState('button')
    const [quantity, setQuantity] = useState(0)

    const ItemCount = inputType === 'input' ? InputCount : ButtonCount

    const handleOnAdd = (count) => {
        const objProductToAdd = {
            id, name, price, count
        }

        console.log('agregue al carrito: ', count)

        setQuantity(count)
    }

    return (
        <article className="CardItem">
            <button onClick={() => setInputType(inputType === 'input' ? 'button' : 'input')}>
                Cambiar contador
            </button>
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


/*const ItemDescription = ({ name, price, description }) => {
  return (
    <section>
        <p>Golf Supplies</p>
        <h2>{name}</h2>               
        <p>{description}</p>
        <p>
            <span>$ {price}</span>
            <span> 50%</span>
        </p>
        <p>previous price tachado</p>
        <div>
            <div>
              <Button variant="contained" className='bg-black pl-0 pr-0 mr-2'>-</Button>
              <span>0</span>
              <Button variant="contained" className='bg-black pl-0 pr-0 mr-2'>+</Button>
              <Button variant="contained" className='bg-black '>Add to cart</Button>
            </div>
            <Counter/>
        </div>
    </section>
  )
}

export default ItemDescription
*/