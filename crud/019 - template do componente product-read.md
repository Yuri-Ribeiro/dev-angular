##### 1 - importar componentes table em app.module.ts
import {MatTableModule} from '@angular/material/table';

## Documentação dos componentes table: https://material.angular.io/components/table


##### 2 - colocar MatTableModule na lista de imports


###### No passo seguinte, 7, será apresentado um erro no console, pois não foram determinadas as colunas a serem renderizadas. Esse erro será corrigido nos passos 8 e 9. 


##### 3 - Em product-read.component.html, adicionar
<table class="mat-elevation-z3" mat-table [dataSource]="products">
</table>

## mat-table
Propriedade que indica se tratar de uma tabela do Angular Material.

## dataSource
Propriedade que recebe os dados a serem inseridos na tabela. Um array deve ser passado. A tabela renderizará uma linha para cada objeto do array.

## []
Alternativa ("forma canônica"): em vez de usar colchetes, põe-se o "bind-" na frente. Ex.: bind-dataSource
Os colchetes indicam se tratar de Property Bind, uma técnica one-way data binding. Property Bind é indicado para vincularmos uma propriedade de um elemento DOM a uma propriedade definida no código TypeScript do componente. É mais curto e limpo que interpolação de string.
É diferente de interpolação de string, que é quando queremos renderizar um valor associado para o template do componente, ou seja, com interpolação de string sempre há uma conversão para string. Já Property Bind retorna o valor real, seja booleano, array, objeto etc. 
Por exemplo, na expressão abaixo, o botão nunca estará ativado, pois o retorno da interpolação será sempre uma string:
<button disabled='{{isDisabled}}'>Try Me</button>
Com Property Bind funcionaria como esperado:
<button [disabled]='isDisabled'>Try Me</button>
Mais informações: https://www.javatpoint.com/property-binding-in-angular-8

## products
Atributo anteriormente definido no arquivo product-read.component.ts


###### Agora serão definidos os modelos de linhas, para informar à tabela quais colunas serão renderizadas no cabeçalho e nas linhas de dados.
Mais informações: https://material.angular.io/components/table/overview#3-define-the-row-templates


##### 3 - No arquivo product-read.component.ts, criar a seguinte variável
displayedColumns: string[] = [];

## Propriedade displayedColumns
Array de strings que referencia os identificadores das colunas na ordem desejada pra serem renderizadas. No template, os identificadores serão definidos por meio da propriedade matColumnDef da tag para cada coluna. Por enquanto, esse array estará vazio, já que nenhuma coluna foi definida.


##### 4 - Adicionar à tabela os contêiners do header e dos dados
<table class="mat-elevation-z3" mat-table [dataSource]="products">
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>

## mat-header-row
Contêiner do template da header. Contém a saída do header. Adiciona a classe e função correta.

## matHeaderRowDef
Diretiva estrutural que define a linha do header. Captura o modelo da linha do header e suas outras propriedades, como as colunas a serem exibidas. Recebe lista de colunas como entrada.

## mat-row
Contêiner do template de linha de dados. Contém a saída das células de dados. Adiciona a classe e função corretas.

## matRowDef
Diretiva estrutural que define a linha de dados. Captura o modelo da linha de dados e suas outras propriedades, como as colunas a serem exibidas. Recebe lista de colunas como entrada.


##### 5 - Adicionar CSS
table {
    width: 100%;
}

## oculpará toda a largura da área reservada ao conteúdo


###### Agora serão definidos o modelos para colunas.
Mais informações: https://material.angular.io/components/table/overview#2-define-the-column-templates


##### 6 - Em <table>, adicionar modelo pras colunas ID, nome e preço
<ng-container matColumnDef="ID">
    <th mat-header-cell *matHeaderCellDef> ID </th>
    <td mat-cell *matCellDef="let product"> {{product.id}} </td>
</ng-container>
<ng-container matColumnDef="name">
    <th mat-header-cell *matHeaderCellDef> Nome </th>
    <td mat-cell *matCellDef="let product"> {{product.name}} </td>
</ng-container>
<ng-container matColumnDef="price">
    <th mat-header-cell *matHeaderCellDef> Preço </th>
    <td mat-cell *matCellDef="let product"> {{product.price | currency:'BRL'}} </td>
</ng-container>

## ng-container
Elemento estrutural que não adiciona nenhum conteúdo extra no HTML. Documentação recomenda usar para colunas.

## matColumnDef
Define um identificador para a coluna. Deve ser exclusivo.

## mat-header-cell
Contêiner de célula de cabeçalho. Adiciona as classes e a função corretas.

## *
Toda diretiva estrutural deve ter esse prefixo. Com ele, a técnica Property Bind já é realizada, dispensando o uso de colchetes; também coloca o conteúdo do elemento num ng-container.
Mais informações: https://angular.io/guide/structural-directives#the-asterisk--prefix

## matHeaderCellDef
Diretiva estrutural para capturar o template e as propriedades específicas da célula do cabeçalho. Documentação recomenda usar para cabeçalhos.

## mat-cell
Contêiner de célula que adiciona as classes e a função corretas.

## matCellDef
Diretiva estrutural para capturar o template e as propriedades específicas das células de dados. Documentação recomenda usar para célula de dados.

## let product
Sintaxe para nomear cada objeto do array. Semelhante a estrutura de repetição for.

## |
Se trata de uma Pipe, recurso que recebe um dado de entrada (no caso, product.price) e o transforma na saída desejada.
Mais informações: https://angular.io/guide/pipes

## currency:'BRL'
Indica que a saída desejada é em moeda brasileira

## Ficará:
<table class="mat-elevation-z3" mat-table [dataSource]="products">
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    <ng-container matColumnDef="ID">
        <th mat-header-cell *matHeaderCellDef> ID </th>
        <td mat-cell *matCellDef="let product"> {{product.id}} </td>
    </ng-container>
    <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef> Nome </th>
        <td mat-cell *matCellDef="let product"> {{product.name}} </td>
    </ng-container>
    <ng-container matColumnDef="price">
        <th mat-header-cell *matHeaderCellDef> Preço </th>
        <td mat-cell *matCellDef="let product"> {{product.price | currency:'BRL'}} </td>
    </ng-container>
</table>


##### 7 - Adicionar identificadores das novas colunas à variável displayedColumns, ficando
displayedColumns: string[] = ['ID', 'name', 'price'];


##### 8 - Ainda em <table>, adicionar modelo pra coluna de ações, que terá ícones clicáveis para editar e apagar produtos. Ficará
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
Adiciona um espaço sem quebra, utilizado para preencher um espaço vazio (sem conteúdo), dar um espaço entre os ícones.


##### 9 - Adicionar identificador da nova coluna à variável displayedColumns, ficando
displayedColumns: string[] = ['ID', 'name', 'price', 'actions'];


##### 10 - Adicionar CSS
a {
    color: #fff;
    text-decoration: none;
}