##### 1 - criar componente product-delete
ng g c components/product/product-delete --skipTests


##### 2 - No arquivo app-routing.module.ts, importar componente product-delete
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';


##### 3 - Ainda em app-routing.module.ts, adicionar rota para product-delete
{path: "products/delete/:id", component: ProductDeleteComponent},


##### 4 - Em product-read.component.html, no link para deletar produto, mudar a rota para "/products/delete/{{product.id}}", ficando:
<a routerLink="/products/delete/{{product.id}}">
    <i class="material-icons">
        delete
    </i>
</a>