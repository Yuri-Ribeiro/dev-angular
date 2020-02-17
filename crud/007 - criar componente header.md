## Documentação:https://material.angular.io/components/toolbar

##### 1 - criar componente header
    ng g c header

##### 2 - importar componente toolbar
    import {MatToolbarModule} from '@angular/material/toolbar';

##### 3 - Adicionar o toolbar ao template:
    <mat-toolbar class="header mat-elevation-z4">
    </mat-toolbar>

## mat-elevation-zX
    adiciona uma sombra para separar elementos.
    X é o número da elevação. Vai de 0 a 24.
    mais informações: https://material.angular.io/guide/elevation

##### 4 - Adicionar título com link ao header
<mat-toolbar class="header mat-elevation-z4">
    <a routerLink="">
        Fenix App
    </a>
</mat-toolbar>

## routerLink
    é uma diretiva semelhante a href

##### 5 - Adicionar um ícone
<mat-toolbar class="header mat-elevation-z4">
    <a routerLink="">
        <i class="material-icons">
            web
        </i>
        Fenix App
    </a>
</mat-toolbar>

## class="material-icons"
    indica que se trata de ícones do material

## web
    ícone do angular material
    mais ícones: https://material.io/resources/icons

##### 6 - adicionar css
.header {
    position: fixed;
    top: 0;
    left: 200px;
    right: 0;
    z-index: 2;
    background: #3f51b5;
}

a {
    color: #fff;
    text-decoration: none;
}

i {
    margin: auto 4px;
    vertical-align: sub;
}

## left: 200px;
    espaço que será da nav

## vertical-align: sub;
    pro ícone ficar alinhado com o texto