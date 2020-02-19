##### 1 - criar componente footer
    ng g c components/template/footer --skipTests


##### 2 - Adicionar o seletor do footer no componente principal, ficando:
<fenix-header></fenix-header>

<fenix-footer></fenix-footer>


##### 3 - Como toolbar já importado no módulo principal, não precisa mais


##### 4 - Adicionar toolbar ao template de footer:
<mat-toolbar class="footer">
</mat-toolbar>


##### 5 - Adicionar CSS
.footer {
    position: fixed;
    bottom: 0;
}


##### 5 - Adicionar mensagem personalizada
<mat-toolbar class="footer">
    <span class="footer-message">
        Desenvolvido com
        <i class="material-icons">
            favorite
        </i>
        por <strong> Cod<span>3</span>r</strong>
    </span>
</mat-toolbar>


##### 6 - adicionar CSS
.footer-message {
    position: fixed;
    right: 16px;
    font-family: 'Montserrat', sans-serif;
}

.material-icons {
    color: rgb(227, 94, 107) !important;
    vertical-align: middle;
}

strong span {
    color: rgb(227, 94, 107) !important;
}





## - CSS completo
.footer {
    position: fixed;
    bottom: 0;
}

.footer-message {
    position: fixed;
    right: 16px;
    font-family: 'Montserrat', sans-serif;
}

.material-icons {
    color: rgb(227, 94, 107) !important;
    vertical-align: middle;
}

strong span {
    color: rgb(227, 94, 107) !important;
}
