---------------- header.model.ts

OK


---------------- header.service.ts


OK


----------------- header.component


OK

--- alterar

OK

----------------- product-crud-homepage.component.ts

OK

-------------------- home.component.ts

OK

----------------------- na aula configurar rotas
##### 5 - Em header.component.html, definir a rota para a logo, ficando:
<a routerLink="/">
    <img id="logo" src="assets/img/logo.png">
</a>


##### 6 - Em product-crud-homepage.component.ts, definir a rota correta para o atribudo do cabeçalho routeURL, ficando:
constructor(private router: Router, private headerService: HeaderService) { 
  this.headerService.setHeaderData({
    title: "Produtos",
    iconName: "storefront",
    routeURL: "/products"
  })
}


##### 7 - Em home.component.ts, definir a rota correta para o atribudo do cabeçalho routeURL, ficando:
constructor(private router: Router, private headerService: HeaderService) { 
  this.headerService.setHeaderData({
    title: "Produtos",
    iconName: "storefront",
    routeURL: "/"
  })
}