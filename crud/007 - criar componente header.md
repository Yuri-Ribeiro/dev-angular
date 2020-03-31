## Documentação dos componentes Toolbar: https://material.angular.io/components/toolbar

##### 1 - com o terminal na pasta frontend, executar comando abaixo para criar o componente header
ng g c components/template/header --skipTests

## alternativa:
ng generate component components/template/header --skipTests

## --skipTests
Não irá gerar arquivo de teste (final .spec.ts).


##### 2 - Adicionar o seletor do header (fenix-header) no template do componente principal, ficando:
<fenix-header></fenix-header>


##### 3 - importar componentes de toolbar no módulo principal (app.module.ts)
import {MatToolbarModule} from '@angular/material/toolbar';


##### 4 - incluir MatToolbarModule na lista de imports. Ficará, por exemplo:
imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
],


##### 5 - Ainda em header.component.ts injetar o serviço do header e criar os getters para os atributos do cabeçalho:
import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'crud-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private headerService: HeaderService) {
    }

    get title(): string {
        return this.headerService.getHeaderData().title
    }

    get iconName(): string {
        return this.headerService.getHeaderData().iconName
    }

    get link(): string {
        return this.headerService.getHeaderData().link
    }

    ngOnInit() { }
}

## criamos um método get para acessar cada valor do cabeçalho. Como cada get retorna o valor atual da chamada de .getHeaderData, isso nos permitirá acessar os dados do cabeçalho como se fossem uma variáveis comuns do componente header.


##### 6 - Adicionar o toolbar ao template de header, substituindo todo seu conteúdo por:
<mat-toolbar class="header mat-elevation-z4">
</mat-toolbar>

## mat-elevation-zX
Adiciona uma sombra para separar elementos. X é o número da elevação, que vai de 0 a 24.
Mais informações: https://material.angular.io/guide/elevation


##### 7 - Adicionar CSS
.header {
    position: fixed;
    background: #3f51b5;
    z-index: 2;
}


##### 8 - Colocar na pasta assets/img/ a imagem do seguinte link http://bit.ly/2SU4N7H


##### 9 - Adicionar logo com link
<mat-toolbar class="header mat-elevation-z4">
    <span>
        <a routerLink="">
            <img id="logo" src="assets/img/logo.png">
        </a>
    </span>
</mat-toolbar>

## documentação recomenda que coloque cada elemento da toolbar dentro de um span

## routerLink
É uma diretiva semelhante a href. Deixar sem referência por enquanto.


##### 10 - Adicionar CSS
#logo {
    display: flex;
    max-height: 32px;
}


##### 11 - Adicionar título com link ao header
<mat-toolbar class="header mat-elevation-z4">
    <span>
        <a routerLink="">
            <img id="logo" src="assets/img/logo.png">
        </a>
    </span>
    <span class="title-group">
        <a routerLink="">
            {{title}}
        </a> 
    </span>
</mat-toolbar>

## span com classe title-group
Agrupar link com o ícone que virá a seguir.


##### 12 - Adicionar CSS
.title-group {
    margin-left: 28px;
}

a {
    color: #fff;
    text-decoration: none;
}


##### 13 - Adicionar um ícone
<mat-toolbar class="header mat-elevation-z4">
    <span>
        <a routerLink="">
            <img id="logo" src="assets/img/logo.png">
        </a>
    </span>
    <span class="title-group">
        <a routerLink="">
            <i class="material-icons">
                {{iconName}}
            </i>
            {{title}}
        </a> 
    </span>
</mat-toolbar>

## class="material-icons"
Indica que se trata de ícones do material

## web
Ícone do angular material
Mais ícones: https://material.io/resources/icons


##### 14 - Adicionar CSS
i {
    margin: auto 4px;
    vertical-align: sub;
}

## vertical-align: sub;
Alinhar ícone com texto





## CSS completo
.header {
    position: fixed;
    background: #3f51b5;
    z-index: 2;
}

#logo {
    display: flex;
    max-height: 32px;
}

.title-group {
    margin-left: 28px;
}

a {
    color: #fff;
    text-decoration: none;
}

i {
    margin: auto 4px;
    vertical-align: sub;
}
