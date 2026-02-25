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
            link: "pages/apucarana.html", 
            dropdown: [
                { texto: "Linha Histórica", link: "pages/linha-historica.html" },
                { texto: "Dados Hidrográficos", link: "pages/dados-hidrograficos.html" },
                { texto: "Mapas", link: "pages/mapas.html" }
            ]
        },    
        { texto: "Materiais", link: "pages/materiais.html" }, 
        { texto: "Projetos", link: "pages/projetos.html" }, 
        { texto: "Equipe", link: "pages/equipe.html" },
        { texto: "Sobre", link: "pages/sobre.html" },
        { texto: "Contato", link: "pages/contato.html" }
    ]
}; // <--- ADICIONE ESTA CHAVE E O PONTO E VÍRGULA AQUI!

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
    // Dica: Adicione esta linha abaixo para limpar o menu antes de desenhar
    menuContainer.innerHTML = ''; 

    menuItens.forEach(item => {
        const li = document.createElement('li');
        li.className = 'nav-item';

        const linkPrincipal = item.link.startsWith('#') ? item.link : (caminhoBase + item.link);

        if (item.dropdown) {
            li.className += ' dropdown';
            // Note que mudei para item.texto para garantir que apareça "Apucarana"
            let htmlDropdown = `
                <a class="nav-link dropdown-toggle" href="${linkPrincipal}" role="button" data-bs-toggle="dropdown">
                    ${item.texto}
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