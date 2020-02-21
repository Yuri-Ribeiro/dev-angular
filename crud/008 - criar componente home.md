### Documentação dos componentes card: https://material.angular.io/components/card

##### 1 - criar componente home
ng g c views/home --skipTests


##### 2 - adicionar o seletor de home em <mat-sidenav-content> do template de nav, ficando:
<mat-sidenav-content class="content">
    <fenix-home></fenix-home>
</mat-sidenav-content>


##### 3 - importar componentes card
import {MatCardModule} from '@angular/material/card';


##### 4 - colocar MatCardModule na lista de imports


##### 5 - no template de home, adicionar título e subtítulo
<mat-card class="mat-elevation-z3">
    <mat-card-title class="title">Bem Vindo!</mat-card-title>
    <mat-card-subtitle class="subtitle">
        Sistema para exemplificar a construção de um cadastro desenvolvido em Angular!
    </mat-card-subtitle>
</mat-card>

## <mat-card>
É um contêiner num contexto de um único objeto, seja texto ou fotos, por exemplo. Por padrão já tem elevação, mas preferi usar a 3.


##### 6 - Adicionar CSS
.title {
    font-size: 3.5rem;
    font-weight: 300;
    line-height: 1.2;
}

.subtitle {
    font-size: 1rem;
}