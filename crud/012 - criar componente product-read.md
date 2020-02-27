### Documentação dos componentes table: https://material.angular.io/components/table

##### 1 - criar componente product-read
ng g c components/product/product-read --skipTests


##### 2 - adicionar o seletor de product-read no template de product-crud-homepage, ficando:
<fenix-product-read></fenix-product-read>


###### Para focar na criação da tabela de produtos, trabalharemos com dados estáticos inicialmente. Para isso, será necessário criar uma variável products com dados estáticos.


##### 3 - No script de product-read, importar a interface product
import { Product } from '../product.model';


##### 4 - No script de product-read, criar array products com dados para teste
products: Product[] = [
    {
      id: 1,
      name: "X-Búrguer",
      price: 10.5
    },
    {
      id: 2,
      name: "X-Bacon",
      price: 12.5
    },
]


##### 5 - importar componentes table
import {MatTableModule} from '@angular/material/table';


##### 6 - colocar MatTableModule na lista de imports


##### 7 - No template de product-read, adicionar
<table class="mat-elevation-z3" mat-table [dataSource]="products">
</table>

## mat-table
Propriedade que indica se tratar de uma tabela do Angular Material.

## dataSource
Propriedade que recebe os dados a serem inseridos na tabela. Um array deve ser passado. A tabela renderizará uma linha para cada objeto do array.

## []
Alternativa ("forma canônica"): põe-se o "bind-" na frente. Ex.: bind-dataSource
Os colchetes indicam se tratar de Property Bind, uma técnica one-way data binding. Property Bind é indicado para vincularmos uma propriedade de um elemento DOM a uma propriedade definida no código TypeScript do componente. É mais curto e limpo que interpolação de string.
É diferente de interpolação de string, que é quando queremos renderizar um valor associado para o template do componente, ou seja, sempre há uma conversão para string. Já Property Bind retorna o valor real, seja booleano, array, objeto etc. 
Por exemplo, na expressão abaixo, o botão nunca estará ativado, pois o retorno da interpolação será sempre uma string:
<button disabled='{{isDisabled}}'>Try Me</button>
Com Property Bind funcionaria como esperado:
<button [disabled]='isDisabled'>Try Me</button>
Mais informações: https://www.javatpoint.com/property-binding-in-angular-8

## products
Atributo anteriormente definido no TypeScript do componente.


###### Definir modelos para colunas


##### 8 - Adicionar modelo pra coluna ID
<table class="mat-elevation-z3" mat-table [dataSource]="products">
    <ng-container matColumnDef="ID">
        <th mat-header-cell *matHeaderCellDef> ID </th>
        <td mat-cell *matCellDef="let product"> {{product.id}} </td>
    </ng-container>
</table>

## ng-container
Elemento estrutural que não adiciona nenhum conteúdo extra no HTML. Documentação recomenda usar para colunas.

## matColumnDef
Define uma coluna para a tabela. Nome da coluna deve ser exclusivo.

## mat-header-cell
Contêiner de célula de cabeçalho. Adiciona as classes e a função corretas.

## *
O prefixo * já faz Property Bind, dispensando o uso de colchetes, e coloca o conteúdo do elemento em um ng-container. Toda diretiva estrutural deve ter esse prefixo.
Mais informações: https://angular.io/guide/structural-directives#the-asterisk--prefix

## matHeaderCellDef
Diretiva estrutural para capturar o template e as propriedades específicas da célula do cabeçalho. Documentação recomenda usar para cabeçalhos.

## mat-cell
Contêiner de célula que adiciona as classes e função corretas.

## matCellDef
Diretiva estrutural para capturar o template e as propriedades específicas das células de dados. Documentação recomenda usar para célula de dados.

## let product
Sintaxe para nomear cada objeto do array.


##### 9 - Adicionar modelo pras colunas nome e preço
<ng-container matColumnDef="name">
    <th mat-header-cell *matHeaderCellDef> Nome </th>
    <td mat-cell *matCellDef="let product"> {{product.name}} </td>
</ng-container>

<ng-container matColumnDef="price">
    <th mat-header-cell *matHeaderCellDef> Preço </th>
    <td mat-cell *matCellDef="let product"> {{product.price | currency:'BRL'}} </td>
</ng-container>

## |
Se trata de uma Pipe, recurso que recebe um dado de entrada e o transforma na saída desejada
Mais informações: https://angular.io/guide/pipes

## currency:'BRL'
Indica que a saída desejada é em moeda brasileira


##### 10 - Adicionar modelo pra coluna de ações e botões de editar e apagar com ícones
<ng-container matColumnDef="actions">
    <th mat-header-cell *matHeaderCellDef> Ações </th>
    <td mat-cell *matCellDef="let product">
        <a routerLink="">
            <i class="material-icons">
                edit
            </i>
        </a>
        &nbsp;
        <a routerLink="">
            <i class="material-icons">
                delete
            </i>
        </a>
    </td>
</ng-container>

## &nbsp;
Adiciona um espaço sem quebra, utilizado para preencher um espaço vazio (sem conteúdo)


##### 11 - Criar no componente a variável que contém a lista de colunas na ordem desejada pra serem renderizadas. Informar nomes definidos em matColumnDef
displayedColumns: string[] = ['ID', 'name', 'price', 'actions'];


##### 12 - Adicionar mat-header-row e mat-row e forneçer lista de colunas como entradas
<tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
<tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
