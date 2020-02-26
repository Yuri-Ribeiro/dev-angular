### Documentação dos componentes table: https://material.angular.io/components/table

##### 1 - criar componente product-read
ng g c components/product/product-read --skipTests


##### 2 - adicionar o seletor de product-read no template de product-crud-homepage, ficando:
<fenix-product-read></fenix-product-read>


###### Para criar e testar logo em seguida a tabela de produtos, trabalharemos com dados estáticos inicialmente. Para isso, será necessário criar uma variável products com dados estáticos.

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
Propriedade que indica se tratar de uma tabela do Angular Material

## dataSource
Propriedade que recebe os dados a serem inseridos na tabela. Um array deve ser passado. A tabela renderizará uma linha para cada objeto do array.

## []
Alternativa (forma canônica): põe-se o "bind-" na frente. Ex.: bind-dataSource
Os colchetes indicam se tratar de Property Bind, uma técnica one-way data binding. Property Bind é indicado para vincularmos uma propriedade de um elemento DOM a uma propriedade definida no código TypeScript do componente. É mais curto e limpo que interpolação de string.
É diferente de interpolação de string, que é quando queremos renderizar um valor associado para o template do componente, ou seja, sempre há uma conversão para string. Já Property Bind retorna o valor real, seja booleano, array, objeto etc. 
Por exemplo, na expressão abaixo, o botão nunca estará ativado, pois o retorno da interpolação será sempre uma string:
<button disabled='{{isDisabled}}'>Try Me</button>
Assim funcionaria:
<button [disabled]='isDisabled'>Try Me</button>
Mais informações: https://www.javatpoint.com/property-binding-in-angular-8

## products
Atributo definido no TypeScript do componente.

##### 8 - 