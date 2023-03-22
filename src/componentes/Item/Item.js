import { Link } from "react-router-dom"

const Item = ({ id, name, img, price }) => {
    return (
        <div className="w-80 p-3 bg-white rounded-lg flex-col  items-center flex mt-3">
            <div className="img_container w-56 p-2 flex">
                <img src={img} alt={name} />
            </div>
            <div className="product_info mt-2 flex flex-col">
                <h2 className="text-xl font-semibold">{name}</h2>
                <h3 className="font-bold text-lg">$ {price}</h3>
                <Link className="mt-1 text-slate-400" to={`/item/${id}`}>ver detalle</Link>
            </div>
        </div>
    )
}

export default Item