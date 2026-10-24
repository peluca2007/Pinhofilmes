# Pinha Filmes

Página web para pesquisar séries e filmes usando a API pública do [TVmaze](https://www.tvmaze.com/api). Os resultados aparecem em uma grade de pôsteres com detalhes ao passar o mouse.

## Funcionalidades

- Formulário de busca por título (campo obrigatório)
- Consulta ao endpoint `search/shows` do TVmaze com `fetch` e `async/await`
- Cards com pôster, título, ano de estreia, nota média e resumo (sem as tags HTML da API)
- Imagem padrão quando o título não tem pôster
- Mensagens para "nenhum resultado encontrado" e para erro na requisição
- Layout responsivo (media query para telas de até 600px)

## Tecnologias

- HTML5 e CSS3
- JavaScript puro
- API do TVmaze
- Google Fonts (Poppins)

## Como rodar

Não há dependências nem etapa de build: abra o `index.html` no navegador (é preciso estar conectado à internet para acessar a API).

## Estrutura

```
index.html   estrutura da página
style.css    estilos da grade e dos cards
script.js    busca na API e renderização dos resultados
pinha.png    logo
```
