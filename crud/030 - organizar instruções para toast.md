##### 1 - Em product-delete.component.html, substituir conteúdo pelo seguinte card que servirá de container
<mat-card class="mat-elevation-z3">
</mat-card>


##### 2 - Adicionar título do card
<mat-card class="mat-elevation-z3">
    <mat-card-title>Deseja apagar esse produto?</mat-card-title>
</mat-card>


##### 3 - Adicionar formulário
<mat-card class="mat-elevation-z3">
    <mat-card-title>Deseja apagar esse produto?</mat-card-title>
    <form *ngIf="product" class="product-form">
    </form>
</mat-card>


##### 4 - Adicionar campos ao formulário
<mat-card class="mat-elevation-z3">
    <mat-card-title>Deseja apagar esse produto?</mat-card-title>
    <form *ngIf="product" class="product-form">
        <mat-form-field>
            <input matInput placeholder="ID" name="id" value='{{product.id}}' disabled>
          </mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Nome" name="name" value='{{product.name}}' disabled>
        </mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Preço"  name="price" value='{{product.price | currency:"BRL"}}' disabled>
        </mat-form-field>
    </form>
</mat-card>

## disabled
Desativa o controle do input. Usuário fica impossibilitado de modificar dados já preenchidos.

## value
Valor que é preenchido no input. Deixamos com o valor padrão do objeto product definido em product-delete.component.ts


##### 5 - Adicionar CSS
.product-form {
    min-width: 150px;
    max-width: 500px;
    width: 100%;
}

.product-form mat-form-field{
    display: block;
}


##### 6 - Adicionar botões para apagar e para cancelar
<mat-card class="mat-elevation-z3">
    <mat-card-title>Deseja apagar esse produto?</mat-card-title>
    <form *ngIf="product" class="product-form">
        <mat-form-field>
            <input matInput placeholder="ID" name="id" value='{{product.id}}' disabled>
          </mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Nome" name="name" value='{{product.name}}' disabled>
        </mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Preço"  name="price" value='{{product.price | currency:"BRL"}}' disabled>
        </mat-form-field>
    </form>
    <button mat-raised-button (click)="deleteProduct()" color="warn">Apagar</button>
    <button mat-raised-button (click)="cancel()">Cancelar</button>
</mat-card>


##### 7 - Adicionar CSS
button {
    margin: 16px 8px;
}