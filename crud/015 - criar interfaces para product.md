##### 1 - Na pasta product que está dentro de components, criar arquivo product.model.ts


##### 2 - Descrever como será um produto, criando interface Product em product.model.ts:
export interface Product {
    id: number
    name: string
    price: number
}


##### 3 - Descrever quais serão os dados mandados numa requisição para um serviço de produto (serviços de adicionar e de atualizar), criando a interface RequestProduct em product.model.ts:
export interface RequestProduct {
    name: string
    price: number
}

## no caso, não é necessário o id na requisição para os métodos post e put