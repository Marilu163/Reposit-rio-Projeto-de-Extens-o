// Verifica se estamos dentro da pasta 'pages'
const isPaginaInterna = window.location.pathname.includes('/pages/');
const caminhoBase = isPaginaInterna ? '../' : '';

/**
 * ⚙️ CONFIGURAÇÃO DO SITE
 */
const configSite = {
    tituloHero: "Bem-vindo ao CAUS",
    subtituloHero: "Atlas histórico e socioambiental de Apucarana.",
    nomeRegiao: "Apucarana", 

    menu: [
        { texto: "Início", link: "index.html" },
        { 
            texto: "Apucarana", 
            link: "#regiao",
            dropdown: [
                { texto: "Linha Histórica", link: "#" },
                { texto: "Dados Hidrográficos", link: "#" },
                { texto: "Mapas", link: "#" }
            ]
        },
        { texto: "Projetos", link: "#projetos" },
        { texto: "Materiais", link: "#" },
        { texto: "Equipes e parcerias", link: "pages/equipe.html" },
        { texto: "Sobre o CAUS", link: "#" },
        { texto: "Contato", link: "pages/contato.html" }
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

        // Lógica para aplicar o caminhoBase corretamente
        const linkPrincipal = item.link.startsWith('#') ? item.link : (caminhoBase + item.link);

        if (item.dropdown) {
            li.className += ' dropdown';
            const textoMenu = item.texto === "Região" ? configSite.nomeRegiao : item.texto;

            let htmlDropdown = `
                <a class="nav-link dropdown-toggle" href="${linkPrincipal}" role="button" data-bs-toggle="dropdown">
                    ${textoMenu}
                </a>
                <ul class="dropdown-menu">
            `;
            
            item.dropdown.forEach(subItem => {
                const linkSub = subItem.link.startsWith('#') ? subItem.link : (caminhoBase + subItem.link);
                htmlDropdown += `<li><a class="dropdown-item" href="${linkSub}">${subItem.texto}</a></li>`;
            });

            htmlDropdown += `</ul>`;
            li.innerHTML = htmlDropdown;

        } else {
            li.innerHTML = `<a class="nav-link" href="${linkPrincipal}">${item.texto}</a>`;
        }

        menuContainer.appendChild(li);
    });
}

// 3. Atualiza título da seção Região
const tituloRegiaoSection = document.getElementById('titulo-regiao');
if (tituloRegiaoSection) {
    tituloRegiaoSection.innerText = "Sobre: " + configSite.nomeRegiao;
}