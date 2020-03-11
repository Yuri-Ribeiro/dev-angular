##### 1 - Em product.service.ts, criar método update
update(id: string, req: RequestProduct): Observable<Product> {
    return this.http.put<Product>(`${this.baseApiUrl}/${id}`, req)
  }

## get
Função da classe HttpClient do Angular. Essa função faz uma requisição HTTP com o método GET para a URL passada como parâmetro.