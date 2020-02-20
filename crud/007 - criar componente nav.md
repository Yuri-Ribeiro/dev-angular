### Documentação dos componentes sidenav: https://material.angular.io/components/sidenav

##### 1 - criar componente nav
ng g c components/template/nav --skipTests


##### 2 - adicionar o seletor da nav no template do componente principal, ficando:
<fenix-header></fenix-header>

<fenix-nav></fenix-nav>

<fenix-footer></fenix-footer>


##### 3 - importar componentes sidenav
import {MatSidenavModule} from '@angular/material/sidenav';


##### 4 - colocar MatSidenavModule na lista de imports


##### 5 - no template da nav, adicionar o componente <mat-sidenav-container>
<mat-sidenav-container class="container">
</mat-sidenav-container>

## <mat-sidenav-container>
Abrigará conteúdo do menu lateral e o conteúdo principal. Contéudos que você não deseja que sejam afetado pela barra lateral, como um header ou footer, podem ser colocados fora do contêiner


##### 5 - adicionar CSS
.container {
    position: absolute;
    top: 64px;
    bottom: 64px;
    left: 0;
    right: 0;
}

## 64px é a altura tanto do header como do footer.


##### 5 - adicionar o componente <mat-sidenav>, que agrupa o conteúdo do menu lateral
<mat-sidenav-container class="container">
    <mat-sidenav class="sidenav mat-elevation-z4" mode="side" opened
    fixedInViewport="true" fixedTopGap="64" fixedBottomGap="0">
    </mat-sidenav>
</mat-sidenav-container>

## mode="side"
O Sidenav aparece lado a lado com o conteúdo principal, oculpando espaço lateral, empurrando o conteúdo principal para liberar espaço para o sidenav.
Há três modos: over (padrão), push e side. Mais informações: https://material.angular.io/components/sidenav/overview#changing-the-sidenav-39-s-behavior

## opened
Propriedade que abre a Sidenav. Sidenav por padrão é fechada.

## propriedade fixedInViewport
Propriedade que ativa o posicionamento fixo para a nav.

## fixedTopGap="64" e fixedBottomGap="0"
Funcionam quando se usa fixedInViewport. Definem espaço superior e inferior, respectivamente. Valores em pixels.


##### 7 - Adicionar CSS
.sidenav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    background: #3f51b5;
    color: #fff;
}

## - Sidenav ficará posicionada


##### 6 - Importar componentes de lista
import {MatListModule} from '@angular/material/list';


##### 7 - colocar MatListModule na lista de imports


##### 6 - Adicionar código abaixo em <mat-sidenav> para adicionar itens no menu lateral
<mat-nav-list class="nav-list">
      <a mat-list-item routerLink="">
        <i class="material-icons">
            home
        </i>
        Início
      </a>
      <a mat-list-item routerLink="">
        <i class="material-icons">
            storefront
        </i>
        Produtos
      </a>
</mat-nav-list>

## <mat-nav-list>
Usada para listas de navegação, ou seja, que têm elementos com link. Já dá um estilo compatível com o Material Design.

## propriedade mat-list-item
Documentação recomenda colocar nos elementos de <mat-nav-list>

## FICARÁ:

<mat-sidenav-container class="container">
  <mat-sidenav class="sidenav mat-elevation-z4" mode="side" opened
    fixedInViewport="true" fixedTopGap="64" fixedBottomGap="0">
    <mat-nav-list class="nav-list">
      <a mat-list-item routerLink="">
        <i class="material-icons">
            home
        </i>
        Início
      </a>
      <a mat-list-item routerLink="">
        <i class="material-icons">
            storefront
        </i>
        Produtos
      </a>
    </mat-nav-list>
  </mat-sidenav>
</mat-sidenav-container>


##### N - Adicionar CSS
.nav-list {
    margin-top: 16px;
}

i {
    margin: 16px 8px;
}


##### 7 - Adicionar código abaixo em <mat-sidenav-container>, logo após </mat-sidenav>, para agrupar conteúdo principal
<mat-sidenav-content class="content">
        <router-outlet></router-outlet>
</mat-sidenav-content>

## Ficará:

<mat-sidenav-container class="container">
  <mat-sidenav class="sidenav mat-elevation-z4" mode="side" opened
    fixedInViewport="true" fixedTopGap="64" fixedBottomGap="0">
    <mat-nav-list class="nav-list">
      <a mat-list-item routerLink="">
        <i class="material-icons">
            home
        </i>
        Início
      </a>
      <a mat-list-item routerLink="">
        <i class="material-icons">
            storefront
        </i>
        Produtos
      </a>
    </mat-nav-list>
  </mat-sidenav>
  <mat-sidenav-content class="content">
        <router-outlet></router-outlet>
  </mat-sidenav-content>
</mat-sidenav-container>


##### 9 - Adicionar CSS
.content {
    padding: 16px;
}


##### 8 - CSS completo
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
}

.nav-list {
    margin-top: 16px;
}

i {
    margin: 16px 8px;
}

.content {
    padding: 16px;
}