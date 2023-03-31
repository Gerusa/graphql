# Projeto graphql

* Projeto para estudo de API GraphQL, desenvolvido conforme instruções: https://www.youtube.com/watch?v=7RoHxSGVAdU&list=PLPXWI3llyMiK9uw7tfljM2hnQl2qu6CeT
* Instalada a extensão GraphQL no vsCode, para melhor visualização do código.
* As regras de inicialização do servidor (apollo) estão dentro do startServer.js
* No package.json, foi adicionado o script 'dev' para que o servidor possa ser iniciado com o comando 'yarn dev', no lugar de 'node src/index.js'. O comando '-e js,gql' é para que toda alteração em arquivo js e gql reinicie o servidor.

### Pré Requisitos

* MongoDB rodando em 'mongodb://localhost:27017/graphql'

## Info Gerais do GraphQL

* GraphQL é uma linguagem de consulta e ambiente de execução voltada a servidores para as APIs, cuja prioridade é fornecer exatamente os dados que os clientes solicitam e nada além. Isso torna as APIs mais rápidas, flexíveis e intuitivas para os desenvolvedores.
* Toda requisição é POST
* Toda request bate no MESMO endpoint (/graphql). Então como a API sabe qual requisição está sendo acionada? É através de strings enviadas dentro do corpo da requisição:
    * Query: para obtenção de informações/ dados (Equivalente ao GET do REST)
    * Mutation: para manipulação de informações/ dados (Equivalente ao POST/PUT/PATCH/DELETE do REST)
* Scalar Types: String, Int, Boolean, Float e ID(é o identificador do objeto, independente do tipo)
* Playground GraphQL: equivale ao Insomnia/ Postman do REST. Obs: é possível usar essas ferramentas no lugar do playground.
* Os 'schema' geram o database e collections no banco.
* Subscriptions é a forma de trabalhar com WebSockets - real time - dentro do GraphQL.
    * Não funcionou pois na versão 3 do Apollo Server o suporte a Subscriptions foi descontinuado.

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
    * 'yarn add merge-graphql-schemas': junta todos os schemas e 'joga' no apollo
    * 'yarn add graphql@15.8.0': versão alterada de '16.6.0' para '15.8.0' devido erro 'const comment = graphql.getDescription(node, { commentDescriptions: true });' relacionado aos merges de schemas
