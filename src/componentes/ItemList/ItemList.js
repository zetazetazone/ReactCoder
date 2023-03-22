import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <div className="flex flex-row flex-wrap">
            {
                 products.map(product => {
                    return <Item key={product.id} {...product}/>
                })
            }
        </div>
    )
}

export default ItemList