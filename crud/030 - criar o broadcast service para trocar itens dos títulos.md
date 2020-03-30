---------------- header.service.ts


##### 1 - Criar serviço para header:
ng g s components/template/header/header


##### 2 - Em header.service.ts, importar a classe BehaviorSubject e a interface HeaderData, adicionando:
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header.model';

## BehaviorSubject
Essa classe que segue o padrão Observable é ideal para compartilhamento de dados entre componentes, pois com ela podemos alterar em tempo de execução dados compartilhados entre componentes. Reque um valor inicial para os dados. Emite sempre o valor atual para os assinantes. Com isso, conseguimos passar dados entre componentes e também alterar o estado deles conforme estamos passando de um lado para o outro.


##### 3 - Ainda em header.service.ts, adicionar a variável headerData e inicializá-la:
headerData = new BehaviorSubject<HeaderData>({
  title: "Fenix",
  iconName: "dashboard",
  link: "/"
});

## Nesse momento, estamos criando uma instância de BehaviorSubject do tipo HeaderData. Também passamos como parâmetro do construtor de BehaviorSubject um objeto do tipo HeaderData com seus valores iniciais. Esse objeto poderá ser alterado em tempo de execução, de forma que os dados do cabeçalho possam ser alterados.


##### 9 - Ainda em header.service.ts, criar método getHeaderData:
getHeaderData(): HeaderData{
  return this.headerData.value
}

## .value

## O método getHeaderData retorna o valor atual de headerData.


##### 9 - Ainda em header.service.ts, criar método setHeader:
setHeader(data: HeaderData) {
  this.headerData.next(data)
}

## .next

## Nesse ponto, estamos criando um método para alterar o valor dos dados do cabeçalho. Um novo objeto do tipo HeaderData é recebido como parâmetro em setHeader, que, por meio do método next(), é atribuido para headerData.


----------------- header.component.ts


##### 9 - Em header.component.ts, importar o serviço do header, adicionando:
import {HeaderService} from './header.service';


##### 10 - Ainda em header.component.ts, no contrutor, injetar o serviço do header e inicializar atributos:
constructor(private headerService: HeaderService) {
  let {title, iconName, link} = this.headerService.getHeaderData();
  this.title = title
  this.iconName = iconName
  this.link = link
}



----------------- product-crud-homepage.component.ts



##### 11 - Em product-crud-homepage.component.ts, importar o serviço do header, adicionando:
import {HeaderService} from '../../components/template/header/header.service';


##### 11 - Em product-crud-homepage.component.ts, injetar o serviço do header e chamar setHeader passando os novos dados:
constructor(private router: Router, private headerService: HeaderService) { 
  this.headerService.setHeader({
    title: "Produtos",
    iconName: "storefront",
    link: "/products"
  })
}


-------------------- home.component.ts



##### 11 - Em home.component.ts, importar o serviço do header, adicionando:
import {HeaderService} from '../../components/template/header/header.service';


##### 11 - Em home.component.ts, injetar o serviço do header e chamar setHeader passando os novos dados:
constructor(private headerService: HeaderService) {
  this.headerService.setHeader({
    title: "Início",
    iconName: "home",
    link: "/"
  })
}