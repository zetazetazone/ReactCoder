import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [productsState, setProductsState] = useState([])
    
    const { categoryId } = useParams()

    useEffect(() => {
    
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(products => {
                setProductsState(products)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoryId])

    if(productsState && productsState.length === 0) {
        return <h1>No hay productos</h1>
    }

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={productsState}/>
        </div>
    )
}

export default ItemListContainer