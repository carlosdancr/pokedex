# Pokédex

Aplicação web simples que consulta a **PokéAPI** e exibe informações básicas do Pokémon (nome, imagem, tipos, estatísticas) usando **HTML5**, **CSS3/SCSS** e **JavaScript** puro — sem frameworks.

![Pokédex](img/screenshot.png)

## 🚀 Demo

- **Produção:** [https://pokedex-carlosdancr.vercel.app/](https://pokedex-sable-eta-87.vercel.app/)

## 🧰 Tecnologias

- **HTML5**
- **CSS3 / SCSS**
- **JavaScript (ES6+)**
- **PokéAPI (REST)** — Base URL: `https://pokeapi.co/api/v2/`

## 📦 Estrutura do projeto

```
/
├── css/              # estilos (SCSS/CSS)
├── img/              # imagens
├── app.js            # lógica da aplicação
├── index.html        # documento principal
├── favicon.svg
└── README.md
```

## 📚 Como funciona (alto nível)

1. A página carrega `index.html` e os estilos de `/css`.  
2. O script `app.js` realiza **requisições REST** para a **PokéAPI** (por exemplo, `GET /pokemon/{id}`) e preenche a interface com os dados retornados (nome, tipos e imagens disponíveis).

## 🖥️ Executando localmente

> Este é um **site estático**; não há necessidade de backend.

### Opção A: Abrir o arquivo
1. Clone ou baixe o repositório.
2. Abra `index.html` diretamente no navegador.

### Opção B: Servidor estático (recomendado)
Use qualquer servidor estático (por exemplo, a extensão **Live Server** do VS Code ou `npx serve`):

```bash
# com Node instalado
npx serve .
# ou use a extensão Live Server do VS Code e clique em "Open with Live Server"
```

## 🔗 Integração com a PokéAPI

- **Base**: `https://pokeapi.co/api/v2/`  
- **Exemplo de recurso**: `GET /pokemon/ditto` retorna JSON com nome, imagem, tipos, estatísticas etc.
