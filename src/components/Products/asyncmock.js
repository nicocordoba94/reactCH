const products = [
    {
        "id": 0,
        "nombre": "Notebook Gamer i3",
        "precio": 88000,
        "category": "Importado",
        "stock": 20,
        "imagen": "https://delta.com.ar/media/catalog/product/cache/03229c62aec18bc8968e7effca99b533/5/5/55083_800_2.jpg"

    },
    {
        "id": 1,
        "nombre": "Notebook Gamer i5",
        "precio": 99000,
        "category": "Nacional",
        "stock": 10,
        "imagen": "https://delta.com.ar/media/catalog/product/cache/03229c62aec18bc8968e7effca99b533/5/1/51614_800_1.jpg"

    },
    {
        "id": 2,
        "nombre": "Notebook Gamer i7",
        "precio": 109000,
        "category": "Importado",
        "stock": 16,
        "imagen": "https://delta.com.ar/media/catalog/product/cache/03229c62aec18bc8968e7effca99b533/i/d/ideapad_3_14itl6_ct1_01.png"

    },
    {
        "id": 3,
        "nombre": "Notebook Ryzen 5",
        "precio": 139990,
        "category": "Importado",
        "stock": 20,
        "imagen": "https://delta.com.ar/media/catalog/product/cache/03229c62aec18bc8968e7effca99b533/3/a/3a8v8la-1_t1651684423.jpg"

    },
    {
        "id": 4,
        "nombre": "Notebook Ryzen 7",
        "precio": 179999,
        "category": "Importado",
        "stock": 5,
        "imagen": "https://delta.com.ar/media/catalog/product/cache/03229c62aec18bc8968e7effca99b533/d/_/d_nq_np_2x_989992-mla47934600734_102021-f.jpg"

    },
    {
        "id": 5,
        "nombre": "Notebook Ryzen 3",
        "precio": 99999,
        "category": "Importado",
        "stock": 10,
        "imagen": "https://delta.com.ar/media/catalog/product/cache/03229c62aec18bc8968e7effca99b533/s/1/s145-14iil.jpg"

    },
    {
        "id": 6,
        "nombre": "Notebook i5",
        "precio": 129990,
        "category": "Nacional",
        "stock": 5,
        "imagen": "https://delta.com.ar/media/catalog/product/cache/dcfa4d7d2f407766967fe41942d9a0cc/5/1/51614_800_1.jpg"

    },
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

/*const getFetch = new Promise ((resolve, reject)=>{
    let condition=true
    condition ? setTimeout(()=>{resolve(Data)}, 2000) : reject(console.log("error en base de datos"))
})

export default getFetch;*/