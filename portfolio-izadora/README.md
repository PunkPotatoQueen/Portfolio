# Portfólio — Izadora Freitas Oliveira

Site de portfólio pessoal em React + Vite, com tema escuro/rosa, animações e
tradução PT/EN, pronto para publicar na Vercel.

## Rodando localmente

Pré-requisito: **Node.js v22.22.2** (veja `.nvmrc`).

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview   # pra conferir o build localmente
```

O build final fica na pasta `dist/`.

## Publicando na Vercel

**Opção 1 — pelo site:**
1. Suba essa pasta num repositório no GitHub (crie um repo novo e faça `git init`, `git add .`, `git commit`, `git push`).
2. Entre em [vercel.com](https://vercel.com), clique em "Add New Project" e importe o repositório.
3. A Vercel detecta automaticamente que é um projeto Vite — não precisa mexer em nada (o `vercel.json` já está configurado). Clique em "Deploy".

**Opção 2 — pela CLI:**
```bash
npm install -g vercel
vercel login
vercel        # segue as perguntas (preview)
vercel --prod # publica em produção
```

## Estrutura

```
src/
  assets/          → suas imagens (foto, foguete, ícones)
  components/       → cada seção do site (Hero, About, Projects, etc.)
  i18n/
    translations.js      → todo o texto do site em PT e EN
    LanguageContext.jsx  → lógica do botão de trocar idioma
  index.css         → todas as cores, fontes e animações
public/
  curriculo-izadora-freitas.pdf → currículo pra download no site
```

## Editando conteúdo

- **Textos (PT/EN):** tudo fica em `src/i18n/translations.js`. Cada seção tem
  uma chave em português (`pt`) e outra em inglês (`en`) — mantenha as duas
  atualizadas juntas.
- **Cores e fontes:** no topo de `src/index.css`, dentro de `:root`, estão
  todas as variáveis de cor (`--pink`, `--lilac`, `--bg`...) e fonte.
- **Novos projetos:** adicione um objeto na lista `items` dentro de
  `projects` ou `web` em `translations.js` (em PT e em EN).
- **Trocar imagens:** substitua os arquivos em `src/assets/` mantendo o
  mesmo nome, ou troque o nome no `import` do componente correspondente.

## Sobre o design

O foguete rosa é o fio condutor do site: ele aparece na hero "flutuando" e
também vira a barra de progresso de rolagem (a linha vertical à esquerda em
telas grandes), como se estivesse traçando a trajetória do seu percurso —
do IFPE até hoje.
