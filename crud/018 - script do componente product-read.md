##### 1 - criar componente product-read
ng g c components/product/product-read --skipTests


##### 2 - adicionar o seletor de product-read no template de product-crud-homepage, ficando:
<button mat-raised-button (click)="navigateToCreateProduct()"> Novo produto </button>

<fenix-product-read></fenix-product-read>


##### 3 - Em product-read.component.ts, importar a interface Product e o serviço de produto
import { Product } from '../product.model';
import { ProductService } from '../product.service';


##### 4 - Criar o array de Product, products
products: Product[]

## Seus valores serão atualizados posteriormente por meio da inscrição no serviço read


##### 5 - Em product-create.component.ts, injetar a dependência serviço de produto
constructor(private productService: ProductService) { }


##### 6 - No método ngOnInit, adicionar o seguinte escopo:
ngOnInit() {
    this.productService.read().subscribe(res => {
        this.products = res
    })
}

## ngOnInit
Método que é carregado depois que o construtor é inicializado.
Mais informações: https://angular.io/api/core/OnInit#ngOnInit

## res
É a resposta recebida, ou seja, o retorno do Observable.

## Nesse momento os produtos já estão sendo carregados, porém não são mostrados ainda no template.