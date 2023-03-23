// importando o apollo
import { ApolloServer, PubSub } from 'apollo-server';

import mongoose from 'mongoose';

// function para iniciar o servidor
function startServer({ typeDefs, resolvers }) {
    // conexao com o banco
    // os parametros sao para nao apresentar os warns quando startar a aplicacao
    // foi necessario trocar 'localhost' por '127.0.0.1' para resolver problema de conexao com o banco
    mongoose.connect('mongodb://127.0.0.1:27017/graphql', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    // o pubsub vai ajudar a criar o tunel de websocket para enviar info do backend para os clientes que estao conectados no canal
    const pubsub = new PubSub();

    // instancia o servidor
    // context eh uma forma de compartilhar a informacao entre todos os resolvers da aplicacao
    const server = new ApolloServer({typeDefs, resolvers, context: { pubsub } });
    server.listen().then(({ url }) => console.log(`Server started at ${url}`));

}

export default startServer;