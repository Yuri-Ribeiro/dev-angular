##### 1 - Criar pasta "product" dentro da pasta "components"


##### 2 - Nela, criar arquivo product.model.ts


##### 3 - Descrever como será um produto, criando interface Product em product.model.ts:
export interface Product {
    id: number
    name: string
    price: number
}


##### 4 - Descrever quais serão os dados mandados numa requisição para um serviço de produto (serviç~so de adicionar e de atualizar), criando a interface RequestProduct em product.model.ts:
export interface RequestProduct {
    name: string
    price: number
}

## para os métodos post e put não é necessário, no caso, o id na requisição