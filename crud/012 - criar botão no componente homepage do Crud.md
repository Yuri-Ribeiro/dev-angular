##### 1 - no script de product-crud-homepage, importar classe Router, que possibilitará a navegação por meio do acionamento de uma função
import { Router } from '@angular/router';


##### 2 - ainda em product-crud-homepage, injetar Router
constructor(private router: Router) { }

## injetar
Pôr um serviço no construtor de uma classe. A classe injetada torna-se uma dependência da classe que recebe.


##### 3 - adicionar função navigateToCreateProduct
navigateToCreateProduct() {
    this.router.navigate(['/products/create'])
}

## this.router.navigate(['/products/create'])
Ao ser acionada, faz a navegação para o componente product-create


##### 4 - No template de product-crud-homepage, adicionar botão que aciona a função navigateToCreateProduct
<button mat-raised-button (click)="navigateToCreateProduct()"> Novo produto </button>

## ()
Os parênteses indicam ao Angular que se trata de um evento que deve ser monitorado. Essa técnica é conhecida como Event binding.
Como forma alternativa, pode-se usar o prefixo on-, conhecido como forma canônica. Por exemplo: on-click.
Mais informações: https://angular.io/guide/template-syntax#event-binding

## click
Indique que deverar monitorar o evento de click.

## mat-raised-button
Botão do Angular Material. Aplica estilos e elevação adequados.

## navigateToCreateProduct()
Função previamente definida no script do componente. Será chamada sempre que o evento ocorrer.


##### 5 - adicionar CSS
button {
    margin-bottom: 16px;
}