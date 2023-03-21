// importando o apollo
import { ApolloServer } from 'apollo-server';

import mongoose, { Mongoose } from 'mongoose';

// function para iniciar o servidor
function startServer({ typeDefs, resolvers }) {
    // conexao com o banco
    // os parametros sao para nao apresentar os warns quando startar a aplicacao
    // foi necessario trocar 'localhost' por '127.0.0.1' para resolver problema de conexao com o banco
    mongoose.connect('mongodb://127.0.0.1:27017/graphql', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    // instancia o servidor
    const server = new ApolloServer({typeDefs, resolvers });
    server.listen().then(({ url }) => console.log(`Server started at ${url}`));

}

export default startServer;