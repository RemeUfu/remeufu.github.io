# remeufu.github.io

Site do Grupo REME (Remodelando sua Empresa com Matemática e Estatística), projeto de extensão do IME/UFU.

Endereço: https://remeufu.github.io/

A pasta `site_reme/` só redireciona o endereço antigo (remeufu.github.io/site_reme/) para o novo.

## Estrutura

| Arquivo | Página |
|---|---|
| `index.html` | Início: o que fazemos, como funciona, custos, parceiros e contato |
| `empresas.html` | Para empresas: áreas de atuação, como trabalhamos, editais e Lei do Bem |
| `quemsomos.html` | Equipe |
| `oficinas.html` | Oficina REME (edições e fotos) |
| `projetos.html` | Pôsteres, notícias e eventos |
| `editais.html` | Editais do IME/UFU |
| `assets/css/site.css` | Estilo de todas as páginas |
| `assets/js/site.js` | Menu no celular e ampliação das fotos |
| `assets/img/` | Logo, fotos da equipe (`equipe/`), eventos e oficinas |
| `pdfs/` | Editais, pôsteres e anais |
| `404.html` | Página mostrada quando um endereço não existe |
| `sitemap.xml`, `robots.txt` | Orientam o Google sobre quais páginas indexar |

O site é HTML estático, sem etapa de build. O GitHub Pages publica o que está no branch `main`.

## Como atualizar

- **Novo membro:** copie um bloco `<article class="person">` em `quemsomos.html`, dentro do grupo certo (Docentes ou Discentes), e salve a foto quadrada (400 × 400 px, JPG) em `assets/img/equipe/`.
- **Nova edição da Oficina:** copie um bloco `<article class="edition">` em `oficinas.html`.
- **Novo edital:** coloque o PDF em `pdfs/` e copie um item `<li class="card doc">` em `editais.html`. Se houver chamada aberta, troque o aviso amarelo do topo.
- **Fotos:** reduza para no máximo 1600 px no lado maior antes de enviar. Fotos de câmera com 4 a 5 MB deixam o site lento.
- **Galerias:** cada foto tem duas versões. A grande fica na pasta (por exemplo `assets/img/eventos/`) e abre ao clicar; a miniatura, recortada em 640 × 480 px, fica na subpasta `thumbs/` com o mesmo nome.
- **Nova página:** inclua o endereço em `sitemap.xml`, para o Google encontrá-la.
- **Próximos eventos:** ficam na seção `#proximos-eventos` de `index.html`, e a faixa de aviso fica no topo de todas as páginas (bloco `<div class="announce">`). Cada item tem `data-until="AAAA-MM-DD"` e some sozinho no dia seguinte a essa data; se não sobrar nenhum evento, a seção some também. Para anunciar um novo evento, troque o texto e a data.
- **Cache:** ao mudar `site.css` ou `site.js`, troque o número `?v=` nos links dessas folhas em todas as páginas, para os navegadores baixarem a versão nova.
- O cabeçalho e o rodapé se repetem nas cinco páginas. Ao mudar um link do menu ou o contato, altere em todas.

Cores do logo: azul `#092169` e laranja `#FF9906`.
