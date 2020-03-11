##### 1 - Em product-create.component.html, adicionar card que servirá de container
<mat-card class="mat-elevation-z3">
</mat-card>


##### 2 - Adicionar título do card
<mat-card class="mat-elevation-z3">
    <mat-card-title>Novo produto</mat-card-title>
</mat-card>


##### 3 - Adicionar formulário
<mat-card class="mat-elevation-z3">
    <mat-card-title>Novo produto</mat-card-title>
    <form class="product-form">
    </form>
</mat-card>


##### 4 - Em app.module.ts, importar módulo Form field e módulo Input
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


##### 5 - para ativarmos o recurso two-way databinding mais a frente, precisamos habilitar a diretiva ngModel, que depende do FormsModule do pacote angular/forms, portanto, ainda em app.module.ts, importar:
import { FormsModule } from '@angular/forms';


##### 6 - colocar MatFormFieldModule, MatInputModule e FormsModule na lista de imports


##### 7 - Adicionar campos ao formulário
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
Por padrão, elementos que usam ngModel precisam ter a propriedade 'name' definida

## [(ngModel)]
O recurso two-way databinding é usado sempre que queremos que mudanças no template (view) sejam refletidas no código TypeScript. É um recurso que combinada property binding e event binding, conseguindo, assim manter sincronizados os dados do componente para a view e vice-versa, fazendo com que mudanças sejam refletidas nas duas partes. Essa sincronização dos dados ocorre imediatamente e de forma automática pelo Angular. Sempre que houver alterações no modelo (script), elas serão refletidas na view (template) e, quando acontecer alterações na view, serão refletidas no modelo, garantindo que o template HTML e o código TypeScript estejam atualizados o tempo todo.
Mais informações:
https://www.javatpoint.com/two-way-data-binding-in-angular-8
https://angular.io/api/forms/NgModel

## [(ngModel)]='req.name'
Input receberá como valor inicial req.price


##### 8 - Adicionar CSS
.product-form {
    min-width: 150px;
    max-width: 500px;
    width: 100%;
}

.product-form mat-form-field{
    display: block;
}


##### 9 - Adicionar botões para salvar e para cancelar
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
    <button mat-raised-button (click)="createProduct()" color="primary">Salvar</button>
    <button mat-raised-button (click)="cancel()">Cancelar</button>
</mat-card>



##### 10 - Adicionar CSS
button {
    margin: 16px 8px;
}