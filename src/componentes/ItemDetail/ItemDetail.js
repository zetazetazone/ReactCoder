// import ItemDescription from '../ItemDescription/ItemDescription.js'

const ItemDetail = ({ name, price, img, description }) => {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
                <img src={img} alt={name} style={{ width: 100}}/>
            </section>
            {/* <ItemDescription/> */}
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
                        <button>-</button>
                        <span>0</span>
                        <button>+</button>
                        <button>Add to cart</button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ItemDetail