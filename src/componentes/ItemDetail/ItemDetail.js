import ItemDescription from '../ItemDescription/ItemDescription.js'

const ItemDetail = ({ id, name, price, img, description, stock }) => {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
                <img src={img} alt={name} style={{ width: 100}}/>
            </section>
            <ItemDescription id={id} name={name} price={price} description={description} stock={stock}/>
        </main>
    )
}

export default ItemDetail