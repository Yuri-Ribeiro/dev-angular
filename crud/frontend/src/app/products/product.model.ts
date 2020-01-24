export interface Product {
    id: number
    name: string
    price: number
}

export interface ResponseProducts {
    products: Product[]
}

export interface RequestCreate {
    name: string
    price: number
}