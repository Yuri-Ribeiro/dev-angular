##### 1 - Criar serviço para produto
ng g s components/product/product --skipTests

## Alternativa
ng generate service components/product/product --skipTests

## o seguinte código será gerado
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
}

## @Injectable
Decorador que marca uma classe como disponível para ser fornecida e injetada como uma dependência em outras classes. Ou seja, indica que a classe ProductService está pronta para ser injetada em outras classes.
Mais informações: https://angular.io/api/core/Injectable


## providedIn: 'root'
Declara que esse serviço deve ser criado pelo injetor raiz da aplicação.
Mais informações: https://angular.io/guide/hierarchical-dependency-injection


##### 2 - Adicionar a variável baseApiUrl
private baseApiUrl = 'http://localhost:3001/products'


##### 3 - Para trabalhar com o protocolo HTTP no Angular, importar o HttpClientModule no módulo principal
import { HttpClientModule } from '@angular/common/http';


##### 4 - Adicionar HttpClientModule na lista de imports


##### 5 - No serviço de produto, importar a classe HttpClient
import { HttpClient } from "@angular/common/http";


##### 6 - Ainda no serviço de produto, injetar HttpClient
constructor(private http: HttpClient) { }


##### 7 - Para assincronismo, importar classe Observable
import { Observable } from 'rxjs';

## Angular usa a implementação de Observable da biblioteca de programação reativa RxJS (Reactive Extensions for JavaScript)

## Observable será explicado no passo NNNN


##### 8 - Importar a interface Product
import { Product } from './product.model';


##### 9 - Criar método read
read(): Observable<Product[]> {  }

## Erro por enquanto que não tem retorno

## Observable
Seguindo o padrão de projeto Observer, indica que o retorno da função é um objeto do tipo Observable, "observável". Marca que a função é assíncrona. Aqueles que invocarem essa função precisam "se inscrever" (usando método subscribe, que parece com o then de JS), para serem notificados pelo serviço quando o retorno, de fato, estiver disponível. Uma vez que o retorno esteja disponível, subscribe irá invocar uma função callback.
A grande vantagem em relação a Promises está nos “poderes” que o Observable nos dá com seus operadores, por exemplo: podemos “cancelar” requests para poupar processamento, ou até mesmo tentar fazer uma nova requisição caso algum problema como perda de conexão aconteça. O usuário não precisa ver aquela tela de erro.
Mais informações:
https://medium.com/tableless/entendendo-rxjs-observable-com-angular-6f607a9a6a00
https://medium.com/@luukgruijs/understanding-creating-and-subscribing-to-observables-in-angular-426dbf0b04a3

## Observable<Product[]>
O Observable é de um array de Product. Isso indica que o retorno do Observable é um array de Product.


##### 10 - Adicionar escopo à função read
read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseApiUrl)
}

## get<Product[]>
http.get é um método que retorna um observable genérico (Observable<Object>). <Product[]> especifica que o tipo de retorno deve ser um Observable<Product[]>. Assim, evita-se incompatibilidades com o retorno da própria função read.