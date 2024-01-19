var ultimoTituloMenuClicado = null;

    function alternarNav() {
        var nav = document.querySelector('nav');
        var header = document.querySelector('header');

        if (nav && header) {
            nav.style.display = (nav.style.display === 'none') ? 'block' : 'none'; 

            // Fecha o submenu ao clicar no menu principal
            if (ultimoTituloMenuClicado) {
                var ultimoSubMenu = ultimoTituloMenuClicado.querySelector('.submenu');
                if (ultimoSubMenu) {
                    ultimoSubMenu.style.display = 'none';
                }
            }
        }
    }

        function alternarSubMenu(tituloMenuClicado) {
            var nav = document.querySelector('nav');
            var submenu = tituloMenuClicado.querySelector('.submenu');

            // Fecha o submenu anterior, se existir
            if (ultimoTituloMenuClicado && ultimoTituloMenuClicado !== tituloMenuClicado) {
                var ultimoSubMenu = ultimoTituloMenuClicado.querySelector('.submenu');
                if (ultimoSubMenu) {
                    ultimoSubMenu.style.display = 'none';
                }
            }

            // Abre ou fecha o submenu atual
            if (submenu) {
                submenu.style.display = (submenu.style.display === 'none') ? 'block' : 'none';
            }

            // Atualiza o último título clicado
            ultimoTituloMenuClicado = tituloMenuClicado;
        }

        function chammarClickNav() {
            alternarNav();
        }

        function chamarClickSubMenu(tituloMenu) {
            alternarSubMenu(tituloMenu);
        }
