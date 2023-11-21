# Coffee Delivery Challenge

## Descrição do Projeto

Bem-vindo ao desafio de desenvolvimento da trilha da Trilha de React do Ignite, para criar um sistema de gerenciamento de carrinho de compras para uma cafeteria fictícia. Esta aplicação proporcionará aos usuários uma experiência intuitiva e eficiente ao escolherem seus cafés favoritos e realizarem pedidos de entrega.

## Funcionalidades

1. **Listagem de Produtos (Cafés):**
   - Apresenta uma lista dos cafés disponíveis para compra na cafeteria. Cada café é exibido com detalhes como nome, descrição e preço.

2. **Adição de Itens ao Carrinho:**
   - Permite que o usuário adicione uma quantidade específica de cafés ao seu carrinho de compras. A interface facilita a seleção do número desejado de unidades.

3. **Atualização do Carrinho:**
   - Oferece a capacidade de aumentar ou remover a quantidade de itens no carrinho, proporcionando flexibilidade aos usuários para ajustarem seus pedidos conforme desejado.

4. **Formulário de Endereço:**
   - Implementa um formulário para que os usuários forneçam seu endereço de entrega. Essa etapa é essencial para garantir que os cafés cheguem ao destino correto.

5. **Exibição no Header:**
   - Mostra o total de itens no carrinho no cabeçalho da aplicação, proporcionando uma visão rápida e conveniente do conteúdo do carrinho a qualquer momento.

6. **Cálculo do Valor Total:**
   - Exibe o valor total da compra, calculado multiplicando a quantidade de cada item no carrinho pelo seu respectivo preço. Isso fornece aos usuários uma estimativa clara do custo total do pedido.

## Conceitos Envolvidos

Ao trabalhar neste projeto, você terá a oportunidade de revisitar e aplicar os seguintes conceitos:

- **Estados:** Gerenciamento eficiente dos estados da aplicação para garantir uma experiência de usuário consistente e dinâmica.

- **ContextAPI:** Utilização da Context API do React para compartilhar dados relevantes entre componentes sem a necessidade de passar props manualmente.

- **LocalStorage:** Armazenamento local para preservar o estado da aplicação, permitindo que os usuários continuem de onde pararam mesmo após recarregar a página.

- **Imutabilidade do Estado:** Adoção de práticas que garantam a imutabilidade do estado, promovendo uma gestão mais segura e eficiente dos dados.

- **Listas e Chaves no ReactJS:** Manipulação de listas de produtos e itens no carrinho, com atenção especial ao uso de chaves únicas para otimizar o desempenho do React.

- **Propriedades e Componentização:** Estruturação modular do código por meio de componentes reutilizáveis e eficientes na transmissão de propriedades.

## Como Iniciar

1. Clone o repositório: `git clone https://github.com/seu-usuario/nome-do-repositorio.git`
2. Navegue até o diretório do projeto: `cd nome-do-repositorio`
3. Instale as dependências: `npm install` ou `yarn install`
4. Inicie a aplicação: `npm run dev` ou `yarn run dev`

Divirta-se desenvolvendo esta aplicação de Coffee Delivery! Não hesite em explorar, adaptar e aprimorar as funcionalidades conforme necessário. Boa codificação! ☕🚀



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

