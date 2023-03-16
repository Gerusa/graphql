# Projeto graphql

* Projeto para estudo de API GraphQL, desenvolvido conforme instruções: https://www.youtube.com/watch?v=7RoHxSGVAdU&list=PLPXWI3llyMiK9uw7tfljM2hnQl2qu6CeT
* Instalada a extensão GraphQL no vsCode, para melhor visualização do código.
* As regras de inicialização do servidor (apollo) estão dentro do startServer.js
* No package.json, foi adicionado o script 'dev' para que o servidor possa ser iniciado com o comando 'yarn dev', no lugar de 'node src/index.js'

### Pré Requisitos

* MongoDB rodando em 'mongodb://localhost:27017/graphql'

## Info Gerais do GraphQL

* Toda requisição é POST
* Toda request bate no MESMO endpoint (/graphql). Então como a API sabe qual requisição está sendo acionada? É através de strings enviadas dentro do corpo da requisição:
    * Query: para obtenção de informações/ dados (Equivalente ao GET do REST)
    * Mutation: para manipulação de informações/ dados (Equivalente ao POST/PUT/PATCH/DELETE do REST)
* Scalar Types: String, Int, Boolean, Float e ID(é o identificador do objeto, independente do tipo)
* Playground GraphQL: equivale ao Insomnia/ Postman do REST. Obs: é possível usar essas ferramentas no lugar do playground.

## Comandos utilizados

* Este projeto usa o gerenciador de pacotes YARN.
    * Deu erro ao tentar instalar pelo NPM: 'npm install -g yarn'
    * Então a instalação ocorreu através do próprio site: 'https://classic.yarnpkg.com/en/'
* Comandos executados após a instalação:
    * 'yarn init -y': isso resultou na criação do arquivo 'package.json'
    * 'yarn add apollo-server graphql': está instalando o 'apollo-server' e o 'graphql'
        * O Apollo é uma implementação bem completa do GraphQL, que já tem as ferramentas necessárias, começando pelo principal: um servidor GraphQL.
    * 'node src/index.js' ou 'yarn dev': execução do index. Isso abre o Playground GraphQL.
    * 'yarn add @babel/core @babel/preset-env @babel/node -D': (-D indica que é uma dependência de desenvolvimento)
    * yarn add nodemon -D
    * 'yarn add mongoose' para fazer uso do banco de dados mongoDB