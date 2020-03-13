##### 1 - Em product-update.component.ts, importar a interface RequestProduct e os serviços de produto, Router e ActivatedRoute
import { RequestProduct } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

## ActivatedRoute
Será necessário para verificarmos qual é a rota ativa do momento e, assim, conseguirmos extrair o parâmetro "id" presente na URL.


##### 2 - Criar o a variável id
id: string

## É o id do produto que se quer alterar. Seu valor será o id presente na URL, que será capturado mais a frente.


##### 3 - Criar o objeto req
req: RequestProduct

## Seu valor inicial será preenchido com os valores atuais por meio da inscrição no serviço readById, que será feita mais a frente. Posteriormente, será o novo que irá na requisição, podendo ser modificado pela técnica two way data binding


##### 4 - Em product-update.component.ts, injetar serviços de produto, ActivatedRoute e Router
constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) { }


##### 5 - Ainda em product-update.component.ts, em ngOnInit, adicionar o seguinte código:
this.id = this.activatedRoute.snapshot.paramMap.get('id')

## Nessa parte, estamos usando activatedRoute para capturar o parâmetro id presente na URL e, assim, atualizarmos a variável local id com esse valor.


##### 6 - Ainda em ngOnInit, adicionar:
this.productService.readById(this.id).subscribe(res => {
  this.req = {
    name: res.name,
    price: res.price
  }
})

## Estamos preenchendo com os valores atuais o objeto que representa o produto, para que possamos ver os seus valores atuais na tela de update antes de alterá-lo


##### 7 - Ainda em product-update.component.ts, adicionar método updateProduct, que será chamado sempre que houver a necessidade de atualizar um produto
updateProduct() {
}


##### 8 - No escopo do método updateProduct, adicionar chamada para o método update do serviço de produto
updateProduct() {
  this.productService.update(this.id, this.req).subscribe()
}


##### 9 - Ainda no escopo do método update, adicionar uma função callback que faz a navegação para o componente homepage do crud
this.productService.update(this.req).subscribe( () => {
  this.router.navigate(['/products'])
})

## Assim que o produto for atualizado, haverá uma navegação para a tela de homepage do Crud


##### 10 - Ainda em product-update.component.ts, adicionar método cancel, que fará a navegação de volta para o componente homepage do crud quando o usuário quiser cancelar a alteração de um produto
cancel() {
  this.router.navigate(['/products'])
}