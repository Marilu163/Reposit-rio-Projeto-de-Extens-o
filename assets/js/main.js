// Verifica se estamos dentro da pasta 'pages'
const isPaginaInterna = window.location.pathname.includes('/pages/');
const caminhoBase = isPaginaInterna ? '../' : '';

/**
 * ⚙️ CONFIGURAÇÃO DO SITE
 */
const configSite = {
    tituloHero: "Bem-vindo ao CAUS",
    subtituloHero: "Atlas histórico e socioambiental das regiões hidrográficas.",
    nomeRegiao: "Bacia do Monjolinho", 

    // LISTA DE ABAS COM CAMINHO INTELIGENTE
    menu: [
        { texto: "Início", link: caminhoBase + "index.html" },
        { 
            texto: "Região", 
            link: caminhoBase + "index.html#regiao",
            dropdown: [
                { texto: "Linha Histórica", link: "#" },
                { texto: "Dados Hidrográficos", link: "#" },
                { texto: "Mapas", link: "#" }
            ]
        },
        { texto: "Projetos", link: caminhoBase + "index.html#projetos" },
        { texto: "Sobre o CAUS", link: caminhoBase + "pages/sobre.html" },
        { texto: "Contato", link: caminhoBase + "pages/contato.html" }
    ]
};

// ... O restante do código de desenho do menu continua igual daqui para baixo ...
// 1. Atualiza Textos Iniciais (somente se estiver na página inicial)
const tituloPrincipal = document.getElementById('titulo-principal');
const subtituloPrincipal = document.getElementById('subtitulo-principal');

if (tituloPrincipal && subtituloPrincipal) {
    tituloPrincipal.innerText = configSite.tituloHero;
    subtituloPrincipal.innerText = configSite.subtituloHero;
}

// 2. Desenha o menu dinâmico
const menuItens = configSite.menu;
const menuContainer = document.getElementById('menu-dinamico');

if (menuContainer) {
    menuItens.forEach(item => {
        const li = document.createElement('li');
        li.className = 'nav-item';

        if (item.dropdown) {
            li.className += ' dropdown';
            const textoMenu = item.texto === "Região" ? configSite.nomeRegiao : item.texto;

            let htmlDropdown = `
                <a class="nav-link dropdown-toggle" href="${item.link}" role="button" data-bs-toggle="dropdown">
                    ${textoMenu}
                </a>
                <ul class="dropdown-menu">
            `;
            
            item.dropdown.forEach(subItem => {
                htmlDropdown += `<li><a class="dropdown-item" href="${subItem.link}">${subItem.texto}</a></li>`;
            });

            htmlDropdown += `</ul>`;
            li.innerHTML = htmlDropdown;

        } else {
            li.innerHTML = `<a class="nav-link" href="${item.link}">${item.texto}</a>`;
        }

        menuContainer.appendChild(li);
    });
}

// 3. Atualiza título da seção Região
const tituloRegiaoSection = document.getElementById('titulo-regiao');
if (tituloRegiaoSection) {
    tituloRegiaoSection.innerText = "Sobre: " + configSite.nomeRegiao;
}