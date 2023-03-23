import User from '../../../models/User';

import { USER_ADDED } from './channels';

export default {
    // resolvendo a propriedade fullName
    User: {
        fullName: (user) => `${user.firstName} ${user.lastName}`

    },
    Query: {
        users: async () => await User.find(),
        user: async (_, { id }) => await User.findById(id),
    },
    Mutation: {
        // o data pode ser usado pois o userInput foi criado no schema
        createUser: async (_, { data }, { pubsub }) => { 
           const user = await User.create(data);

           // websocket
           pubsub.publish(USER_ADDED, {
                userAdded: user,
           });

           return user;
        },
        // new: true indica que eh para retornar os dados atualizados
        updateUser: async (_, { id, data }) => User.findOneAndUpdate(id, data, { new: true }),
        deleteUser: async (_, { id }) => {
            const deleted = await User.findByIdAndDelete(id);
            // exclamacao 2x forca que o retorno seja booleano
            return !!deleted;
        },
    },
    Subscription: {
        //userAdded eh o canal
        userAdded: {
            // pubsub eh o context. Context eh uma forma de compartilhar a informacao entre todos os resolvers da aplicacao
            subscribe: (obj, args, { pubsub }) => pubsub.asyncIterator(USER_ADDED),
        },
    },
};