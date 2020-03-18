##### 1 - criar componente product-create
ng g c components/product/product-create --skipTests


##### 2 - Em app-routing.module.ts, importar componente product-create
import { ProductCreateComponent } from './components/product/product-create/product-create.component';


##### 3 - adicionar rota para product-create
{path: "products/create", component: ProductCreateComponent},