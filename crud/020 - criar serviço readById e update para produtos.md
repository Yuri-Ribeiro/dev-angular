##### 1 - Em product.service.ts, criar método readById
readById(id: string): Observable<Product> {
    const url = `${this.baseApiUrl}/${id}`
    return this.http.get<Product>(url)
}

## Será necessário para a tela de atualização dos dados de um produto, pois será possível ver seus dados atuais.

## id
id do produto que será buscado. Irá na URL.

## Pode-se fazer um get tanto para pegar todos os produtos como para pegar somente um. O que indicará que se quer um específico é a presença ou não do id na url.


##### 2 - Em product.service.ts, criar método update
update(id: string, req: RequestProduct): Observable<Product> {
    const url = `${this.baseApiUrl}/${id}`
    return this.http.put<Product>(url, req)
}

## id
id do produto que será atualizado. Irá na URL.

## http.put
Função da classe HttpClient do Angular. Essa função faz uma requisição HTTP com o método PUT para a URL e o objeto da requisição passados como parâmetro.