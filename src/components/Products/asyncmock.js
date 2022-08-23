const PRODUCTS = [
    {
        "id": 0,
        "nombre": "Notebook Gamer i3",
        "precio": 88000,
        "category": 2,
        "stock": 20,
        "inicial": 0,
        "estilo": "Nacional",
        "imagen": "https://delta.com.ar/media/catalog/product/cache/03229c62aec18bc8968e7effca99b533/5/5/55083_800_2.jpg"

    },
    {
        "id": 1,
        "nombre": "Notebook Gamer i5",
        "precio": 99000,
        "category": 2,
        "stock": 10,
        "inicial": 1,
        "estilo": "Nacional",
        "imagen": "https://delta.com.ar/media/catalog/product/cache/03229c62aec18bc8968e7effca99b533/5/1/51614_800_1.jpg"
    },
    {
        "id": 2,
        "nombre": "Notebook Gamer i7",
        "precio": 109000,
        "category": 2,
        "stock": 16,
        "inicial": 2,
        "estilo": "Nacional",
        "imagen": "https://delta.com.ar/media/catalog/product/cache/03229c62aec18bc8968e7effca99b533/i/d/ideapad_3_14itl6_ct1_01.png"

    },
    {
        "id": 3,
        "nombre": "Notebook Ryzen 5",
        "precio": 139990,
        "category": 1,
        "stock": 20,
        "inicial": 2,
        "estilo": "Importados",
        "imagen": "https://delta.com.ar/media/catalog/product/cache/03229c62aec18bc8968e7effca99b533/3/a/3a8v8la-1_t1651684423.jpg"

    },
    {
        "id": 4,
        "nombre": "Notebook Ryzen 7",
        "precio": 179999,
        "category": 1,
        "stock": 5,
        "inicial": 1,
        "estilo": "Importados",
        "imagen": "https://delta.com.ar/media/catalog/product/cache/03229c62aec18bc8968e7effca99b533/d/_/d_nq_np_2x_989992-mla47934600734_102021-f.jpg"

    },
    {
        "id": 5,
        "nombre": "Notebook Ryzen 3",
        "precio": 99999,
        "category": 1,
        "stock": 10,
        "inicial": 1,
        "estilo": "Importados",
        "imagen": "https://delta.com.ar/media/catalog/product/cache/03229c62aec18bc8968e7effca99b533/s/1/s145-14iil.jpg"

    },
    {
        "id": 6,
        "nombre": "Notebook i5",
        "precio": 129990,
        "category": 1,
        "stock": 5,
        "inicial": 1,
        "estilo": "Importados",
        "imagen": "https://delta.com.ar/media/catalog/product/cache/dcfa4d7d2f407766967fe41942d9a0cc/5/1/51614_800_1.jpg"
        
    },
]

const TESTING_DELAY = 2000;

export function getProductsByCategory (categoryId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (categoryId) {
                resolve(PRODUCTS.filter(prod => prod.category === categoryId));
            } else {
                resolve(PRODUCTS);
            }
        }, TESTING_DELAY);
    });
}

export function getProductById (id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(PRODUCTS.find(prod => prod.id === id))
        }, TESTING_DELAY)
    })
}