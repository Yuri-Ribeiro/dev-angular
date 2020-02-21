### Documentação dos componentes table: https://material.angular.io/components/table

##### 1 - criar componente product-read
ng g c components/product/product-read --skipTests


##### 2 - adicionar o seletor de product-read no template de product-crud-homepage, ficando:
<mat-sidenav-content class="content">
    <fenix-home></fenix-home>
</mat-sidenav-content>

## Por enquanto, sem navegação com rotas


##### 3 - importar componentes card
import {MatTableModule} from '@angular/material/table';


##### 4 - colocar MatCardModule na lista de imports


##### 5 - 