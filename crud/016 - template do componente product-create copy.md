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

## router será necessário para quando, assim que um produto for adicionado, haja uma navegação automática para a tela de homepage do Crud


##### 3 - Em product-create.component, injetar serviços de produto e Router
  constructor(private productService: ProductService, private router: Router) { }


##### n - Criar método create, que será chamado sempre que houver a necessidade de criar um novo produto
create() {
  this.productService.create(this.req).subscribe(res => {
    this.router.navigate(['/products'])
  })
}


##### 4 - No template de product-create, adicionar card que servirá de container
<mat-card class="mat-elevation-z3">
</mat-card>


##### 5 - Adicionar título do card
<mat-card class="mat-elevation-z3">
    <mat-card-title>Novo produto</mat-card-title>
</mat-card>


##### 9 - Adicionar formulário
<mat-card class="mat-elevation-z3">
    <mat-card-title>Novo produto</mat-card-title>
    <form class="product-form">
    </form>
</mat-card>


##### 3 - importar módulo Form field
import {MatFormFieldModule} from '@angular/material/form-field';


##### 3 - importar módulo Input
import {MatInputModule} from '@angular/material/input';


##### 4 - colocar MatFormFieldModule e MatInputModule na lista de imports


##### 10 - Adicionar campos ao formulário
<mat-card class="mat-elevation-z3">
    <mat-card-title>Novo produto</mat-card-title>
    <form class="product-form">
        <mat-form-field>
          <input matInput placeholder="Nome" name="name" [(ngModel)]='req.name'>
        </mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Preço (R$)"  name="price" [(ngModel)]='req.price'>
        </mat-form-field>
    </form>
</mat-card>

## mat-form-field
componente usado para envolver vários componentes do Angular Material que juntos representam um campo de formulário. Aplica estilos comuns de campos de texto, como sublinhado, rótulo flutuante e mensagens de dica.

## matInput
Diretiva que permite que elementos nativos, <input> e <textarea>, sejam bem integrados a <mat-form-field>.

## name
Elementos que usam ngModel precisam ter a propriedade 'name' definida

## ngModel

## [(ngModel)]='req.name'


##### 11 - Adicionar CSS
.product-form mat-form-field{
    display: block;
}


##### 11 - Adicionar botões para salvar e para cancelar
<mat-card class="mat-elevation-z3">
    <mat-card-title>Novo produto</mat-card-title>
    <form class="product-form">
        <mat-form-field>
          <input matInput placeholder="Nome" [(ngModel)]='req.name'>
        </mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Preço (R$)"  name="price" [(ngModel)]='req.price'>
        </mat-form-field>
    </form>
    <button mat-raised-button (click)="save()" color="primary">Salvar</button>
    <button mat-raised-button (click)="cancel()">Cancelar</button>
</mat-card>



##### 15 - Adicionar CSS
button {
    margin: 16px 8px;
}


## - Template completo



## - CSS completo
