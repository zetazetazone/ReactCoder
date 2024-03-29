import { useState } from 'react'
import { Button } from '@mui/material'


const Counter = (props) => {
    const [count, setCount] = useState(props.initial)
    const [message, setMessage] = useState('')
    console.log(props.initial)

    const decrement = () => {
        setMessage('')
        if(count > 1) {
            setCount(count - 1)
        } else {
            setMessage('No puede comprar menos de 1')
        }
    }

    const increment = () => {
        setMessage('')
        if(count < props.stock) {
            setCount(count + 1)
        } else {
            setMessage('No puede agregar mas productos')
        }
    }

    const reset = () => {
        setCount(props.initial)
        setMessage('')
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{count}</h2>
            <h3>Cantidad disponible: {props.stock}</h3>
            <Button label="restar" onClick={decrement}/>
            <Button label="sumar" onClick={increment}/>
            <Button label="reiniciar" onClick={reset}/>
            {/* <button onClick={decrement}>restar</button>
            <button onClick={increment}>sumar</button>
            <button onClick={reset}>reiniciar</button> */}
            <h2 style={{color: 'red'}}>{message}</h2>
        </div>
    )
}

export default Counter