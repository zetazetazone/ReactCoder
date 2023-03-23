import ItemDescription from '../ItemDescription/ItemDescription.js'

const ItemDetail = ({ name, price, img, description }) => {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
                <img src={img} alt={name} style={{ width: 100}}/>
            </section>
            <ItemDescription name={name} price={price} description={description}/>
        </main>
    )
}

export default ItemDetail