##### 1 - Caso o template do app.component esteja em formato de template string:
    É possível fazer referência a um arquivo html, criando na mesma pasta o "app.component.html". Para referenciá-lo, mudar para a propriedade templateUrl no componente,
    ficando: templateUrl: './app.component.html'

##### 2 - com o terminal na pasta frontend, executar o comando para criar o componente nav
    ng generate component nav

## sidenav, por ser somente container, não tem a propriedade "Color" disponível, não podendo variar entre primary/accept/warn