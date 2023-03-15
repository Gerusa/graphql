// importando o apollo
const { ApolloServer, gql} = require('apollo-server');

const typeDefs = gql`
    type User {
        # a exclamacao indica que o atributo eh obrigatorio
        _id: ID!
        name: String!
        email: String!
        active: Boolean!
    }

    type Post {
        _id: ID!
        title: String!
        content: String!
        author: User!
    }

    type Query {
        hello: String
        # a exclamacao do users indica que o array pode estar vazio, porem nao null
        users: [User!]!
        getUserByEmail(email: String!): User!
    }

    type Mutation {
       createUser(name: String!, email: String!): User!
    }
`;

const users = [
    { _id: String(Math.random()), name: 'Mateus', email: 'mateus@teste.com', active: true },
    { _id: String(Math.random()), name: 'Mateus 2', email: 'mateus2@teste.com', active: false },
    { _id: String(Math.random()), name: 'Mateus 3', email: 'mateus3@teste.com', active: true }
];

// Os resolvers sao para as 'Query'. Sao mocks.
const resolvers = {
    Query: {
        hello: () => 'Hello World',
        users: () => users,
        getUserByEmail: (_, args) => {
            return users.find((user) => user.email === args.email);
        },
    },

    Mutation: {
        createUser:(_, args) => {
            const newUser = {
                _id: String(Math.random()),
                name: args.name,
                email: args.email,
                active: true,
            };

            //add o novo usuario na constante users
            users.push(newUser);
            return newUser;
        }
    },
};

// criando uma instância do apollo 
const server = new ApolloServer({typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`Server started at ${url}`));