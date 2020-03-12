##### 1 - Em product.service.ts, criar método read
read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseApiUrl)
}

## http.get
Função da classe HttpClient do Angular. Essa função faz uma requisição HTTP com o método GET para a URL passada como parâmetro.