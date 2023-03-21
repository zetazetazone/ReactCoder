import { Link } from "react-router-dom"

const Item = ({ id, name, price }) => {
    return (
        <div style={{ background: 'orange', margin: 10}}>
            <h2>{name}</h2>
            <h3>precio: {price}</h3>
            <Link to={`/item/${id}`} style={{ background: 'white'}}>ver detalle</Link>
        </div>
    )
}

export default Item