##### 1 - No template de Nav, substituir o conteúdo de <mat-sidenav-content> pelo componente <router-outlet>, ficando:
<mat-sidenav-content class="content">
    <router-outlet></router-outlet>
</mat-sidenav-content>

## <router-outlet>
É nele que os componentes acessados pelas rotas são renderizados. Atua como um espaço reservado que o Angular preenche dinamicamente com base no estado atual das rotas.


##### 2 - No arquivo app-routing.module.ts, importar componente home e o componente product-crud-homepage
import { HomeComponent } from './views/home/home.component';
import { ProductCrudHomepageComponent } from './views/product-crud-homepage/product-crud-homepage.component';


##### 3 - Para definir que home será o componente padrão quando nenhuma rota for informada, adicionar objeto abaixo à lista routes:
{path: "", component: HomeComponent}

## Ficando:
const routes: Routes = [
  {path: "", component: HomeComponent},
];


##### 4 - Definir rota para product-crud-homepage
const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "products", component: ProductCrudHomepageComponent},
];


##### 5 - No template de Nav, definir as rotas corretas para routerLink, ficando:
<a mat-list-item routerLink="/">
    <i class="material-icons">home</i>
    Início
</a>
<a mat-list-item routerLink="/products">
    <i class="material-icons">storefront</i>
    Produtos
</a>