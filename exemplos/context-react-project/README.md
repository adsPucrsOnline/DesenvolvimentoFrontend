## Nome: `Nome do aluno aqui`

Para executar este projeto:

1. Entre pasta context-react-project no terminal:
```
cd exemplos/context-react-project
```

2. Rode npm install para instalar as dependências do projeto:


```
npm install
```

3. E em seguida, npm start, para iniciar a execução do projeto.

```
npm start
```

Após execução do projeto, este é o resultado esperado no navegador:
![Gif mostrando o resultado esperado ao rodar este projeto](./resultado.gif)

## Introdução

Este projeto contém uma estrutura básica a partir do template CRA, sem muitas alterações, com o objetivo de demostrar como compartilhar o estado de uma aplicação utilizando React Router e React Context API.

## Componentes

Os componentes estão no diretório `./src/components` e eles possuem as seguintes características:
- ChildrenComponent:
  - `props`
    - items: um array com uma lista de dados para ser mostrado;
    - onAdd: callback que é chamado quando o botão "Adicionar algo" é clicado;
  - Descrição: este componente é uma simples demostração de como utilizar callback para adicionar itens em um array e como listar este array.

- List:
  - Descrição: este componente renderiza o ChildrenComponent a partir dos dados presentes no contexto e também é responsável por disparar as mudanças no contexto.

- Navbar:
  - Descrição: este componente utiliza Link do React Router para mostrar as páginas disponíveis em uma barra de navegação

## Conclusão

Este projeto é apenas para fins demonstrativos e não contém mais alterações do que as necessárias para demostrar algumas funcionalidades úteis para o desenvolvimento de projetos em ReactJS.
