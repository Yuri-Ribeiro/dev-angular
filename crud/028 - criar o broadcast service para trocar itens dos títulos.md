##### 1 - Criar serviço para header:
ng g s components/template/header/header


##### 2 - Em header.service.ts, importar a classe BehaviorSubject e a interface HeaderData, adicionando:
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header.model';


##### 2 - Ainda em header.service.ts, adicionar a variável headerData e inicializá-la:
headerData = new BehaviorSubject<HeaderData>({
  title: "Fenix",
  iconName: "dashboard",
  link: "/"
});


##### 9 - Ainda em header.service.ts, criar método getHeaderData:
getHeaderData(): HeaderData{
    return this.headerData.value
  }


##### 9 - Ainda em header.service.ts, criar método setHeader:
setHeader(data: HeaderData) {
  this.headerData.next(data)
}


##### 9 - Em header.component.ts, importar o serviço do header, adicionando:
import {HeaderService} from './header.service';


##### 10 - Ainda em header.component.ts, no contrutor, injetar o serviço do header e inicializar atributos:
constructor(private headerService: HeaderService) {
  let {title, iconName, link} = this.headerService.getHeaderData();
  this.title = title
  this.iconName = iconName
  this.link = link
}




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




##### BehaviorSubject
Requer um valor inicial e emite o valor atual para novos assinantes. Segue o padrão Observable. Com ele nós podemos alterar dados em tempo de execução
podemos utilizar o BehaviorSubject para compartilhamento de dados entre componentes

##### Referência para Observable<HeaderData>

##### estamos criando um método para alterar o valor do nosso user e notificar todos os outros componentes que assinarem ele.

##### Agora nos componentes Home e About nós temos um código parecido onde estamos importando o nosso Service no construtor e em ngOnInit estamos dando um subscribe em user.


##### Bom, com isso nós conseguimos passar dados entre componentes e também podemos alterar o estado deles conforme estamos passando de um lado para o outro.

##### estamos importando o modulo BehaviorSubject.

##### estamos criando uma instancia do module BehaviorSubject e passando como parâmetro a nossa classe user.

##### estamos importando o nosso modulo User, para que possamos alterar ele em tempo de execução.

##### mandaremos um novo valor ao nomeBehaviorSubject através do método next(), para isso, criei o método abaixo, que será acionado pelo template:

##### Também criei um método get musica() para acessar o valor do template. O get nos permitirá acessar musica como se fosse uma variável comum de nosso componente, conforme demonstrado: