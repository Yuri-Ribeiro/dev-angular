export interface Product {
    id: number
    name: string
    price: number
}

export interface ResponseProducts {
    products: Product[]
}

export interface RequestProduct {
    name: string
    price: number
}