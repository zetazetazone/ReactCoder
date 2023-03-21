const products = [
    {
        id: '1',
        name: 'kit Beginner',
        price: 25000,
        category: 'Kits',
        img: 'https://www.tgw.com/wcsstore/CatalogAssetStore/Attachment/images/products/golf/P138467/f-blackblack-x.jpg',
        stock: 25,
        description: 'Incluye 3 palos, 1 bolsa y 10 pelotas'
    },
    {
        id: '2',
        name: 'kit Avanzado',
        price: 50000,
        category: 'Kits',
        img: 'https://www.tgw.com/wcsstore/CatalogAssetStore/Attachment/images/products/golf/P138467/f-blackblack-x.jpg',
        stock: 25,
        description: 'Incluye 6 palos, 1 bolsa y 10 pelotas'
    },
    {
        id: '3',
        name: 'kit Pro',
        price: 100000,
        category: 'Kits',
        img: 'https://www.tgw.com/wcsstore/CatalogAssetStore/Attachment/images/products/golf/P138467/f-blackblack-x.jpg',
        stock: 25,
        description: 'Incluye 9 palos, 1 bolsa, 20 pelotas e indumentaria'
    },
    {
        id: '4',
        name: 'Palo 1',
        price: 10000,
        category: 'Palos',
        img: 'https://www.tgw.com/wcsstore/CatalogAssetStore/Attachment/images/products/golf/P152581/1-f.jpg',
        stock: 25,
        description: '1 Palo chico de 1kg'
    },
    {
        id: '5',
        name: 'Gorra',
        price: 5000,
        category: 'Indumentaria',
        img: 'https://www.tgw.com/wcsstore/CatalogAssetStore/Attachment/images/products/golf/P164422/f-blackwhite-v.jpg',
        stock: 25,
        description: 'Gorra oficial con loSgo de Rosario es Golf'
    },
    {
        id: '6',
        name: 'Pelotas',
        price: 5000,
        category: 'Pelotas',
        img: 'https://www.tgw.com/wcsstore/CatalogAssetStore/Attachment/images/products/golf/P150070/f-white-vv.jpg',
        stock: 25,
        description: 'Set de 12 pelotas'
    },
    {
        id: '7',
        name: 'Bolsa',
        price: 12000,
        category: 'Bolsas',
        img: 'https://www.tgw.com/wcsstore/CatalogAssetStore/Attachment/images/products/golf/P167814/f-blackwhite-x.jpg',
        stock: 25,
        description: 'Bolsa para carrito'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1500)
    })
}


export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1500)
    })
}