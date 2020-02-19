## Documentação:https://material.angular.io/components/toolbar

##### 1 - criar componente header
    ng g c components/template/header --skipTests

## --skipTests
    Não irá gerar arquivo de teste (final .spec.ts)


##### 2 - importar componentes de toolbar no módulo principal (app.module.ts)
    import {MatToolbarModule} from '@angular/material/toolbar';


##### 3 - incluir MatToolbarModule na lista de imports. Ficará, por exemplo:
imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
],


##### 4 - Adicionar o seletor do header (fenix-header) no template do componente principal, ficando:
<fenix-header></fenix-header>


##### 5 - Adicionar o toolbar ao template de header:
<mat-toolbar class="header mat-elevation-z4">
</mat-toolbar>

## mat-elevation-zX
    adiciona uma sombra para separar elementos.
    X é o número da elevação. Vai de 0 a 24.
    mais informações: https://material.angular.io/guide/elevation


##### 6 - Adicionar CSS
.header {
    position: fixed;
    background: #3f51b5;
    z-index: 2;
}


##### 7 - Colocar na pasta assets/img/ a imagem do seguinte link http://bit.ly/2SU4N7H


##### 8 - Adicionar logo com link
<mat-toolbar class="header mat-elevation-z4">
    <span>
        <a routerLink="/">
            <img id="logo" src="assets/img/logo.png">
        </a>
    </span>
</mat-toolbar>

## documentação recomenda que coloque cada elemento da toolbar dentro de um span


##### 9 - Adicionar CSS
#logo {
    display: flex;
    max-height: 32px;
}


##### 10 - Adicionar título com link ao header
<mat-toolbar class="header mat-elevation-z4">
    <span>
        <a routerLink="/">
            <img id="logo" src="assets/img/logo.png">
        </a>
    </span>
    <span class="title-group">
        <a routerLink="">
            Fenix App
        </a> 
    </span>
</mat-toolbar>

## routerLink
    é uma diretiva semelhante a href. Deixar sem referência por enquanto
## span com classe title-group
    para agrupar link com o ícone que virá a seguir 


##### 11 - Adicionar CSS
.title-group {
    margin-left: 28px;
}

a {
    color: #fff;
    text-decoration: none;
}


##### 12 - Adicionar um ícone
<mat-toolbar class="header mat-elevation-z4">
    <span>
        <a routerLink="/">
            <img id="logo" src="assets/img/logo.png">
        </a>
    </span>
    <span class="title-group">
        <a routerLink="">
            <i class="material-icons">
                web
            </i>
            Fenix App
        </a> 
    </span>
</mat-toolbar>

## class="material-icons"
    indica que se trata de ícones do material

## web
    ícone do angular material
    mais ícones: https://material.io/resources/icons


##### 13 - Adicionar CSS
i {
    margin: auto 4px;
    vertical-align: sub;
}

## vertical-align: sub;
    pro ícone ficar alinhado com o texto





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
