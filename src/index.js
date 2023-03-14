// importando o apollo
const { ApolloServer, gql} = require('apollo-server');

const typeDefs = gql`
    type Query {
        hello: String
}
`;
const resolvers = {
    Query: {
        hello: () => 'Hello World'
    }
};

// criando uma instância do apollo 
const server = new ApolloServer({typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`Server started at ${url}`));