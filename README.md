# Projeto graphql

* Projeto para estudo do GraphQL, desenvolvido conforme instruções: https://www.youtube.com/watch?v=7RoHxSGVAdU&list=PLPXWI3llyMiK9uw7tfljM2hnQl2qu6CeT
* Instalada a extensão GraphQL no vsCode, para melhor visualização do código.

## Info Gerais do GraphQL

* Toda requisição é POST
* Toda request bate no MESMO endpoint (/graphql). Então como a API sabe qual requisição está sendo acionada? É através de strings enviadas dentro do corpo da requisição:
    * Query: para obtenção de informações/ dados (Equivalente ao GET do REST)
    * Mutation: para manipulação de informações/ dados (Equivalente ao POST/PUT/PATCH/DELETE do REST)
* Scalar Types: String, Int, Boolean, Float e ID
* Playground GraphQL: equivale ao Insomnia/ Postman do REST. Obs: é possível usar essas ferramentas no lugar do playground.

## Comandos utilizados

* Este projeto usa o gerenciador de pacotes YARN.
    * Deu erro ao tentar instalar pelo NPM: 'npm install -g yarn'
    * Então a instalação ocorreu através do próprio site: 'https://classic.yarnpkg.com/en/'
* Comandos executados após a instalação:
    * 'yarn init -y': isso resultou na criação do arquivo 'package.json'
    * 'yarn add apollo-server graphql': está instalando o 'apollo-server' e o 'graphql'
        * O Apollo é uma implementação bem completa do GraphQL, que já tem as ferramentas necessárias, começando pelo principal: um servidor GraphQL.
    * 'node src/index.js': execução do index. Isso abre o Playground GraphQL.
