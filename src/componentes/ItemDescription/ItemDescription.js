import Button from '@mui/material/Button';

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
              <Button variant="contained" className='bg-black pl-0 pr-0 mr-2'>-</Button>
              <span>0</span>
              <Button variant="contained" className='bg-black pl-0 pr-0 mr-2'>+</Button>
              <Button variant="contained" className='bg-black '>Add to cart</Button>
            </div>
        </div>
    </section>
  )
}

export default ItemDescription