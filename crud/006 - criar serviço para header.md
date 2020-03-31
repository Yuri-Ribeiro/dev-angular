##### 1 - Com o terminal na pasta *frontend*, criar serviço para header:
ng g s components/template/header/header

Forma alternativa: `ng generate service components/product/product`



##### 2 - O arquivo *header.service.ts* será criado com o seguinte código:
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HeaderService {

    constructor() { }
}

`@Injectable` é um *decorator* que marca uma classe como disponível para ser fornecida e injetada como uma dependência em outras classes. Ou seja, indica que a classe *HeaderService* está pronta para ser injetada em outras classes. Mais informações, [aqui.](https://angular.io/api/core/Injectable)

`providedIn: 'root'` indica que esse serviço deve ser criado pelo injetor raiz da aplicação. Mais informações, [aqui](https://angular.io/guide/hierarchical-dependency-injection).


##### 3 - Em header.service.ts, adicionar a variável headerData e inicializá-la:
...
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header.model';
...

headerData = new BehaviorSubject<HeaderData>({
  title: "Fenix",
  iconName: "dashboard",
  routeURL: ""
});

## routeURL é o atributo que diz respeito a rota usada para a página inicial, já que se trata dos dados do header essa página. Por enquanto que as rotas não foram definidas, deixaremos esse campo vazio.

## BehaviorSubject é uma classe que facilita a tarefa de alterar, em tempo de execução, dados que precisam ser compartilhados entre componentes. Como segue o padrão Observable, emite valores para aqueles que estão inscritos, sempre fornecendo o valor atual para os assinantes. Por ter essa característica, requer um valor inicial para os dados no momento de instanciar um novo objeto BehaviorSubject. Para mais informações: https://medium.com/@luukgruijs/understanding-rxjs-behaviorsubject-replaysubject-and-asyncsubject-8cc061f1cfc0

## Nesse momento, estamos criando uma instância de BehaviorSubject do tipo HeaderData. Também passamos como parâmetro do construtor de BehaviorSubject um objeto do tipo HeaderData com seus valores iniciais. Esse objeto poderá ser alterado em tempo de execução, de forma que os dados do cabeçalho possam ser alterados.


##### 9 - Ainda em header.service.ts, criar métodos getHeaderData e setHeaderData:
getHeaderData(): HeaderData{
  return this.headerData.value
}

setHeaderData(data: HeaderData) {
  this.headerData.next(data)
}

## .value é uma propriedade que permite obter o último valor emitido, sem ser necessário inscrição.

## O método getHeaderData retorna o valor atual de headerData.

## .next é um método que recebe o novo valor para o BehaviorSubject.

## O método setHeaderData altera o valor dos dados do cabeçalho. Um novo objeto do tipo HeaderData é recebido como parâmetro e, por meio do método next(), substitui os dados em headerData.