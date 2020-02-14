### Documentação dos componentes sidenav: https://material.angular.io/components/sidenav

##### 1 - importar o sidenav no modulo principal (app.module.ts)
    import {MatSidenavModule} from '@angular/material/sidenav';

##### 2 - incluir MatSidenavModule na lista de imports. Ficará, por exemplo:
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule
    ],

##### 3 - no template da nav, adicionar o componente sidenav container, que abrigará conteúdo do menu lateral e o conteúdo principal
    <mat-sidenav-container>
    </mat-sidenav-container>

#   <mat-sidenav-container>
    Contéudos que você não deseja que sejam afetado pela barra lateral, como um header ou footer, podem ser colocados fora do contêiner

##### 4 - adicionar o componente <mat-sidenav>, que agrupa o conteúdo do menu lateral
    <mat-sidenav-container>
        <mat-sidenav>
        </mat-sidenav>
    </mat-sidenav-container>

##### 5 - adicionar o componente <mat-sidenav-content>, que agrupa o conteúdo principal
    <mat-sidenav-container>
        <mat-sidenav>
        </mat-sidenav>

        <mat-sidenav-content>
        </mat-sidenav-content>
    </mat-sidenav-container>

##### 6 - adiciona




##### sidenav, por ser somente container, não tem a propriedade "Color" disponível, não podendo variar entre primary/accept/warn