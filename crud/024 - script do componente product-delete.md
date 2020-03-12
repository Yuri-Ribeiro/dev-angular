##### 1 - Em product-delete.component.ts, importar a interface Product e os serviços de produto, Router e ActivatedRoute
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';


##### 2 - Criar o a variável id
id: string


##### 3 - Criar o objeto que representará o produto a ser apagado
product: Product

## Seu valor será preenchido por meio da inscrição no serviço readById


##### 4 - Em product-delete.component.ts, injetar serviços de produto, ActivatedRoute e Router
constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) { }


##### 5 - Ainda em product-delete.component.ts, em ngOnInit, adicionar o seguinte código:
this.id = this.activatedRoute.snapshot.paramMap.get('id')

## Estamos capturando o id presente na URL


##### 6 - Ainda em ngOnInit, adicionar:
this.productService.readById(this.id).subscribe(res => {
  this.product = res
})

## Preenchendo o objeto que representa o produto


##### 7 - Ainda em product-delete.component.ts, adicionar método deleteProduct
deleteProduct() {
}


##### 8 - No escopo do método deleteProduct, adicionar chamada para o método delete do serviço de produto
deleteProduct() {
  this.productService.delete(this.id, this.req).subscribe()
}


##### 9 - Ainda no escopo do método delete, adicionar uma função callback que faz a navegação para o componente homepage do crud
this.productService.delete(this.req).subscribe( () => {
  this.router.navigate(['/products'])
})

## Assim que o produto for deletado, haverá uma navegação para a tela de homepage do Crud


##### 10 - Ainda em product-delete.component.ts, adicionar método cancel
cancel() {
  this.router.navigate(['/products'])
}