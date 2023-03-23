
const ItemDescription = ({ name, price, description }) => {
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
                <button>-</button>
                <span>0</span>
                <button>+</button>
                <button>Add to cart</button>
            </div>
        </div>
    </section>
  )
}

export default ItemDescription