##### 1 - Em product.service.ts, criar método delete
delete(id: string): Observable<any> {
    const url = `${this.baseApiUrl}/${id}`
    return this.http.delete<any>(url)
}

## http.delete
Função da classe HttpClient do Angular. Essa função faz uma requisição HTTP com o método DELETE para a URL passada como parâmetro.