import { Link } from "react-router-dom"

const Item = ({ product }) => {
    return (
        <div style={{ background: 'orange', margin: 10}}>
            <h2>{product.name}</h2>
            <h3>precio: {product.price}</h3>
            <Link to={`/item/${product.id}`} style={{ background: 'white'}}>ver detalle</Link>
        </div>
    )
}

export default Item