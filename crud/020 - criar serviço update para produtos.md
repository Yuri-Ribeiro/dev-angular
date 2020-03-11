##### 1 - Em product.service.ts, criar método update
update(id: string, req: RequestProduct): Observable<Product> {
    const url = `${this.baseApiUrl}/${id}`
    return this.http.put<Product>(url, req)
}

## id
id do produto que será atualizado. Irá na URL.

## put
Função da classe HttpClient do Angular. Essa função faz uma requisição HTTP com o método PUT para a URL e o objeto da requisição passados como parâmetro.