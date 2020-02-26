## Esse componente servirá para abrigar o botão para tela de novo produto, para carregar a tabela de produtos e para mudar o nome e ícone do header

##### 1 - criar componente product-crud-homepage, que será a página inicial para o Crud
ng g c views/product-crud-homepage --skipTests


##### 2 - para verificar que está funcionando, substituir o conteúdo de <mat-sidenav-content>, do template de nav, pelo seletor de product-crud-homepage, ficando:
<mat-sidenav-content class="content">
    <fenix-product-crud-homepage></fenix-product-crud-homepage>
</mat-sidenav-content>