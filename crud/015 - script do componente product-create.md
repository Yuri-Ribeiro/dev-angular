##### 1 - Em product-create.component, importar a interface RequestProduct
import { RequestProduct } from '../product.model';


##### 2 - Criar o objeto que irá na requisição
req: RequestProduct = {
  name: '',
  price: null
}

## Seus valores serão atualizados por meio da técnica two way data binding, que será explicada mais a frente


##### 2 - Em product-create.component, importar os serviços de produto e Router   
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

## router será necessário para que, assim que um produto for adicionado, haja uma navegação automática para a tela de homepage do Crud


##### 3 - Em product-create.component, injetar serviços de produto e Router
constructor(private productService: ProductService, private router: Router) { }


##### n - Ainda em product-create.component, adicionar método create, que será chamado sempre que houver a necessidade de criar um novo produto
createProduct() {
}


##### n - No escopo do método create, adicionar chamada para o método create da instância local de productService
this.productService.create(this.req).subscribe()

## subscribe
Equivale ao then de uma promise. Faz a inscrição no observable retornado pela função create. Assim, é notificado quando houver uma resposta. Pode, como alternativa, chamar uma função callback passando-se a reposta.


##### n - Ainda no escopo do método create, adicionar uma função callback que faz a navegação para o componente homepage do crud
this.productService.create(this.req).subscribe( () => {
  this.router.navigate(['/products'])
})

## Assim que o produto for criado, haverá uma navegação para a tela de homepage do Crud


##### n - Em product-create.component, adicionar método cancel, que fará a navegação de volta para o componente homepage do crud quando o usuário quiser cancelar a adição de novo produto
cancel() {
  this.router.navigate(['/products'])
}