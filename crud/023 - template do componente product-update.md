##### 1 - Em product-update.component.html, substituir conteúdo por card que servirá de container
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