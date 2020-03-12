##### 1 - Em product-update.component.html, adicionar card que servirá de container
<mat-card class="mat-elevation-z3">
</mat-card>


##### 2 - Adicionar título do card
<mat-card class="mat-elevation-z3">
    <mat-card-title>Atualizar produto</mat-card-title>
</mat-card>


##### 3 - Adicionar formulário
<mat-card class="mat-elevation-z3">
    <mat-card-title>Atualizar produto</mat-card-title>
    <form *ngIf="req" class="product-form">
    </form>
</mat-card>

## ngIf
Somente se o objeto req estiver preenchido, ou seja, se já existir um objeto com o id que foi referenciado, é que o formulário será carregado. Isso evita erros de tentar carregar dados que não existem.


##### 4 - Adicionar campos ao formulário
<mat-card class="mat-elevation-z3">
    <mat-card-title>Atualizar produto</mat-card-title>
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


##### 5 - Adicionar CSS
.product-form {
    min-width: 150px;
    max-width: 500px;
    width: 100%;
}

.product-form mat-form-field{
    display: block;
}


##### 6 - Adicionar botões para salvar e para cancelar
<mat-card class="mat-elevation-z3">
    <mat-card-title>Atualizar produto</mat-card-title>
    <form class="product-form">
        <mat-form-field>
          <input matInput placeholder="Nome" [(ngModel)]='req.name'>
        </mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Preço (R$)"  name="price" [(ngModel)]='req.price'>
        </mat-form-field>
    </form>
    <button mat-raised-button (click)="updateProduct()" color="primary">Salvar</button>
    <button mat-raised-button (click)="cancel()">Cancelar</button>
</mat-card>



##### 7 - Adicionar CSS
button {
    margin: 16px 8px;
}