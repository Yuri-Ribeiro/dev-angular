### Documentação dos componentes sidenav: https://material.angular.io/components/sidenav

##### 1 - importar o sidenav no modulo principal (app.module.ts) e colocar MatSidenavModule na lista de imports
import {MatSidenavModule} from '@angular/material/sidenav';

##### 2 - com o terminal na pasta frontend, executar o comando para criar o componente nav
ng generate component nav

##### 3 - Adicionar o seletor da nav (fenix-nav) no template do componente principal, ficando:
<fenix-header></fenix-header>

<fenix-nav></fenix-nav>

<fenix-footer></fenix-footer>

##### 4 - no template da nav, adicionar o componente sidenav container, que abrigará conteúdo do menu lateral e o conteúdo principal
<mat-sidenav-container class="container">
</mat-sidenav-container>

#   <mat-sidenav-container>
    Contéudos que você não deseja que sejam afetado pela barra lateral, como um header ou footer, podem ser colocados fora do contêiner

##### 5 - adicionar o componente <mat-sidenav>, que agrupa o conteúdo do menu lateral
<mat-sidenav-container>
    <mat-sidenav class="sidenav" opened>
    </mat-sidenav>
</mat-sidenav-container>

## propriedade opened
    quando presente, abre a nav

##### 6 - adicionar o componente <mat-sidenav-content>, que agrupa o conteúdo principal
<mat-sidenav-container class="container">
    <mat-sidenav class="sidenav" opened>
    </mat-sidenav>

    <mat-sidenav-content>
    </mat-sidenav-content>
</mat-sidenav-container>

##### 7 - Adicionar css
.container {
    position: absolute;
    top: 64px;
    bottom: 64px;
    left: 0;
    right: 0;
}

.sidenav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    background: #3f51b5;
    color: #fff;
    z-index: 2;
}