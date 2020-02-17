##### 1 - criar componente footer
    ng g c footer

##### 2 - Adicionar toolbar ao template:
<mat-toolbar class="footer">
</mat-toolbar>

##### 3 - Adicionar mensagem personalizada
<mat-toolbar class="footer">
    <span class="footer-message">
        Desenvolvido com
        <i class="material-icons">
            favorite
        </i>
        por <strong> Cod<span>3</span>r</strong>
    </span>
</mat-toolbar>

##### 6 - adicionar css
.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
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
