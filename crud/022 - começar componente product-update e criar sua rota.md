##### 1 - criar componente product-update
ng g c components/product/product-update --skipTests


##### 2 - Em app-routing.module.ts, importar componente product-update
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';


##### 3 - Ainda em app-routing.module.ts, adicionar rota para product-update
{path: "products/update/:id", component: ProductUpdateComponent},

## :id
Dois pontos indicam se tratar de um parâmetro na rota. "id" é o identificador desse parâmetro. Esse parâmetro depois poderá ser recuperado por meio do serviço de ActivatedRoute.


##### 4 - Em product-read.component.html, no link para editar produto, mudar a rota para "/products/update/{{product.id}}", ficando:
<a routerLink="/products/update/{{product.id}}">
    <i class="material-icons">
        edit
    </i>
</a>