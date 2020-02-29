##### 1 - Criar serviço para produto
ng g s components/product/product --skipTests

### o seguinte código será gerado


## @Injectable
Decorador que marca uma classe como disponível para ser fornecida e injetada como uma dependência em outras classes. Ou seja, indica que a classe ProductService está pronta para ser injetada em outras classes.
Mais informações: https://angular.io/api/core/Injectable

## injetar
Pôr um serviço no construtor de uma classe

## providedIn: 'root'
declara que esse serviço deve ser criado pelo injetor raiz da aplicação.


##### 2 - Para trabalhar com o protocolo HTTP no Angular, importar o HttpClientModule no módulo principal
import { HttpClientModule } from '@angular/common/http';


##### 3 - Adicionar HttpClientModule na lista de imports


##### 4 - No serviço de produto, injetar HttpClient na classe ProductService
constructor(private http: HttpClient) { }


##### 5 - Adicionar a variável baseApiUrl
private baseApiUrl = 'http://localhost:3001/products'


##### 6 - Criar método read
read(): Observable<Product[]> {  }

## Observable
Seguindo o padrão de projeto Observer, indica que o retorno da função é um objeto do tipo Observable, "observável". Marca que a função é assíncrona. Aqueles que invocarem essa função precisam "se inscrever" (usando método subscribe, que parece com o then de JS), para serem notificados pelo serviço quando o retorno, de fato, estiver disponível. Uma vez que o retorno esteja disponível, subscribe irá invocar uma função callback.
Mais informações: https://medium.com/@luukgruijs/understanding-creating-and-subscribing-to-observables-in-angular-426dbf0b04a3

## Observable<Product[]>
O Observable é de um array de Product. Isso indica que o retorno do Observable é um array de Product.


##### 7 - Adicionar escopo à função read
read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseApiUrl)
}

## get<Product[]>
http.get é um método que retorna um observable genérico (Observable<Object>). <Product[]> especifica que o tipo de retorno deve ser um Observable<Product[]>. Assim, evita-se incompatibilidades com o retorno da própria função read.